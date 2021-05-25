export const filterCategory = (name) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER_CATEGORY', name });
        dispatch({ type: 'FILTER_PRODUCTS', name })
    }
}