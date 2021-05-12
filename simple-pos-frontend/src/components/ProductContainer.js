import React from 'react';
import Product from '../components/Product';
import Category from '../components/Category';
import Ingredients from '../components/Ingredients';
import Size from '../components/Size';
import Allergies from '../components/Allergies';
import Modifications from '../components/Modifications';


const ProductContainer = () => {

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

export default ProductContainer;
