import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../actions/category';
// import Icon from './Icon'

const Category = ({form, onChange}) => {

    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        onChange({
            ...form,
            category: {
                name: e.target.value
            }
        })

        dispatch(filterCategory(e.target.value))
    }
    
    return (
        <div>
            <label>Category</label>

            <input type="text" list="data" onChange={handleChange} />
                <datalist id="data">
                    {categories.map((category, index) =>
                    
                        <option key={`${category}-${index}`} value={category.name}></option>

                        // keeping to come back to later, want to add clickable delete Icon to the data list
                        // <option key={`${category}-${index}`}>
                        //     {category.name}
                        //     <Icon /> 
                        // </option> 
                        
                    )}
                </datalist>
        </div>
    );
}

export default Category;