import { Product } from '../core/productsStore/productType';

export interface GalleryViewProps {
    selectedValue: string,
    values: string[],
    onChange: () => void,
}