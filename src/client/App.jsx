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
      disabled: true,
      editField: "",
      editError: ""
    }
  }

  inputChecker(e) {
    let newTodo = e.target.value;
    if (newTodo.length == 1) {
      this.setState({newTodo: newTodo, validationError: "Todo must be longer than 1 character", disabled: true});
    } else if (newTodo.length > 200) {
      this.setState({newTodo: newTodo, validationError: "Todo must be 200 or fewer characters", disabled: true});
    }
    else if (newTodo.length == 0) {
      this.setState({newTodo: newTodo, validationError: "", disabled: true});
    } else {
      this.setState({newTodo: newTodo, validationError:"", disabled: false});
    }
  }

  todoAdd(e) {
    let newTodo = this.state.newTodo;
    if (newTodo.length == 0) {
      return;
    } else {
      let id = this.state.newId;
      let stamp = moment();
      this.setState({
        todos: {...this.state.todos, [id]: newTodo},
        todoStamps: {...this.state.todoStamps, [id]: stamp},
        newId: id + 1,
        newTodo: "",
        disabled: true});
    }
  }

  todoEditInputChecker(e) {
    let edited = e.target.value;
    if (edited.length < 2) {
      this.setState({editField: edited, editError: "Todo must be longer than 1 character"});
    } else if (edited.length > 200) {
      this.setState({editField: edited, editError: "Todo must be 200 or fewer characters"});
    } else {
      this.setState({editField: edited, editError:""});
    }
  }

  todoUpdate(id) {
    let updated = this.state.editField;
    console.log(this.state.todos[id]);
    let stamp = moment();
    this.setState({
      todos: {...this.state.todos, [id]: updated},
      todoStamps: {...this.state.todoStamps, [id]: stamp}
    });
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
          todoEditInputChecker={(e) => {this.todoEditInputChecker(e)}}
          todoUpdate={(id) => this.todoUpdate(id)}
          todoRemove={(id) => this.todoRemove(id)}
          editing={this.state.editing}
          editField={this.state.editField}
          editError={this.state.editError}
        />
      </>
    );
  }
}

export default hot(module)(App);
