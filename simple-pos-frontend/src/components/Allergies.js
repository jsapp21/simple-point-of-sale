import React, { useState } from 'react';

const Allergies = () => {
    let [milk, setMilk] = useState(false)
    let [egg, setEgg] = useState(false)
    let [peanut, setPeanut] = useState(false)
    let [soy, setSoy] = useState(false)
    let [wheat, setWheat] = useState(false)
    let [treeNut, setTreeNut] = useState(false)
    let [shellfish, setShellfish] = useState(false)
    let [fish, setFish] = useState(false)
    let [sesame, setSesame] = useState(false)
    

    return (
        <div>
            
            <label>Allergies</label>
            <label className="container">Milk
                <input type="checkbox" checked={milk ? 'checked' : ''} onChange={() => setMilk(!milk)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Egg
                <input type="checkbox" checked={egg ? 'checked' : ''} onChange={() => setEgg(!egg)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Peanut
                <input type="checkbox" checked={peanut ? 'checked' : ''} onChange={() => setPeanut(!peanut)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Soy
                <input type="checkbox" checked={soy ? 'checked' : ''} onChange={() => setSoy(!soy)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Wheat
                <input type="checkbox" checked={wheat ? 'checked' : ''} onChange={() => setWheat(!wheat)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Tree Nut
                <input type="checkbox" checked={treeNut ? 'checked' : ''} onChange={() => setTreeNut(!treeNut)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Shellfish
                <input type="checkbox" checked={shellfish ? 'checked' : ''} onChange={() => setShellfish(!shellfish)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Fish
                <input type="checkbox" checked={fish ? 'checked' : ''} onChange={() => setFish(!fish)}></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Sesame
                <input type="checkbox" checked={sesame ? 'checked' : ''} onChange={() => setSesame(!sesame)}></input>
                <span className="checkmark"></span>
            </label>

        </div>
    );
}

export default Allergies;