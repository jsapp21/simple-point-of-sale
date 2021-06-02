import React from 'react';

const Ingredients = ({newIngredient, ingredient, onChange}) => {
    
    
    const handleChange = (i, e) => {
        const ingredientArr = ingredient.ingredient;
        ingredientArr[i].name = e.target.value;
        onChange({ ingredient: [...ingredientArr] });
    }

    const handleAdd = () => {
        onChange({ ingredient: [...ingredient.ingredient, {...newIngredient}] });
    }

    const handleRemove = (i) => {
        const ingredientArr = ingredient.ingredient;
        ingredient.splice(i, 1);
        onChange({ ingredient: [...ingredientArr]});
    }

    return (
        <div className="ingredientsContainer">
            
            <label>Ingredients</label>
            <button type="button" onClick={handleAdd}>Add Ingredient</button>

            {ingredient.ingredient.map((ingredient, index) => {
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