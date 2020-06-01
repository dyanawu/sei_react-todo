import React, {Component} from 'react';

class TodoAdder extends Component {
  constructor() {
    super()

    this.state = {
      formStyle: "todo-input",
      buttonStyle: "todo-button",
    };
  }

  render() {
    return (
      <>
        <h4>What do you need to get done today?</h4>
        <input className={this.state.formStyle}
               onChange={(e) => this.props.inputChecker(e)}
               value={this.props.inputField}
        />
        <input type="submit"
               className={this.state.buttonStyle}
               onClick={(e) => this.props.todoAdd(e)}
               value="Add to list"
               disabled={this.props.disabled}
        />
        <span>{this.props.error}</span>
      </>
    );
  }
}

export default TodoAdder;
