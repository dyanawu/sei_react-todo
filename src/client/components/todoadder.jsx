import React, {Component} from 'react';

class TodoAdder extends Component {
  constructor() {
    super()

    this.state = {
      formStyle: "todo-input",
      buttonStyle: "todo-button",
      todos: [],
      newTodo: ""
    };
  }

  inputChecker(e) {
    console.log("target:", e.target.value);
    this.setState({newTodo: e.target.value});
    console.log("todos:", this.state.todos);
    console.log("new todo:", this.state.newTodo);
  }

  todoAdd(e) {
    console.log("submit:", this.state.newTodo);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h4>What do you need to get done today?</h4>
        <input className={this.state.formStyle}
               onChange={(e) => this.inputChecker(e)} />
        <input type="submit"
               className={this.state.buttonStyle}
               onClick={(e) => this.todoAdd(e)}
               value="Add to list" />
      </>
    );
  }
}

export default TodoAdder;
