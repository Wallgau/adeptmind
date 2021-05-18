import styled, { css } from 'styled-components';
import { ProductDetailsStyleProps } from './productDetails.types'

export const ListContainer = styled.li`
    display: flex;
`;
export const ImageContainer = styled.div<ProductDetailsStyleProps>`
     ${props => {
        if (props.imageSrc && !props.isLoaded) {
            return css`
                background: url(${props.imageSrc}); 
            `
        }
        return css`
        background-color: grey
        `
    }};
    width: 200px;
    height: 200px;
`;
