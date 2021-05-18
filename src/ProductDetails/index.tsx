import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { v4 as uuidv4 } from 'uuid';
import { ProductDetailsProps } from './productDetails.types';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import { ListContainer, ImageContainer } from './productDetails.styles';
import { getImage } from '../helpers';

const ProductDetails: React.FC<ProductDetailsProps> = ({ selectedDisplay, product }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => dispatch(productsActions.isLoading(false)), 2000);
    }, [dispatch])
    const isLoaded = useSelector((state: ProductsReduxState) => state.isLoading);
    console.log(isLoaded)
    const imageSrc = getImage(product.image);
    return (
        <ListContainer key={uuidv4()}>
            <ImageContainer imageSrc={imageSrc.default} isLoaded={isLoaded} />
            {selectedDisplay === 'list' && (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            )}
        </ListContainer>
    )
}

export default ProductDetails;