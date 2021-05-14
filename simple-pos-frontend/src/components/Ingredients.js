import React, { useState } from 'react';

const Ingredients = () => {
    let [ingredients, setIngredient] = useState([{ name: '' }])

    const handleChange = (i, e) => {
        const ingredient = [...ingredients];
        ingredient[i].name = e.target.value;
        setIngredient(ingredient);
    }

    const handleAdd = () => {
        const ingredient = [...ingredients];
        ingredient.push({ name: '' });
        setIngredient(ingredient);
    }

    const handleRemove = (i) => {
        const ingredient = [...ingredients];
        ingredient.splice(i, 1);
        setIngredient(ingredient);
    }

    // console.log(ingredients)
    return (
        <div>
            
            <label>Ingredients</label>
            <button type="button" onClick={() => handleAdd()}>+</button>

            {ingredients.map((ingredient, index) => {
                return (
                    <div key={`${ingredient}-${index}`}>
                        <input
                        type="text"
                        value={ingredient.name}
                        onChange={e => handleChange(index, e)}
                        />
                        <button type="button" onClick={() => handleRemove(index)}>X</button>
                    </div>
                )
            })}

        </div>
    );
}

export default Ingredients;