import React, { useState } from 'react';

const Modifications = () => {
    let [mods, setMods] = useState([{ name: '', price: '' }])

    // const handleChange = (i, e) => {
    //     // const mod = [...mods];
    //     // mod[i].name = e.target.value;
    //     // // console.log(mod[i].price)
    //     // // mod.price = e.target.value;
    //     // setMods(mod);

    // }

    const handleChange = (e) => setMods({
        ...mods,
        [e.target.name]: e.target.value,
    });

    const handleAdd = () => {
        const mod = [...mods];
        mod.push({ name: '', price: '' });
        setMods(mod);
    }

    const handleRemove = (i) => {
        const mod = [...mods];
        mod.splice(i, 1);
        setMods(mod);
    }

    console.log(mods)

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
                        value={mod.name}
                        name="name"
                        onChange={handleChange}
                        />
                        <label>Price</label>
                        <input
                        type="text"
                        name="price"
                        value={mod.price}
                        onChange={handleChange}
                        />
                        <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                )
            })}





            {/* <label>Ingredient</label>
            <input type="text" name="ingredient"></input>
            <label>Price</label>
            <input type="text" name="price"></input> */}

        </div>
    );
}

export default Modifications;