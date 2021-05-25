import { combineReducers } from 'redux';
import { categoryReducer } from './category';
import { categorySelection } from './category';
import { productsReducer } from './product';

export default combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    selectedCategory: categorySelection
});