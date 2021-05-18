import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { v4 as uuidv4 } from 'uuid';
import { ProductDetailsProps } from './productDetails.types';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import { LoadWrapper, LoadingAnimation, StyledImage } from './productDetails.styles';
import { getImage } from '../helpers';

const ProductDetails: React.FC<ProductDetailsProps> = ({ selectedDisplay, product }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => dispatch(productsActions.isLoading(false)), 1500);
    }, [dispatch])
    const isLoaded = useSelector((state: ProductsReduxState) => state.isLoading);
    console.log(isLoaded)
    const imageSrc = getImage(product.image);
    return (
        <>
            {
                isLoaded ? (
                    <LoadWrapper>
                        <LoadingAnimation />
                    </LoadWrapper >
                ) : (
                        <StyledImage src={imageSrc.default} />
                    )}
        </>

    )
}

export default ProductDetails;