import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/products/actions/productActions';
import { ProductsListProps } from './productList.types';
import { filterProductsBySearchString } from '../helpers/selectors/productsSelectors';
import { AppState } from '../core';



const ProductDetails: React.FC<ProductsListProps> = ({ selectedValue }) => {
    const dispatch = useDispatch();
    const products = require('data/json');
    const displayProducts = useSelector((state: AppState) => filterProductsBySearchString(state));

    useEffect(() => {
        dispatch(productsActions.productsSet(products));
        dispatch(productsActions.isLoading());//TODO will be move into GalleryView?
    }, [dispatch])
    return (
        <ul>
            {displayProducts.map(product => (
                <ProductDetails
                    product={product}
                    selectedValue={selectedValue}
                />
            ))}
        </ul>
    )
}

export default ProductDetails;