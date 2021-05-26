import React from 'react';

const Size = () => {

    return (
        <div className="sizeContainer">
            
            <label>Size
                <input type="text" name="size" />
            </label>

            <label>Price
                <input type="number" name="price" step="0.01"/> 
            </label>

        </div>
    );
}

export default Size;