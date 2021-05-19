import styled, { keyframes, css } from 'styled-components';
import { ProductDetailsStyleProps } from './productDetails.types';
const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;


export const LoadWrapper = styled.div`
    display: flex;
    justifiy-content: center;
    margin: 1rem;
    position: relative;
    height: 500px;
    width: 45%;
    z-index: -45;
    background-color: rgb(211,211,211);
    border-radius: 5px;

@media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    }
`

export const loading = keyframes`
    0%{
            left: -45%;
        }
        100%{
            left: 100%;
        }
`;

export const LoadingAnimation = styled.div`
    position: absolute;
    left: -45%;
    height: 100%;
    width: 45%;
    background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
    background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
    background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
    animation: ${loading} 1s infinite;
    z-index: 45;
    `

export const Container = styled.div<ProductDetailsStyleProps>`
    display: flex;
    flew-wrap: wrap;
    margin-bottom: 1rem;

${props => {
        if (props.selectedDisplay === 'list') {
            return css`
                width: 100%;
            `
        } return css`
        width: 45%;
        `
    }};
    
    
    h2, p {
        text-align: left;
    }
    h2 {
        margin: 1.5rem 3rem;
    }
    p {
        margin: 0 3rem;
        line-height: 1.6;
    }
    
 @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    h2, p {
    text-align: center;
}
  }
`;

export const ListContainer = styled.li<ProductDetailsStyleProps>`
    display: flex;
    margin: 0.5rem;
    height: 100%;
    border: 1px solid #efefef;
    list-style: none;
`;

export const StyledImage = styled.img`
    display; inline-block;
    animation: ${fadeIn} 0.5s;
    border-radius: 5px;
    width: 100%
`