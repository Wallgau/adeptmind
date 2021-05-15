import React, { useState } from 'react';
import Toggle from './Toggle';
import { PRODUCTS_DISPLAY_PROPERTIES } from './constants';

function App() {
  const [productListDisplay, setProductListDisplay] = useState('grid');
  console.log('productListDisplay:', productListDisplay)
  const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
  return (
    <div className="App">
      <Toggle
        onChange={setProductListDisplay}
        values={toggleValues}
        selectedValue={productListDisplay}
      />
    </div>
  );
}

export default App;
