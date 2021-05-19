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
            let idsArr = state.categories.map(c => c.id)
            if (idsArr.includes(action.category.id)) {
                return state
            } 
            return {
                ...state,
                categories: [...state.categories, action.category]
            }
        default:
            return state
    }
};