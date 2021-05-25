export const categorySelection = (state = null, action) => {
    switch (action.type) {
        case 'FILTER_CATEGORY':
            return action.name
        default:
            return state
    }
};