import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icon'
import { ProductsReduxState } from '../core/productsStore/reducer/productsReduxState';
import * as productsActions from '../core/productsStore/actions/productActions';

const Search = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsActions.setSearchString(sessionStorage.getItem('searchString')))
    }, [dispatch])
    const searchString = useSelector((state: ProductsReduxState) => state.searchString)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(productsActions.setSearchString(e.currentTarget.value));
    }
    const clearSearch = () => {
        dispatch(productsActions.setSearchString(''))
    }
    return (
        <div>
            <input
                value={searchString}
                name="search"
                onChange={(e) => handleChange(e)}
            />
            {searchString ? (
                <Icon name='clear' onClick={clearSearch} />
            ) : (
                    <Icon name='search' />
                )}
        </div>
    )
}
export default Search;