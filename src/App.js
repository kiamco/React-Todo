import React from 'react';
import ListItems from './components/TodoComponents/TodoList.js'

const todos = [{
  date: Date.now(),
  title: 'asd',
  description: 'asd',
  deadline: 'asd',
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  // this.setState({
  //   todos: this.state.todos.map(el =>)
  // })
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div classname='todo-container'>
          <h2>Todo List</h2>
          {/* render list */}
          <ListItems item={this.state.todos}/>
          {/* render form and but
          tons */}

        </div>
      </div>
    );
  }
}

export default App;
