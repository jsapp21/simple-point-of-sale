import React from 'react';
import { useSelector } from 'react-redux';

const Product = ({form, onChange}) => {

    const categories = useSelector((state) => state.categories);
    const selectedCategory = useSelector((state) => state.selectedCategory);

    const handleChange = (e) => {
        onChange({
            ...form,
            product: {
                ...form.product,
                [e.target.name]: e.target.value
            },
        })
    }

    // const selectedCat = categories.find(cat => cat.name === selectedCategory)
    // const products = selectedCat ? selectedCat.products : form.product.description

    // const selectedProduct = selectedCat.filter(a => a.products)
    // const productNames = selectedCategory ? selectedCat.products.map(p => p.name) : form.product.name

    // console.log(selectedCat.products.map(p => p.name))
    // const products = selectedCategory ? categories.find(cat => cat.name === selectedCategory).map((product, index) => 
    //     <option key={`${product}-${index}`} value={product.name}></option>
    // ) : form.product.name


    
    return (
        <div>
            
            <label>Name</label>
            {/* <input name="name" type="text" value={form.product.name} onChange={handleChange} /> */}

            <input type="text" list="data" onChange={handleChange} />
                <datalist id="data">
                    {/* {productNames.map((product, index) =>
                    
                        <option key={`${product}-${index}`} value={product.name}></option>

                        
                    )} */}

                </datalist>


            {/* <label>Description</label>
            <textarea name="description" value={form.product.description} onChange={handleChange} />
            <label>Price</label>
            <input name="price" type="number" value={form.product.price} onChange={handleChange} /> */}

        </div>
    );
}

export default Product;