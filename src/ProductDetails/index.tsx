import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from '../core/productsStore/actions/productActions';
import { v4 as uuidv4 } from 'uuid';
import { ProductDetailsProps } from './productDetails.types';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import { ListImgLoad, ListTitleLoad, ListDescriptionLoad, LoadWrapper, LoadingAnimation, StyledImage, ListContainer, Container } from './productDetails.styles';
import { getImage } from '../helpers';

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => dispatch(productsActions.isLoading()), 2000);
    }, [dispatch]);

    const isLoaded = useSelector((state: ProductsReduxState) => state.isLoading);
    const selectedDisplay = useSelector((state: ProductsReduxState) => state.view);
    const imageSrc = getImage(product.image);
    return (
        <Container selectedDisplay={selectedDisplay}>
            {isLoaded ? (
                <>
                    <ListImgLoad selectedDisplay={selectedDisplay}>
                        <LoadingAnimation />
                    </ListImgLoad>
                    {selectedDisplay === 'list' && (
                        <LoadWrapper>
                            <ListTitleLoad>
                                <LoadingAnimation />
                            </ListTitleLoad>
                            <ListDescriptionLoad>
                                <LoadingAnimation />
                            </ListDescriptionLoad>
                        </ LoadWrapper>
                    )}
                </>
            ) : (
                    <>
                        <ListContainer selectedDisplay={selectedDisplay} key={uuidv4()}>
                            <StyledImage src={imageSrc.default} alt={product.title} />
                        </ListContainer>
                        {selectedDisplay === 'list' && (
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                            </div>
                        )}
                    </>
                )}
        </Container >
    )
}

export default ProductDetails;