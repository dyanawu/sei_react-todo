import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

import ControlCard from './components/controlcard';
import TodoCard from './components/todocard';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: {},
      todoStamps: {},
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
      this.setState({newTodo: e.target.value, validationError: "Length must be between 1 and 200", disabled: true});
    }
  }

  todoAdd(e) {
    let newTodo = this.state.newTodo;
    if (newTodo.length == 0) {
      return;
    } else {
      let i = this.state.newId;
      let stamp = moment();
      this.setState({
        todos: {...this.state.todos, [i]: newTodo},
        todoStamps: {...this.state.todoStamps, [i]: stamp},
        newId: i + 1,
        newTodo: ""});
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
          todoStamp={this.state.todoStamps[k]}
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
