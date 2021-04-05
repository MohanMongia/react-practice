import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'MonguPanda'
  }

  changeNameHandler = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changeName = {this.changeNameHandler} name={this.state.name} />
        <UserOutput name={this.state.name}/>
        <UserOutput name="Dhairya"/>
        <UserOutput name="Nisha"/>
      </div>
    );
  }
}

export default App;
