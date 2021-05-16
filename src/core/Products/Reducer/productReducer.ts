import { Reducer } from 'redux';

import { ProductsReduxState } from './productsReduxState';

import { ACTION_TYPES } from '../../../constants';

export const defaultState: ProductsReduxState = {
    data: [],
    isLoading: true,
    searchString: '',
};


const reducer: Reducer<ProductsReduxState> = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ALL_PRODUCTS:
            return {
                ...state,
                data: [...state.data, ...action.data],
            };
        case ACTION_TYPES.ISLOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ACTION_TYPES.ISLOADING:
            return {
                ...state,
                searchString: action.searchString,
            };
        default:
    };
    return state
}

export default reducer;