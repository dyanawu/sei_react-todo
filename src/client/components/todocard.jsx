import React, {Component} from 'react';
import moment from 'moment';

import TodoEditor from './todoeditor';

class TodoCard extends Component {
  constructor() {
    super()

    this.state = {
      editing: false
    };
  }

  todoEdit() {
    this.setState({editing: !this.state.editing});
  }


  render() {
    let stamp = this.props.todoStamp;
    if (moment().diff(stamp, 'seconds') > 6) {
      stamp = this.props.todoStamp.format("ddd, DD-MM-YYYY, HH:mm");
    } else {
      stamp = this.props.todoStamp.fromNow();
    }

    return(
      <>
        <div className="todo-container">
          <div className="todo-card">
            <span className="wrap">{this.props.todo}</span>
            <span>
              <button
                className="todo-card-button"
                onClick={(id) => {
                  this.todoEdit(this.props.id);
                }}
              >E</button>
              <button
                className="todo-card-button"
                onClick={(id) => {this.props.todoRemove(this.props.id)}}
              >X</button>
            </span>
          </div>
          {this.state.editing ?
          (<TodoEditor
            todoUpdate={(id) => this.props.todoUpdate(id)}
             id={this.props.id}
             editField={this.props.todo}
             editError={this.props.editError}
             todoEdit={() => {this.todoEdit()}}
             todoEditInputChecker={(e) => {this.props.todoEditInputChecker(e)}}
          />) : <></>}
          <div className="timestamp">
            {stamp}
          </div>
        </div>
      </>
    );
  }
}

export default TodoCard;
