export const loadContacts = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_CONTACTS':
            return [...state, ...action.data];
        default:
            return state;
    }

};