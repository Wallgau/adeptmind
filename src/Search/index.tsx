import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icon';
import { SearchInput, SearchLabel, SearchIcon, SearchContainer, SearchWrapper } from './search.styles';
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import * as productsActions from '../core/productsStore/actions/productActions';

const Search = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsActions.setSearchString(sessionStorage.getItem('searchString')))
    }, [dispatch])

    const searchString = useSelector((state: ProductsReduxState) => state.searchString);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        sessionStorage.setItem('searchString', searchString);
        dispatch(productsActions.setSearchString(e.currentTarget.value));
        dispatch(productsActions.setPaginationPage(0));
    }
    const clearSearch = () => {
        sessionStorage.setItem('searchString', '');
        dispatch(productsActions.setSearchString(''))
    }
    return (
        <SearchContainer>
            <SearchWrapper>
                <SearchInput
                    value={searchString}
                    name="search"
                    onChange={(e) => handleChange(e)}
                    id="searchInput"
                />
                <SearchLabel className="searchLabel" htmlFor="searchInput">search input</SearchLabel>
                <SearchIcon>
                    {searchString ? (
                        <Icon name='clear' onClick={clearSearch} />
                    ) : (
                            <Icon name='search' />
                        )}
                </SearchIcon>
            </SearchWrapper>
        </SearchContainer>
    )
}
export default Search;