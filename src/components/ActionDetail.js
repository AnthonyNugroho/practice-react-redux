import React from 'react';
import { connect } from 'react-redux';

const ActionDetail = ({ todo }) => {
    if (!todo)
    {
        return <div><h3>Select Something</h3></div>
    }

    return (
        <div>
            <h3>DO: </h3>
            <h4>{todo.content}</h4>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {todo: state.selectedAction}
}

export default connect (mapStateToProps)(ActionDetail);
