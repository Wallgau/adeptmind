import React, { useState } from 'react';
import { PRODUCTS_DISPLAY_PROPERTIES } from './constants';
import GalleryView from './GalleryView';

function App() {
  const [selectedValue, setSelectedValue] = useState('grid');
  const [productListDisplay, setProductListDisplay] = useState('grid');
  const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
  return (
    <div className="App">
      <GalleryView
        values={toggleValues}
        selectedValue={productListDisplay}
        onChange={() => setProductListDisplay}
      />
    </div>
  );
}

export default App;
