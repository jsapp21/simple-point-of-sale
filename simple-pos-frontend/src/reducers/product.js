export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_PRODUCTS':
            return action.products
        case 'FILTER_PRODUCTS':
            let updatedState = state.filter(p => p.category.name === action.name)
            return updatedState
        // case 'ADD_CATEGORY':
        //     let idsArr = state.map(c => c.id)
        //     if (idsArr.includes(action.category.id)) {
        //         return state
        //     } 
        //     return [...state.categories, action.category]
        default:
            return state
    }
};