import styled, { css, keyframes } from 'styled-components';
import { ProductDetailsStyleProps } from './productDetails.types'



export const ListContainer = styled.li`
display: flex;
justifiy-content: space-around;
width: 50%;
`;

export const ImageContainer = styled.div<ProductDetailsStyleProps>` 
        width:100%;
        height: 100%;
        ${props => {
        if (props.isLoaded === true) {
            return css`
            background: grey;
            img{
            visibility: hidden;
            z-index: -10;
        }
            `
        }
        if (props.isLoaded === false) {
            return css`
        img {
            visibility: visible;
            z-index: 10;
            width:100%;
            display:block;
        }
        `}
    }};
    }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const StyledImage = styled.img`
  height: 300px;
  width: 300px;
  display; block;
  animation: ${fadeIn} 0.5s;
`

export const LoadWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  background-color: rgb(211,211,211);
  border-radius: 5px;
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
  z-index: 45;`
