import styled, { keyframes } from 'styled-components';

export const ListContainer = styled.li`
display: flex;
justifiy-content: space-around;
margin: 1rem;
height: 600px;
width: 45%;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const StyledImage = styled.img`
  width: 100%;
  display; inline-block;
  animation: ${fadeIn} 0.5s;
  border-radius: 5px;

`

export const LoadWrapper = styled.div`
    display: flex;
    justifiy-content: space-around;
    margin: 1rem;
    position: relative;
    height: 600px;
    width: 45%;
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
