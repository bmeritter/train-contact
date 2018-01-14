export default ({dispatch}) => next => (action) => {
    next(action);
    console.log('type: ', action.type);
    console.log('data: ', action.data);
};
