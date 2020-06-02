import React, {Component} from 'react';

class TodoEditor extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="todo-edit-container">
        <form onSubmit={(e, id) => {
          e.preventDefault();
          this.props.todoUpdate(this.props.id);
        }}>
          <input className="todo-edit-input" />
        </form>
      </div>

    );
  }
}

export default TodoEditor;
