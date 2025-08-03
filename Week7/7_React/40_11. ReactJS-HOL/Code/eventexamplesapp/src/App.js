// src/App.js
import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log("Hello from React - Event Handling Example");
    alert("Hello! Welcome to the event demo app.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handlePress = (e) => {
    e.preventDefault(); // Synthetic Event
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>🎯 Event Handling Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handlePress}>Synthetic Event Button</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
