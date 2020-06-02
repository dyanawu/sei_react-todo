import React, {Component} from 'react';

class TodoEditor extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
      <div className="todo-edit-container">
        <input className="todo-edit-input"
               defaultValue={this.props.editField}
               onChange={(e) => {this.props.todoEditInputChecker(e)}}
        />
        <button className="todo-edit-button"
                onClick={
                (id) => {
                  this.props.todoUpdate(this.props.id);
                  this.props.todoEdit();
                }
                }>
          edit
        </button>
      </div>
      <div className="todo-edit-error-box">
        <span className="error">{this.props.editError}</span>
      </div>
      </>
    );
  }
}

export default TodoEditor;
