import React from 'react';
import { ProductDetailsProps } from './productDetails.types';
import { ListContainer } from './productDetails.styles';



const ProductDetails: React.FC<ProductDetailsProps> = ({ selectedValue, product }) => {
    return (
        <ListContainer key={'id'}>
            <img src={`./${product.image}`} />
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