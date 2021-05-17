import { Product } from '../../core/productsStore/productType';
import { createSelector } from 'reselect';
import { ProductsReduxState } from '../../core/productsStore/reducer/productsReduxState';

const getProductsData = (state: ProductsReduxState): Product[] => state.products;
const getSearchString = (state: ProductsReduxState): string => state.searchString;


export const filterProductsBySearchString = createSelector([getProductsData, getSearchString], (products, searchString) => {
    if (searchString) {
        return products.filter((product) => product.title.toLowerCase().includes(searchString) ||
            product.description.toLowerCase().includes(searchString) ||
            product.image.toLowerCase().includes(searchString))
    }
    return products;
})