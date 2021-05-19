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
    justify-content: flex-end;
`
export const SearchWrapper = styled.div`
    position: relative;
    margin-right: 1.5rem;
`

export const SearchInput = styled.input`
    padding: 0.5rem;
`

export const SearchLabel = styled.label`
    position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;

`

export const SearchIcon = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: block;
    width: 1.5rem;
`