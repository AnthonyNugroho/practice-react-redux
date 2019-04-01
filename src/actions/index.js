

export const  selectedAction = (todo) => {
    return {
        type: 'SELECTED_TODO',
        payload: todo
    };
};
