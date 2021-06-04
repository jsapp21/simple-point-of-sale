import { loadProducts } from "./loadProduct";

export const postProduct = (category, product, size, ingredient) => (dispatch) => {

    const categoryObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category)
    }

    fetch('http://localhost:3000/categories/', categoryObj)
    .then(resp => resp.json())
    .then(category => {
        console.log(category)
        return dispatch(addProductInfo(product, category, size, ingredient))
    })
}

const addProductInfo = (product, category, size, ingredient) => (dispatch) => {

    const productObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: {
            ...product.product,
            category_id: category.id
        }})
    }
    
    fetch('http://localhost:3000/products/', productObj)
    .then(resp => resp.json())
    .then(product => {
        console.log(product)
        return dispatch(addSizes(product, size, ingredient));
    })
}

const addSizes = (product, size, ingredient) => (dispatch) => {
    
    for (let i=0; i < size.size.length; i++){
        
        let sizeObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ size: {
                ...size.size[i],
                price: parseFloat(size.size[i].price),
                product_id: product.id
            }})
        }

        fetch('http://localhost:3000/sizes/', sizeObj)
        .then(resp => resp.json())
        .then(size => {
            console.log(size)
        })
    }
    return dispatch(addIngredients(product, ingredient));
}

const addIngredients = (product, ingredient) => (dispatch) => {
    
    for (let i=0; i < ingredient.ingredient.length; i++){
        
        let ingredentObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredient: {
                ...ingredient.ingredient[i],
                product_id: product.id
            }})
        }

        // debugger

        fetch('http://localhost:3000/ingredients/', ingredentObj)
        .then(resp => resp.json())
        .then(ingredient => {
            console.log(ingredient)
        })
    }
    return dispatch(loadProducts());
}