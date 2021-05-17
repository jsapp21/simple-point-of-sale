import React, { useState } from 'react';

const Ingredients = () => {
    const newIngredient = { name: '' };
    let [ingredients, setIngredients] = useState([{...newIngredient}])

    const handleChange = (i, e) => {
        const ingredient = [...ingredients];
        ingredient[i].name = e.target.value;
        setIngredients(ingredient);
    }

    const handleAdd = () => {
        setIngredients([...ingredients, newIngredient]);
    }

    const handleRemove = (i) => {
        const ingredient = [...ingredients];
        ingredient.splice(i, 1);
        setIngredients(ingredient);
    }

    return (
        <div className="ingredientsContainer">
            
            <label>Ingredients</label>
            <button type="button" onClick={handleAdd}>Add Ingredient</button>

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