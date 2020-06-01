import React from 'react';
import { hot } from 'react-hot-loader';

import ControlCard from './components/controlcard';
import TodoCard from './components/todocard';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: {},
      newId: 1,
      newTodo: "",
      validationError: "",
      disabled: true
    }
  }

  inputChecker(e) {
    let newTodo = e.target.value;
    if (newTodo.length >= 1 && newTodo.length <= 200) {
      this.setState({newTodo: e.target.value, validationError: "", disabled: false});
    } else {
      this.setState({validationError: "Length must be between 1 and 200", disabled: true});
    }
  }

  todoAdd(e) {
    console.log("submit:", this.state.newTodo);
    let newTodo = this.state.newTodo;
    if (newTodo.length == 0) {
      return;
    } else {
      let i = this.state.newId;
      this.setState({todos: {...this.state.todos, [i]: newTodo}, newId: i + 1, newTodo: ""});
      console.log(this.state.todos);
    }
  }

  todoRemove(id) {
    let todos = this.state.todos;
    delete todos[id];
    this.setState({todos: {...todos}});
  }

  render() {
    let todoCards = Object.keys(this.state.todos).map((k) => {
      return (
        <TodoCard
          key={k}
          id={k}
          todo={this.state.todos[k]}
          todoRemove={(id) => this.todoRemove(id)}
      />
      );
    });

    return (
      <>
        <ControlCard
          inputChecker={(e) => {this.inputChecker(e)}}
          todoAdd={(e) => this.todoAdd(e)}
          error={this.state.validationError}
          disabled={this.state.disabled}
          inputField={this.state.newTodo}
        />
        {todoCards}
      </>
    );
  }
}

export default hot(module)(App);
