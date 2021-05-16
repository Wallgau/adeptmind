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
        dispatch(productsActions.isLoading());//TODO will be move into GalleryView?
    }, [dispatch, products])
    const displayProducts = useSelector((state: ProductsReduxState) => filterProductsBySearchString(state));
    console.log('displayProducts', displayProducts)
    return (
        <>
            <ul>
                {displayProducts.map(product => (
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
                pageNeighbours={4}
                onChange={(value) => dispatch(productsActions.setPaginationPage(value))}
            />
        </>
    )
}

export default ProductList;