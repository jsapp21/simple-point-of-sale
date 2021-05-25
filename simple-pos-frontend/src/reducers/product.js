// const initialState = {
//     categories: []
//     // products: []
// };

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_CATEGORIES':
            return action.categories
        // case 'LOAD_ALL_PRODUCTS':
        //     return {
        //         ...state,
        //         products: [...action.products]
        //     }
        case 'ADD_CATEGORY':
            let idsArr = state.map(c => c.id)
            if (idsArr.includes(action.category.id)) {
                return state
            } 
            return [...state.categories, action.category]
        // case 'ADD_NEW_PRODUCT':
        //     return {
        //         ...state,
        //         products: [...state.products, action.product]
        //     }
        default:
            return state
    }
};