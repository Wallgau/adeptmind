import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { ProductsListProps } from './productList.types';
import { filterProductsBySearchString } from '../helpers/selectors/productsSelectors';
import { getCurrentPageItems } from '../helpers/pagination/index';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import ProductDetails from '../ProductDetails';
import Pagination from '../Pagination';



const ProductList: React.FC<ProductsListProps> = ({ selectedDisplay }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsActions.setPaginationPage(Number(sessionStorage.getItem('pagination'))))
    }, [dispatch])

    const products = require('../data.json');
    useEffect(() => {
        dispatch(productsActions.productsSet(products));
        dispatch(productsActions.isLoading(false));
    }, [dispatch, products])

    const paginationPage = useSelector((state: ProductsReduxState) => state.currentPage);
    const displayProducts = useSelector((state: ProductsReduxState) => filterProductsBySearchString(state));
    const itemsToDisplay = getCurrentPageItems(displayProducts, paginationPage, 4);
    console.log(itemsToDisplay)
    return (
        <>
            <ul>
                {itemsToDisplay.map(product => (
                    <ProductDetails
                        product={product}
                        selectedValue={selectedDisplay}
                    />
                ))}
            </ul>
            <Pagination
                currentPage={paginationPage}
                itemsPerPage={4}
                totalItems={displayProducts.length}
                pageNeighbours={1}
                onChange={(value) => dispatch(productsActions.setPaginationPage(value))}
            />
        </>
    )
}

export default ProductList;