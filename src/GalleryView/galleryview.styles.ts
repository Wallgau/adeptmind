import styled from 'styled-components';

export const ToggleTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 1rem 2rem 1rem;

 @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;