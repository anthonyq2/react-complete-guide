import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Pumpkin</h1>
        <p>This is really working.</p>
        <Person name="Anthony" age="23">My Hobbies: Programming</Person>
        <Person name="Taylor" age="24"/>
        <Person name="Max" age="28"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does thsi work now?'));
  }
}

export default App;
