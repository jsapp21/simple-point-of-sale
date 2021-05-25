import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct } from '../actions/category';

const Product = ({form, onChange}) => {

    const products = useSelector((state) => state.products);
    const selectedProduct = useSelector((state) => state.selectedProduct);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        onChange({
            ...form,
            product: {
                ...form.product,
                [e.target.name]: e.target.value
            },
        })
        dispatch(filterProduct(e.target.value));
    }

    let findDescription = products.find(p => p.name === selectedProduct)
    
    return (
        <div>
            
            <label>Name</label>
            {/* <input name="name" type="text" value={form.product.name} onChange={handleChange} /> */}

            <input name="name" type="text" list="product" onChange={handleChange} />
                <datalist id="product">
                    {products.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.name}></option>
                    )}
                </datalist>

            <label>Description</label>
            <textarea name="description" value={selectedProduct ? form.product.description = findDescription.description : form.product.description} onChange={handleChange} />
        
        </div>
    );
}

export default Product;