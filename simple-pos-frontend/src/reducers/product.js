const initialState = {
    categories: [],
    names: [],
    descriptions: [],
    prices: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                categories: [...action.categories]
            }
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.category]
            }
        default:
            return state
    }
};