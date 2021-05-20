import React from 'react';
import { useSelector } from 'react-redux';
// import Icon from './Icon'

const Category = ({form, onChange}) => {

    const product = useSelector((state) => state.product);


    const handleChange = (e) => {
        onChange({
            ...form,
            category: {
                name: e.target.value
            }
        })
    }
    
    return (
        <div>
            <label>Category</label>

            <input type="text" list="data" onChange={handleChange} />
                <datalist id="data">
                    {product.categories.map((category, index) =>
                        <option key={`${category}-${index}`} value={category.name} />

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