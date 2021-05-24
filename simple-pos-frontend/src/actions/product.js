export const loadProducts = () => {
    return (dispatch) => {
    
        fetch('http://localhost:3000/categories/')
        .then(resp => resp.json())
        .then(categories => {
            dispatch({ type: 'LOAD_ALL_CATEGORIES', categories });
            return dispatch(loadProductInfo())
        })
    }
}

const loadProductInfo = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/products/')
        .then(resp => resp.json())
        .then(products => {
            return dispatch({ type: 'LOAD_ALL_PRODUCTS', products });
        })
    }
}


export const postProduct = (form) => (dispatch) => {

    const categoryObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({category: form.category})
    }
   
    fetch('http://localhost:3000/categories/', categoryObj)
        .then(resp => resp.json())
        .then(category => {
            console.log(category)
            dispatch({ type: 'ADD_CATEGORY', category });
            return dispatch(addProductInfo(form, category))
        })

}

const addProductInfo = (form, category) => (dispatch) => {

    const productObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: {
            ...form.product,
            category_id: category.id
        }})
    }
    
    fetch('http://localhost:3000/products/', productObj)
    .then(resp => resp.json())
    .then(product => {
        console.log(product)
        return dispatch({ type: 'ADD_NEW_PRODUCT', product });
    })
}