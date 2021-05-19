import { Reducer } from 'redux';

import { ProductsReduxState } from './productsReduxState';

import { ACTION_TYPES } from '../../../constants';

export const defaultState: ProductsReduxState = {
    products: [],
    isLoading: true,
    hasError: false,
    searchString: '',
    currentPage: 0,
    view: 'grid'
};


const reducer: Reducer<ProductsReduxState> = (state: ProductsReduxState = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ALL_PRODUCTS:
            const { products = [] } = action;
            return {
                ...state,
                products: [...products],
            };
        case ACTION_TYPES.IS_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        case ACTION_TYPES.SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.searchString,
            };
        case ACTION_TYPES.HAS_ERROR:
            return {
                ...state,
                hasError: true,
            };
        case ACTION_TYPES.SET_PAGINATION_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case ACTION_TYPES.SET_STORAGE_VIEW:
            return {
                ...state,
                view: action.view,
            };
    }
    return state;
}



export default reducer;