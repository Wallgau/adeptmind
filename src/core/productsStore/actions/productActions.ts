import { Product } from '../productType';
import { ActionCreator } from 'redux';
import { ACTION_TYPES } from '../../../constants';
import { IsLoading, ProductsSet, HasError, SetPaginationPage, SetSearchString, SetStorageView } from './productActionsType'

export const productsSet: ActionCreator<ProductsSet> = (products: Product[]) => {
    return {
        type: ACTION_TYPES.SET_ALL_PRODUCTS,
        products,
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

export const setPaginationPage: ActionCreator<SetPaginationPage> = (currentPage: number) => {
    return {
        type: ACTION_TYPES.SET_PAGINATION_PAGE,
        currentPage,
    };
}

export const setSearchString: ActionCreator<SetSearchString> = (searchString: string) => {
    return {
        type: ACTION_TYPES.SET_SEARCH_STRING,
        searchString,
    };
}

export const setView: ActionCreator<SetStorageView> = (view: string) => {
    return {
        type: ACTION_TYPES.SET_STORAGE_VIEW,
        view,
    };
}

