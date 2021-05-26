import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct } from '../actions/category';

const Product = ({form, onChange}) => {

    const products = useSelector((state) => state.products);
    const selectedCategory = useSelector((state) => state.selectedCategory);
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
    }
    
    dispatch(filterProduct(form.product.name));
    // this dispatches on every re-render

    let productNames = products.filter(p => p.category.name.toLowerCase().includes(selectedCategory.toLowerCase()))

    const filterDesc = () => {
        let k = productNames.filter(p => p.name.toLowerCase().includes(selectedProduct.toLowerCase()))
        let x = k.find(k => k.description)

        if (selectedProduct.length > 0){
            return x.description
        } else {
            return ''
        }

    }
    
    return (
        <div>
            
            <label>Name</label>
            {/* <input name="name" type="text" value={form.product.name} onChange={handleChange} /> */}

            <input name="name" type="text" list="product" onChange={handleChange} />
                <datalist id="product">
                    {productNames.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.name}></option>
                    )}
                </datalist>

            <label>Description</label>
            <textarea name="description" value={form.product.description = filterDesc()} onChange={handleChange} />
        
        </div>
    );
}

export default Product;