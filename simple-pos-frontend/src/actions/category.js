export const filterCategory = (name) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER_CATEGORY', name });
    }
}