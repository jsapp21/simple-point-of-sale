import React from 'react';

const Allergies = () => {

    return (
        <div>
            
            <label>Allergies</label>
            <label className="container">Milk
                <input type="checkbox" checked="checked"></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Egg
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Peanut
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Soy
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Wheat
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Tree Nut
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Shellfish
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Fish
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>
            <label className="container">Sesame
                <input type="checkbox" checked=""></input>
                <span className="checkmark"></span>
            </label>

        </div>
    );
}

export default Allergies;