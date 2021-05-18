import styled from 'styled-components';


export const SearchContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #c73460;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: row-reverse;
`

export const SearchInput = styled.input`
    padding: 0.5rem;
    margin-right: 1.5rem;
`

export const SearchLabel = styled.label`
    visibility: hidden;
`

export const SearchIcon = styled.div`
    position: absolute;
    top: 0.85rem;
    right: 2.5rem;
    display: block;
    width: 1.5rem;
`