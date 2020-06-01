import React, {Component} from 'react';
import TodoAdder from './todoadder';

class ControlCard extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="control-card">
        <TodoAdder
          inputChecker={(e) => {this.props.inputChecker(e)}}
          todoAdd={(e) => {this.props.todoAdd(e)}}
          error={this.props.error}
          disabled={this.props.disabled}
          inputField={this.props.inputField}
        />
      </div>
    );
  }
}

export default ControlCard;
