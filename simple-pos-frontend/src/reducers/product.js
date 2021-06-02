export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_PRODUCTS':
            return action.products
        default:
            return state
    }
};
