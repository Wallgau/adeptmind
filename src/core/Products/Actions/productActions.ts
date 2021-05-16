
import { ActionCreator } from 'redux';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../../constants';
import { Product } from '../productType';
import { ProductsSet, IsLoading } from './productActionsType';

export const productsSet: ActionCreator<ProductsSet> = (data: Product[]) => {
    return {
        type: ACTION_TYPES.SET_ALL_PRODUCTS,
        data,
    };
}

export const isLoading: ActionCreator<IsLoading> = () => {
    return {
        type: ACTION_TYPES.ISLOADING,
    };
}

