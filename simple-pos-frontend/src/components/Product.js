import React from 'react';

const Product = ({form, onChange}) => {

    const handleChange = (e) => {
        debugger
        onChange({
            ...form,
            product: {
                // [e.target.name]: e.target.value,
                name: e.target.value,
                description: e.target.value,
                price: e.target.value
            },
        })
    }

    console.log(form.product.name)

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