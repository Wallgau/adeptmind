import React, { useState } from 'react';
import Toggle from '../Toggle';
import Search from '../Search';
import ProductList from '../ProductList';
import { ToggleTitleContainer } from './galleryview.styles';
import { PRODUCTS_DISPLAY_PROPERTIES } from '../constants';


const GalleryView = () => {
    const [selectedDisplay, setSelectedDisplay] = useState('grid');
    const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
    return (
        <>
            <Search />
            <ToggleTitleContainer>
                <h1>Gallery</h1>
                <Toggle
                    onChange={setSelectedDisplay}
                    values={toggleValues}
                    selectedDisplay={selectedDisplay}
                />
            </ToggleTitleContainer>
            <ProductList selectedDisplay={selectedDisplay} />
        </>
    )
}

export default GalleryView;