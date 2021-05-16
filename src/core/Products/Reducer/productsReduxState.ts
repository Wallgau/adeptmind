import { Product } from '../productType';

export interface ProductsReduxState {
    data: Product[],
    isLoading: boolean,
    searchString: string
}