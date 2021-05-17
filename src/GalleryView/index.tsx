import React from 'react';
import Toggle from '../Toggle';
import Search from '../Search';
import ProductList from '../ProductList';
import { GalleryViewProps } from './galleryViewProps.types';


const GalleryView: React.FC<GalleryViewProps> = ({ onChange, values, selectedValue }) => {
    return (
        <>
            <Search />
            <Toggle
                onChange={onChange}
                values={values}
                selectedValue={selectedValue}
            />
            <ProductList selectedValue={selectedValue} />
        </>
    )
}

export default GalleryView;