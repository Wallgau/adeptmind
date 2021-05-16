import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toggle from './Toggle';
import ProductList from './ProductList';
import { PRODUCTS_DISPLAY_PROPERTIES } from './constants';
import Pagination from './Pagination/index';

function App() {
  const dispatch = useDispatch();
  const paginationPage = useSelector((state) => state.filters.paginationPage);
  const [productListDisplay, setProductListDisplay] = useState('grid');
  const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
  return (
    <div className="App">
      <Toggle
        onChange={setProductListDisplay}
        values={toggleValues}
        selectedValue={productListDisplay}
      />
      <ProductList selectedValue={productListDisplay} />
      <Pagination
        activePage={paginationPage}
        itemsPerPage={4}
        totalItems={products.length}
        pageNeighbours={4}
        onChange={(value) => dispatch(filterActionCreators.setPaginationPage(value))} />
    </div>
  );
}

export default App;
