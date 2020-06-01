import React, {Component} from 'react';
import moment from 'moment';

class TodoCard extends Component {
  constructor() {
    super()
  }

  render() {
    let stamp = this.props.todoStamp;
    console.log(moment().diff(stamp, 'seconds'));
    if (moment().diff(stamp, 'seconds') > 6) {
      console.log("here");
      stamp = this.props.todoStamp.format("ddd, DD-MM-YYYY, HH:mm");
    } else {
      stamp = this.props.todoStamp.fromNow();
    }

    return(
      <div className="todo-container">
        <div className="todo-card">
        <span className="wrap">{this.props.todo}</span>
        <span><button
                className="todo-item-button"
                onClick={(id) => {this.props.todoRemove(this.props.id)}}

              >X</button></span>
        </div>
        <div className="timestamp">
          {stamp}
        </div>
      </div>
    );
  }
}

export default TodoCard;
