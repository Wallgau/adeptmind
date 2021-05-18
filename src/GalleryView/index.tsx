import React, { useState } from 'react';
import Toggle from '../Toggle';
import Search from '../Search';
import ProductList from '../ProductList';
import { PRODUCTS_DISPLAY_PROPERTIES } from '../constants';


const GalleryView = () => {
    const [selectedDisplay, setSelectedDisplay] = useState('grid');
    const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
    return (
        <>
            <Search />
            <Toggle
                onChange={setSelectedDisplay}
                values={toggleValues}
                selectedDisplay={selectedDisplay}
            />
            <ProductList selectedDisplay={selectedDisplay} />
        </>
    )
}

export default GalleryView;