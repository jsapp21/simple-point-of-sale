import React from 'react';

const Product = () => {

    return (
        <div>
            
            <label>Name</label>
            <input type="text" name="name"></input>
            <label>Description</label>
            <textarea></textarea>
            <label>Price</label>
            <input type="text" name="price"></input>

        </div>
    );
}

export default Product;