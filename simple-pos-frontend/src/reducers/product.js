const initialState = {
    categories: [],
    names: [],
    descriptions: [],
    prices: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_PRODUCT':
            return state
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.category]
            }
        default:
            return state
    }
};