import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation  from './Validation/Validation';
import Char  from './Char/Char';

class App extends Component {
  state = {
    userInput:''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput : event.target.value});
  }

  removeCharHandler = (index) => {
    const text =this.state.userInput.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({userInput:updateText});
  }

  render() {
    const charList = this.state.userInput.split('').map((c,index) => {
      return (
        <Char value={c} clicked={() => this.removeCharHandler(index)}/>
      )
    });
    return (
      <div className='App'>
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
