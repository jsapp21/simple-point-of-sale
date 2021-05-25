import { combineReducers } from 'redux';
import { productReducer } from './product';
import { categorySelection } from './category';

export default combineReducers({
    categories: productReducer,
    selectedCategory: categorySelection
});