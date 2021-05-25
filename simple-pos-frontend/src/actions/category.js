export const filterCategory = (name) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER_CATEGORY', name });
        dispatch({ type: 'FILTER_PRODUCTS', name })
    }
}

export const filterProduct = (product) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER_NAME', product })
    }
}
