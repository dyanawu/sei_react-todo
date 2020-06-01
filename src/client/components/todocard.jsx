import React, {Component} from 'react';
import moment from 'moment';

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
        <div className="timestamp">
          {this.props.todoStamp.fromNow()}
        </div>
      </div>
    );
  }
}

export default TodoCard;
