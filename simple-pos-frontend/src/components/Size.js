import React from 'react';

const Size = ({newSize, size, onChange}) => {

    const handleChange = (e) => {
        const sizeArr = size.size
        sizeArr[e.target.dataset.idx][e.target.className] = e.target.value;
        onChange({ size: [...sizeArr] })
    }

    const handleAdd = () => {
        onChange({ size: [...size.size, {...newSize}] });
    }

    const handleRemove = (i) => {
        const sizeArr = size.size
        sizeArr.splice(i, 1);
        onChange({ size: [...sizeArr] })
    }

    return (
        <div className="sizeContainer">
            <button type="button" onClick={handleAdd}>+ Size</button>

            {size.size.map((s, index) => {
                return (
                    <div key={`${s}-${index}`}>
                        <label>Size</label>
                            <input 
                                type="text" 
                                value={size.size[index].name} 
                                data-idx={index}
                                name="name" 
                                className="name"
                                onChange={handleChange} />

                        <label>Price</label>
                            <input 
                                type="number" 
                                name="price" 
                                className="price"
                                step="0.10" 
                                data-idx={index}
                                value={size.size[index].price} 
                                onChange={handleChange} /> 
                        <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                )
            })}

        </div>
    );
}

export default Size;