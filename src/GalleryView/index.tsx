import React, { useState } from 'react';
import Toggle from '../Toggle';
import Search from '../Search';
import ProductList from '../ProductList';
import { PRODUCTS_DISPLAY_PROPERTIES } from '../constants';


const GalleryView = () => {
    const [selectedValue, setSelectedValue] = useState('grid');
    const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
    return (
        <>
            <Search />
            <Toggle
                onChange={setSelectedValue}
                values={toggleValues}
                selectedValue={selectedValue}
            />
            <ProductList selectedValue={selectedValue} />
        </>
    )
}

export default GalleryView;