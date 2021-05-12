import React from 'react';
import Product from '../components/Product.js';
import Category from '../components/Category';
import Ingredients from '../components/Ingredients';

const ProductContainer = () => {

    return (
        <div>
            <h1>Add Product</h1>

            <form>
                <Category />
                <Product />
                <Ingredients />
            </form>

            <button>Submit</button>

        </div>
    );
}

export default ProductContainer;
