import { createStore } from 'redux';
import reducer from './products/reducer/productReducer';

const store = createStore(reducer);

export default store;