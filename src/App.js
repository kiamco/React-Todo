import React from 'react';
import { Route } from 'react-router-dom';
import ListItems from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import Styled from 'styled-components';
import './components/TodoComponents/Todo.css'

const todos = [{
  title: 'create form component',
  description: 'you know what todo',
  priority: 'High',
  completed: false
}]

const ListItemContainer = Styled.div`
        display:flex;
        flex-flow: row wrap;
        align-items: base;
        width:100%;
    `

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = (event, childData) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      todos: [...this.state.todos, childData]
    })

  }

  toggleTodo = (date) => {

    this.setState({
      todos: this.state.todos.map(todo => {

        if (todo.date === date) {
          console.log(todo);
          return { ...todo, completed: !todo.completed }
        }

        return todo;
      })
    })

  }

  clear = (event) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  // this.setState({
  //   todos: this.state.todos.map(el =>)
  // })
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='todo-container'>
          <Route exact to='/todoItem' component={(props) => (<TodoForm {...props} addCard={this.addTodo} />)} />
          <h2>Todo List</h2>
          <ListItemContainer>
            {this.state.todos.map(el => <ListItems item={el} clickHandle={this.toggleTodo} clear={this.clear} />)}
          </ListItemContainer>       
          <button onClick={this.clear}>Clear</button>
        </div>

      </div>
    );
  }
}

export default App;
