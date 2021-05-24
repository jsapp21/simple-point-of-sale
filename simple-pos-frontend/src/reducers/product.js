const initialState = {
    categories: [],
    category_id: 0,
    products: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ALL_CATEGORIES':
            return {
                ...state,
                categories: [...action.categories]
            }
        case 'LOAD_ALL_PRODUCTS':
            return {
                ...state,
                products: [...action.products]
            }
        case 'ADD_CATEGORY':
            let idsArr = state.categories.map(c => c.id)
            if (idsArr.includes(action.category.id)) {
                return state
            } 
            return {
                ...state,
                categories: [...state.categories, action.category]
            }
        case 'ADD_NEW_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product]
            }
        default:
            return state
    }
};