import { Reducer } from 'redux';

import { ProductsReduxState } from './productsReduxState';

import { ACTION_TYPES } from '../../../constants';

export const defaultState: ProductsReduxState = {
    products: [],
    isLoading: true,
    hasError: false,
    searchString: '',
};


const reducer: Reducer<ProductsReduxState> = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ALL_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.products],
            };
        case ACTION_TYPES.IS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ACTION_TYPES.ISLOADING:
            return {
                ...state,
                searchString: action.searchString,
            };
        case ACTION_TYPES.HAS_ERROR:
            return {
                ...state,
                hasError: true,
            };
        default:
    };
    return state
}

export default reducer;