import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Anthony', age: 23 },
      { name: 'Taylor', age: 24 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Anthony', age: 23 },
        { name: 'Taylor', age: 25 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Pumpkin</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Programming</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does thsi work now?'));
  }
}

export default App;
