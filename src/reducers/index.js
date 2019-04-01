import { combineReducers } from 'redux';


const actionsReducer = () => {
    return [
        { id: 1, content: 'do nothing' },
        { id: 2, content: 'sleeping' },
        { id: 3, content: 'swiming' },
        { id: 4, content: 'learning' }
    ];
};


const selectedReducer = (selectedTodo= null, action) => {
  console.log(action);
    if (action.type === 'SELECTED_TODO' ) {
        return action.payload;

    }

    return selectedTodo;
};



export default combineReducers({
    todos: actionsReducer,
    selectedAction: selectedReducer
})
