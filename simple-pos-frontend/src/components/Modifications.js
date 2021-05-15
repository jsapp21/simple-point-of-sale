import React, { useState } from 'react';

const Modifications = () => {
    const newMod = { name: '', price: '' };
    let [mods, setMods] = useState([{...newMod}])

    const handleChange = (e) => {
        const mod = [...mods];
        mod[e.target.dataset.idx][e.target.className] = e.target.value;
        setMods(mod);
    }

    const handleAdd = () => {
        setMods([...mods, {...newMod}]);
    }

    const handleRemove = (i) => {
        const mod = [...mods];
        mod.splice(i, 1);
        setMods(mod);
    }

    return (
        <div className="ingredientsContainer">
            
            <h2>Modifications</h2>

            <button type="button" onClick={handleAdd}>Add Modification</button>

            {mods.map((mod, index) => {
                return (
                    <div key={`${mod}-${index}`}>
                        <label>Name</label>
                        <input
                        type="text"
                        value={mods[index].name}
                        data-idx={index}
                        name="name"
                        className="name"
                        onChange={handleChange}
                        />
                        <label>Price</label>
                        <input
                        type="number"
                        name="price"
                        className="price"
                        data-idx={index}
                        value={mods[index].price}
                        onChange={handleChange}
                        />
                        <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                )
            })}

        </div>
    );
}

export default Modifications;