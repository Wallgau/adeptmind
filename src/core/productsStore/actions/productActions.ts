import { Product } from '../productType';
import { ActionCreator } from 'redux';
import { ACTION_TYPES } from '../../../constants';
import { IsLoading, ProductsSet, HasError } from './productActionsType'

export const productsSet: ActionCreator<ProductsSet> = (data: Product[]) => {
    return {
        type: ACTION_TYPES.SET_ALL_PRODUCTS,
        data,
    };
}

export const isLoading: ActionCreator<IsLoading> = () => {
    return {
        type: ACTION_TYPES.IS_LOADING,
    };
}

export const hasError: ActionCreator<HasError> = () => {
    return {
        type: ACTION_TYPES.HAS_ERROR,
    };
}


