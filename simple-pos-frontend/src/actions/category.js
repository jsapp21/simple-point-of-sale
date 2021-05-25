export const filterCategory = (name) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER_CATEGORY', name });
    }
}

export const filterProduct = (product) => {
    return (dispatch) => {
        console.log(product)
        dispatch({ type: 'FILTER_NAME', product })
    }
}
