import React, {Component} from 'react';
import TodoAdder from './todoadder';

class ControlCard extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="control-card">
        <TodoAdder />
      </div>
    );
  }
}

export default ControlCard;
