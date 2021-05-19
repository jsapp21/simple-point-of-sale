export const postProduct = (form) => (dispatch) => {
    dispatch({ type: 'POST_PRODUCT' });

    const reqObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({category: form.category})
    }

    fetch('http://localhost:3000/categories/', reqObj)
        .then(response => response.json())
        .then(category => {
            console.log(category)
            return dispatch({ type: 'ADD_CATEGORY', category });
        })
}