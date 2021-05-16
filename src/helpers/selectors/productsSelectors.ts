import { Product } from '../../core/products/productType';
import { createSelector } from 'reselect';
import { AppState } from '../../core';

const getProductsData = (state: AppState): Product[] => state.products.data;
const getSearchString = (state: AppState): string => state.products.searchString;

export const filterProductsBySearchString = createSelector([getProductsData, getSearchString], (products, searchString) => {
    if (searchString) {
        products.filter((product) => product.title.toLowerCase().includes(searchString))
    }
    return products;
})