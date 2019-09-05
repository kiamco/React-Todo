import React from 'react';
import { Route } from 'react-router-dom';
import ListItems from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import Styled from 'styled-components';

const todos = [{
  date: Date.now(),
  title: 'create form component',
  description: 'you know what todo',
  priority: 'High',
},
{
  date: Date.now(),
  title: 'study for Data Structures',
  description: 'you know what todo',
  priority: 'High',
}]

const ListItemContainer = Styled.div`
        display:flex;
        flex-flow: row wrap;
        align-items: center;
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
    this.setState({
      todos: [...this.state.todos, childData]
    })
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
          {/* render list */}
          <ListItemContainer>
            {this.state.todos.map(el => <ListItems item={el} />)}
          </ListItemContainer>
          {/* render form and but
          tons */}

        </div>

      </div>
    );
  }
}

export default App;
