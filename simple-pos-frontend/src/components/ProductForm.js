import React, { useState } from 'react';
import Product from './Product';
import Category from './Category';
import Ingredients from './Ingredients';
import Size from './Size';
import Allergies from './Allergies';
import Modifications from './Modifications';
import { postProduct } from '../actions/postProduct';
import { useDispatch } from 'react-redux'

const ProductForm = () => { 
    
    const [category, setCategory] = useState({ category: { name: '' } })
    const [product, setProduct] = useState({ product: { name: '', description: '' } })
    
    const newSize = { name: '', price: 0.00 }; 
    const [size, setSize] = useState({ size: [{...newSize}] })

    const newIngredient = { name: '' };
    const [ingredient, setIngredient] = useState({ ingredient: [{...newIngredient}] })

    // const [form, setForm] = useState({ 
    //     category: { name: '' },
    //     product: {
    //         name: '',
    //         description: ''        
    //     },
    //     size: { 
    //         name: '' ,
    //         price: 0.0
    //     }
    // })
    // form={form} onChange={setForm}



    const dispatch = useDispatch();
        
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postProduct(category, product, size))
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <Category category={category} onChange={setCategory} />
                <Product product={product} category={category} onChange={setProduct} />
                <Size size={size} newSize={newSize} onChange={setSize} />
                <Ingredients ingredient={ingredient} newIngredient={newIngredient} onChange={setIngredient} />
                <Allergies />
                <Modifications />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default ProductForm;