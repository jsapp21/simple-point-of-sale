export const loadProducts = () => {
    return (dispatch) => {
    
        fetch('http://localhost:3000/categories/')
        .then(resp => resp.json())
        .then(categories => {
            return dispatch({ type: 'LOAD_ALL_CATEGORIES', categories });
            // return dispatch(loadProductInfo())
        })
    }
}

// const loadProductInfo = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/products/')
//         .then(resp => resp.json())
//         .then(products => {
//             return dispatch({ type: 'LOAD_ALL_PRODUCTS', products });
//         })
//     }
// }