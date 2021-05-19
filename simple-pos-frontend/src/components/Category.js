import React from 'react';

const Category = ({form, onChange}) => {

    const handleChange = (i, e) => {
        const category = [...form.category];
        category[i].name = e.target.value;
        onChange({
            ...form,
            category: category
        })
    }
    
    return (
        <div>
            <label>Category</label>
            { form.category.map((category, index) => {
                return (
                    <div key={`${category}-${index}`}>
                        <input type="text" value={category.name} onChange={e => handleChange(index, e)}></input>
                    </div>
                )
            })}
        </div>
    );
}

export default Category;