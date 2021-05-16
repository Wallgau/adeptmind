import React from 'react';
import { productDetailsProps } from './productDetails.types';



const ProductDetails: React.FC<productDetailsProps> = ({ selectedValue, product }) => {
    return (
        <li key={'id'}>
            <img src={`./${product.image}`} />
            {selectedValue === 'list' && (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            )}
        </li>
    )
}

export default ProductDetails;