export const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_CATEGORIES':
            return action.categories
        default:
            return state
    }
};