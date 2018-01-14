export const updateCurrentIndex = (state = 0, action) => {
    console.log('test',action)
    switch (action.type) {
        case 'UPDATE_CURRENT_INDEX':
            return action.data;
        default:
            return state;
    }

};