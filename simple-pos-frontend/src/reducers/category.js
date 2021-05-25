export const categorySelection = (state = null, action) => {
    switch (action.type) {
        case 'FILTER_CATEGORY':
            return action.name
        default:
            return state
    }
};

export const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_CATEGORIES':
            return action.categories
        case 'ADD_CATEGORY':
            let idsArr = state.map(c => c.id)
            if (idsArr.includes(action.category.id)) {
                return state
            } 
            return [...state.categories, action.category]
        default:
            return state
    }
};