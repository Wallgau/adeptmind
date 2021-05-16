import { Action } from 'redux';
import { ACTION_TYPES } from '../../../constants';
import { Product } from '../productType';

export interface ProductsSet extends Action {
    type: typeof ACTION_TYPES.SET_ALL_PRODUCTS,
    data: Product[],
}

export interface IsLoading extends Action {
    type: typeof ACTION_TYPES.ISLOADING,
}