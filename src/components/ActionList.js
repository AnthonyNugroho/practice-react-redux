import React from 'react';
import { connect } from 'react-redux';
import { selectedAction } from '../actions';


class ActionList extends React.Component {
    renderList() {
      const {
        selectTodo,
        todos,
      } = this.props;
      console.log(todos);
        return this.props.todos.map((todo) => {
            return (
                <div className="item" key={todo.id}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => selectTodo(todo)}>
                            select
                        </button>
                    </div>
                    <div className="content">{todo.content}</div>
                </div>
            );
        });
    }



    render() {
        return <div className="ui devided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {todos: state.todos};
}

const mapDispatchToProps = dispatch => ({
  selectTodo: todo => dispatch(selectedAction(todo))
})



export default connect (mapStateToProps, mapDispatchToProps)(ActionList);
