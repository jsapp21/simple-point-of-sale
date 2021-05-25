export const loadProducts = () => {
    return (dispatch) => {
    
        fetch('http://localhost:3000/categories/')
        .then(resp => resp.json())
        .then(categories => {
            // console.log(categories)
            dispatch({ type: 'LOAD_ALL_CATEGORIES', categories });
            return dispatch(fetchAllProducts());
        })
    }
}

const fetchAllProducts = () => {
    return (dispatch) => {

        fetch('http://localhost:3000/products/')
        .then(resp => resp.json())
        .then(products => {
            // console.log(products)
            return dispatch({ type: 'LOAD_ALL_PRODUCTS', products });
        })
    }
}