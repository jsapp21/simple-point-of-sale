import React from 'react';
import { useSelector } from 'react-redux';

const Product = ({category, product, onChange}) => {

    const products = useSelector((state) => state.products);

    const handleChange = (e) => {
        onChange({ product: {...product.product,  [e.target.name]: e.target.value }  })
    }
    

    let productNames = products.filter(p => p.category.name.toLowerCase().includes(category.category.name.toLowerCase()))
    let descriptions = productNames.filter(p => p.name === product.product.name)

    return (
        <div>
            <label>Name
            <input name="name" type="text" list="product" onChange={handleChange} />
                <datalist id="product">
                    {productNames.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.name}></option>
                    )}
                </datalist>
            </label>

            
            <label>Description
            <input name="description" type="text" list="description" onChange={handleChange} />
                <datalist id="description">
                    {descriptions.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.description}></option>
                    )}
                </datalist>
            </label>       
        </div>
    );
}

export default Product;