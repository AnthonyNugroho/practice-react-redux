import { combineReducers } from 'redux';


const actionsReducer = () => {
    return [
        { id: 1, content: 'do nothing' },
        { id: 2, content: 'sleeping' },
        { id: 3, content: 'swiming' },
        { id: 4, content: 'learning' }
    ];
};

const initialState = {
  kerjaan:'abc',
  history:[]
};


const selectedReducer = (state= initialState, action) => {
  console.log(action);
    if (action.type === 'SELECTED_TODO' ) {
        return {
          ...state,
          kerjaan: state.kerjaan.concat({kerjaan: state.kerjaan + action.value}),
          history:state.history.concat({kerjaan: state.kerjaan + action.value})

        }

    }

    return state;
};



export default combineReducers({
    kerja: actionsReducer,
    selectedAction: selectedReducer
})
