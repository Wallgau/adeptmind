import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { Container } from './productList.styles';
import { filterProductsBySearchString } from '../helpers/selectors/productsSelectors';
import { getCurrentPageItems } from '../helpers/pagination/index';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import ProductDetails from '../ProductDetails';
import Pagination from '../Pagination';



const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const paginationPage = useSelector((state: ProductsReduxState) => state.currentPage);
    const displayProducts = useSelector((state: ProductsReduxState) => filterProductsBySearchString(state));
    const itemsToDisplay = getCurrentPageItems(displayProducts, paginationPage, 4);
    const products = require('../data.json');

    useEffect(() => {
        dispatch(productsActions.setPaginationPage(Number(sessionStorage.getItem('pagination'))))
    }, [dispatch])

    useEffect(() => {
        sessionStorage.setItem('pagination', JSON.stringify(paginationPage));
        dispatch(productsActions.productsSet(products));
    }, [dispatch, products, paginationPage])

    return (
        <>
            <Container>
                {itemsToDisplay.map(product => (
                    <ProductDetails
                        product={product}
                    />
                ))}
            </Container>
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