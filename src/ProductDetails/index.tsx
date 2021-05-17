import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductDetailsProps } from './productDetails.types';
import { ListContainer } from './productDetails.styles';
import { getImage } from '../helpers';

const ProductDetails: React.FC<ProductDetailsProps> = ({ selectedValue, product }) => {
    const imageSrc = getImage(product.image);
    return (
        <ListContainer key={uuidv4()}>
            {imageSrc && (
                <img src={imageSrc.default} />
            )}
            {selectedValue === 'list' && (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            )}
        </ListContainer>
    )
}

export default ProductDetails;