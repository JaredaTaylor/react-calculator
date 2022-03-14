import '../css/App.css';
import { Component } from 'react';
import Dialpad from './Dialpad';
import Operationpad from './Operationpad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0.0,
      display: 0.0,
      operation: null,
      operationDone: false
    };
    this.Addtodisplay = this.Addtodisplay.bind(this);
    this.Cleardisplay = this.Cleardisplay.bind(this);
    this.Clearall = this.Clearall.bind(this);
    this.Add = this.Add.bind(this);
    this.Subtract = this.Subtract.bind(this);
    this.Divide = this.Divide.bind(this);
    this.Multiply = this.Multiply.bind(this);
    this.Mod = this.Mod.bind(this);
    this.Equals = this.Equals.bind(this);
  }

  // functions
  Addtodisplay(str) {
    if (this.state.operationDone === false){
      let displayVal = this.state.display;
      if (displayVal === 0) {
        displayVal = str;
      }
      else {
        displayVal = displayVal + str;
      }
      this.setState({
        display: displayVal,
        operationDone: false
      });
    }
  }

  Cleardisplay() {
    if(this.state.operationDone === false){
      this.setState({display:0.0});
    }
  }

  Clearall(){
    this.setState({
      display: 0.0,
      result: 0.0,
      operation: null,
      operationDone: false
    })
  }

  Add() {
    //let result = this.state.result;
    let display = this.state.display;
    if (this.state.operation == null) {
      this.setState({
        result: display,
        display: 0.0,
        operation: '+',
        operationDone: false
      })
    }
  }

  Subtract() {
    let display = this.state.display;
    if (this.state.operation == null) {
      this.setState({
        result: display,
        display: 0.0,
        operation: '-',
        operationDone: false
      })
    }
  }

  Divide() {
    let display = this.state.display;
    if (this.state.operation == null) {
      this.setState({
        result: display,
        display: 0.0,
        operation: '/',
        operationDone: false
      })
    }
  }

  Multiply() {
    let display = this.state.display;
    if (this.state.operation == null) {
      this.setState({
        result: display,
        display: 0.0,
        operation: 'x',
        operationDone: false
      })
    }
  }

  Mod() {
    let display = this.state.display;
    if (this.state.operation == null) {
      this.setState({
        result: display,
        display: 0.0,
        operation: '%',
        operationDone: false
      })
    }
  }

  Equals() {
    let result = this.state.result;
    let display = this.state.display;
    let operation = this.state.operation;
    if (operation != null) {
      if (operation === '+') {
        result = Number(result) + Number(display)
      }
      else if (operation === '-') {
        result = Number(result) - Number(display)
      }
      else if (operation === '/') {
        result = Number(result) / Number(display)
      }
      else if (operation === 'x') {
        result = Number(result) * Number(display)
      }
      else if (operation === '%') {
        result = Number(result) % Number(display)
      }
      this.setState({
        result: result,
        display: result,
        operation: null,
        operationDone: true
      });
    }
  }

  // render
  render() {

    return(

      <main className='page bg-white'>
        <div className='container'>
          <h1>React Calculator Application</h1>
          <h2>{ this.state.display }</h2>
          <Dialpad 
            result={this.state.result}
            display={this.state.display}
            operationDone={this.state.operationDone}
            Addtodisplay={this.Addtodisplay}
            Cleardisplay={this.Cleardisplay}
            Clearall={this.Clearall}
          />
          <Operationpad
            result={this.state.result}
            display={this.state.display}
            operation={this.state.operation}
            operationDone={this.state.operationDone}
            Add={this.Add}
            Subtract={this.Subtract}
            Divide={this.Divide}
            Multiply={this.Multiply}
            Mod={this.Mod}
            Equals={this.Equals}
          />
        </div>
      </main>
    ); // end return
  } //end render
}


export default App;
