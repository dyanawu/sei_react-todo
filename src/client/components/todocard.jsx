import React, {Component} from 'react';

class TodoCard extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="todo-card" data-key={this.props.id}>
        <span>{this.props.todo}</span>
        <span><button
                className="todo-item-button"
                onClick={(id) => {this.props.todoRemove(this.props.id)}}

              >X</button></span>
      </div>
    );
  }
}

export default TodoCard;
