import React, { useState } from 'react';

const Ingredients = () => {
    let [ingredients, setIngredients] = useState([{ name: '' }])

    const handleChange = (i, e) => {
        const ingredient = [...ingredients];
        ingredient[i].name = e.target.value;
        setIngredients(ingredient);
    }

    const handleAdd = () => {
        const ingredient = [...ingredients];
        ingredient.push({ name: '' });
        setIngredients(ingredient);
    }

    const handleRemove = (i) => {
        const ingredient = [...ingredients];
        ingredient.splice(i, 1);
        setIngredients(ingredient);
    }

    // console.log(ingredients)
    return (
        <div className="ingredientsContainer">
            
            <label>Ingredients</label>
            <button type="button" onClick={() => handleAdd()}>Add Ingredient</button>

            {ingredients.map((ingredient, index) => {
                return (
                    <div key={`${ingredient}-${index}`}>
                        <input
                        type="text"
                        value={ingredient.name}
                        onChange={e => handleChange(index, e)}
                        />
                        <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                )
            })}

        </div>
    );
}

export default Ingredients;