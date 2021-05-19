import React from 'react';
import { useSelector } from 'react-redux';

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
                    )}
                </datalist>

            {/* <input type="text" list="data" onChange={handleChange(index, e)} /> 
                <datalist id="data">
                { product.categories.map(category, index => {
                    <option key={`${category}-${index}`} value={category.name} />
                )}
                </datalist> */}

            {/* { form.category.map((category, index) => {
                return (
                    <div key={`${category}-${index}`}>
                        <input type="text" value={category.name} onChange={e => handleChange(index, e)}></input>
                    </div>
                )
            })} */}
        </div>
    );
}

export default Category;