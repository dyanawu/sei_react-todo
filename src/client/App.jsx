import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

import ControlCard from './components/controlcard';
import TodoContainer from './components/todocontainer';

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
    if (newTodo.length == 1) {
      this.setState({newTodo: e.target.value, validationError: "Todo must be longer than 1 character", disabled: true});
    } else if (newTodo.length > 200) {
      this.setState({newTodo: e.target.value, validationError: "Todo must be 200 or fewer characters", disabled: true});
    }
    else if (newTodo.length == 0) {
      this.setState({newTodo: e.target.value, validationError: "", disabled: true});
    } else {
      this.setState({newTodo: e.target.value, validationError:"", disabled: false});
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
        newTodo: "",
        disabled: true});
    }
  }

  todoEdit(id) {
    console.log("edit:", id);
  }

  todoUpdate(id) {
    console.log("update:", id);
  }

  todoRemove(id) {
    let todos = this.state.todos;
    delete todos[id];
    this.setState({todos: {...todos}});
  }

  render() {
    return (
      <>
        <ControlCard
          inputChecker={(e) => {this.inputChecker(e)}}
          todoAdd={(e) => this.todoAdd(e)}
          error={this.state.validationError}
          disabled={this.state.disabled}
          inputField={this.state.newTodo}
        />
        <TodoContainer
          todos={this.state.todos}
          todoStamps={this.state.todoStamps}
          todoEdit={(id) => this.todoEdit(id)}
          todoUpdate={(id) => this.todoUpdate(id)}
          todoRemove={(id) => this.todoRemove(id)}
        />
      </>
    );
  }
}

export default hot(module)(App);
