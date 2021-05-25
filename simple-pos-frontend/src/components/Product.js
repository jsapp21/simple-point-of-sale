import React from 'react';
import { useSelector } from 'react-redux';

const Product = ({form, onChange}) => {

    const products = useSelector((state) => state.products);

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
            {/* <input name="name" type="text" value={form.product.name} onChange={handleChange} /> */}

            <input type="text" list="product" onChange={handleChange} />
                <datalist id="product">
                    {products.map((product, index) =>
                    
                        <option key={`${product}-${index}`} name="name" value={product.name}></option>

                    )}

                </datalist>


            {/* <label>Description</label>
            <textarea name="description" value={form.product.description} onChange={handleChange} />
            <label>Price</label>
            <input name="price" type="number" value={form.product.price} onChange={handleChange} /> */}

        </div>
    );
}

export default Product;