import React from 'react';
import { connect } from 'react-redux';
import { selectedAction } from '../actions';


class ActionList extends React.Component {
    renderList() {
      const {
        choose,
        kerja,
      } = this.props;
      console.log(kerja);
        return this.props.kerja.map((todo) => {
            return (
                <div className="item" key={todo.id}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => choose(todo)}>
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
    return {
      kerja: state.kerja
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    choose: () => dispatch({type:'SELECTED_TODO', value: {selectedAction} })
  };
};



export default connect (mapStateToProps, mapDispatchToProps)(ActionList);
