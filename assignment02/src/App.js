import React, { Component } from 'react';
import './App.css';
import Validate from './Validation/Validation.js'
import CharComp from './CharComponent/CharComponent.js'

class App extends Component {
  state={
    Userinput:''
  }
  changeHandler=(event)=>{
      this.setState({Userinput:event.target.value});
  }
  deleteHandler=(index)=>{
    const input=this.state.Userinput.split('');
    input.splice(index,1);
    const upinput=input.join('');
    this.setState({Userinput: upinput})
  }
  render() {
    const charlist=this.state.Userinput.split('').map((ch,index)=>{
      return <CharComp character={ch} key={index} clicked={this.deleteHandler.bind(this,index)}></CharComp>
    })
      return (
      <div className="App">
        Enter Your Text:
        <input type="text" onChange={this.changeHandler} value={this.state.Userinput}></input>
        <p>{this.state.Userinput}</p>
        <p>The length is: {this.state.Userinput.length}</p>
        <Validate len={this.state.Userinput.length}></Validate>
        {charlist}
      </div>
    );
  }
}

export default App;
