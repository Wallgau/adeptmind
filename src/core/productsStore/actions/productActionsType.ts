import { Action } from 'redux';
import { ACTION_TYPES } from '../../../constants';
import { Product } from '../productType';

export interface ProductsSet extends Action {
    type: typeof ACTION_TYPES.SET_ALL_PRODUCTS,
    products: Product[],
}
export interface IsLoading extends Action {
    type: typeof ACTION_TYPES.IS_LOADING,
}

export interface searchString extends Action {
    type: typeof ACTION_TYPES.SEARCH_STRING,
}

export interface HasError extends Action {
    type: typeof ACTION_TYPES.HAS_ERROR,
}

export interface SetPaginationPage extends Action {
    type: typeof ACTION_TYPES.SET_PAGINATION_PAGE,
    currentPage: number;
}