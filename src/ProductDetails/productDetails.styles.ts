import styled, { keyframes } from 'styled-components';
import { ProductDetailsStyleProps } from './productDetails.types';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

export const loading = keyframes`
    0%{
        left: -45%;
    }
    100%{
        left: 100%;
    }
`;

export const LoadWrapper = styled.div`
   display: flex;
   flex-direction:column;
   height: 350px;
   width: 90%;
`

export const ListImgLoad = styled.div<ProductDetailsStyleProps>`
    display: flex;
    justifiy-content: center;
    margin: 1rem;
    position: relative;
    height: ${props => props.selectedDisplay === 'list' ? `300px` : `650px`};
    width: ${props => props.selectedDisplay === 'list' ? `40%` : `100%`};
    z-index: -45;
    background-color: rgb(211,211,211);
    border-radius: 5px;

@media (max-width: 1024px) {
    height: 450px;
    flex-direction: column;
    align-items: center;
    }

@media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    }
`

export const ListTitleLoad = styled.h2`
    display: flex;
    justifiy-content: center;
    margin: 1rem;
    position: relative;
    height: 50px;
    width: 80%;
    z-index: -45;
    background-color: rgb(211,211,211);
    border-radius: 5px;

@media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    }

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }
`

export const ListDescriptionLoad = styled.p`
    display: flex;
    justifiy-content: center;
    margin: 1rem;
    position: relative;
    height: 100px;
    width: 80%;
    z-index: -45;
    background-color: rgb(211,211,211);
    border-radius: 5px;

@media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    }

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }
`

export const LoadingAnimation = styled.div`
    position: absolute;
    left: -45%;
    height: 100%;
    width: 100%;
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
    text-align: left;

    width: ${props => props.selectedDisplay === 'list' ? `100%` : `45%`};
    
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
    text-align: center;
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