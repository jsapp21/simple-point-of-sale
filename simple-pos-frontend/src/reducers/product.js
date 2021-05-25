export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_PRODUCTS':
            return action.products
        default:
            return state
    }
};

export const productSelection = (state = '', action) => {
    switch (action.type) {
        case 'FILTER_NAME':
            return action.product
        default:
            return state
    }
};
