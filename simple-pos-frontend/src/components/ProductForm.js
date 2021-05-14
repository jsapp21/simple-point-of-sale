import React from 'react';
import Product from './Product';
import Category from './Category';
import Ingredients from './Ingredients';
import Size from './Size';
import Allergies from './Allergies';
import Modifications from './Modifications';


const ProductForm = () => {

    return (
        <div>
            <h1>Add Product</h1>

            <form>
                <Category />
                <Product />
                <Ingredients />
                <Size />
                <Allergies />
                <Modifications />
            </form>

            <button>Submit</button>

        </div>
    );
}

export default ProductForm;
