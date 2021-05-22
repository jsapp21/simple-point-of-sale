import React from 'react';
import { useSelector } from 'react-redux';
// import Icon from './Icon'

const Category = ({form, onChange}) => {

    const product = useSelector((state) => state.product);

    const handleChange = (e) => {
        onChange({
            category: {
                name: e.target.value
            },
            product: {
                ...form.product,
                category_ID: product.category.name.includes(e.target.value) ? product.category.id : product.category[product.category.length - 1].id + 1
            }
        })
    }
    
    return (
        <div>
            <label>Category</label>

            <input type="text" list="data" onChange={handleChange} />
                <datalist id="data">
                    {product.categories.map((category, index) =>
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