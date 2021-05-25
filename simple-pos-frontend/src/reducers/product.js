export const productsReducer = (state = [], action) => {
    let updatedState;
    switch (action.type) {
        case 'LOAD_ALL_PRODUCTS':
            return action.products
        case 'FILTER_PRODUCTS':
            updatedState = state.filter(p => p.category.name === action.name)
            return updatedState
        default:
            return state
    }
};

export const productSelection = (state = null, action) => {
    switch (action.type) {
        case 'FILTER_NAME':
            return action.product
        default:
            return state
    }
};
