import { Product } from '../productType';

export interface ProductsReduxState {
    products: Product[],
    hasError: boolean,
    isLoading: boolean,
    searchString: string
}