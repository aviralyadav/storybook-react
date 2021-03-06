import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './components/Select/Select';

class App extends Component {
  render() {
    const {title} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {title}</h1>
        </header>
        <Select />
      </div>
    );
  }
}

App.defaultProps = {
  title: 'React'
}

export default App;
