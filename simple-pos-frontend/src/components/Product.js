import React from 'react';

const Product = ({form, onChange}) => {

    const handleChange = (e) => {
        onChange({
            ...form,
            product: {
                ...form.product,
                [e.target.name]: e.target.value
            },
        })
    }

    return (
        <div>
            
            <label>Name</label>
            <input name="name" type="text" value={form.product.name} onChange={handleChange} />
            <label>Description</label>
            <textarea name="description" value={form.product.description} onChange={handleChange} />
            <label>Price</label>
            <input name="price" type="number" value={form.product.price} onChange={handleChange} />

        </div>
    );
}

export default Product;