import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { ProductsListProps } from './productList.types';
import { filterProductsBySearchString } from '../helpers/selectors/productsSelectors';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import ProductDetails from '../ProductDetails';
import Pagination from '../Pagination';



const ProductList: React.FC<ProductsListProps> = ({ selectedValue }) => {
    const dispatch = useDispatch();
    const paginationPage = useSelector((state: ProductsReduxState) => state.currentPage);
    const products = require('../data.json');

    useEffect(() => {
        dispatch(productsActions.productsSet(products));
        dispatch(productsActions.isLoading(false));
    }, [dispatch, products])

    const displayProducts = useSelector((state: ProductsReduxState) => filterProductsBySearchString(state));
    const showItems = displayProducts.length >= (paginationPage * 4) + 4 ? displayProducts.slice(paginationPage * 4, (paginationPage * 4) + 4) : displayProducts;

    return (
        <>
            <ul>
                {showItems.map(product => (
                    <ProductDetails
                        product={product}
                        selectedValue={selectedValue}
                    />
                ))}
            </ul>
            <Pagination
                activePage={paginationPage}
                itemsPerPage={4}
                totalItems={displayProducts.length}
                pageNeighbours={1}
                onChange={(value) => dispatch(productsActions.setPaginationPage(value))}
            />
        </>
    )
}

export default ProductList;