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
    
    // slice this up into seprate state
    const [categoryForm, setcategoryForm] = useState({ })
    const [form, setForm] = useState({ 
        category: { name: '' },
        product: {
            name: '',
            description: ''        
        },
        size: { 
            name: '' ,
            price: 0.0
        }
    })

    const dispatch = useDispatch();
        
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postProduct(form))
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <Category form={form} onChange={setForm} />
                <Product form={form} onChange={setForm} />
                <Size />
                <Ingredients />
                <Allergies />
                <Modifications />
                <button>Submit</button>
            </form>
        </div>
    );
}


export default ProductForm;