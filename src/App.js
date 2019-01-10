import React, {Component} from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel/";
// import calculate from "../logic/calculate";
import "./App.css";

class App extends Component {

    // state = {
    //   total: null,
    //   next: null,
    //   operation: null,
    // };

    
    state = {
      firstNumber: "",
      secondNumber: "",
      isOperatorChosen: false,
      operator: "",
      result: "",
      isCalculated: false
    }

  handleClick = (buttonName, buttonClass) => {
    // this.setState(calculate(this.state, buttonName));
    // console.log(buttonName, buttonClass);
  
    if (buttonClass === "number") {
      // console.log("yes");
      if (this.state.isOperatorChosen === false) {
        this.setState({firstNumber: this.state.firstNumber + buttonName, result: this.state.result + buttonName});
        // if (buttonName === "+/-")
        // this.setState({firstNumber: Number.parseInt(this.state.firstNumber, 10)});
        // console.log("hello",this.state);
;
      }
      else if (this.state.isOperatorChosen === true && this.state.isCalculated === false) {
        // this.setState({firstNumber: Number.parseInt(this.state.firstNumber, 10)});
        this.setState({result:""});
        this.setState({secondNumber: this.state.secondNumber + buttonName, result: this.state.secondNumber + buttonName});
        // this.setState({secondNumber: Number.parseInt(this.state.secondNumber, 10)})
        // console.log("2",this.state);
      }
    }
    else if (buttonClass === "operator" && this.state.isOperatorChosen === false) {
      this.setState({isOperatorChosen: true, operator: buttonName});
    }

    // else return

    if (buttonName === "=") {
      console.log("equal")
      // this.setState({secondNumber: Number.parseInt(this.state.secondNumber)});
      if (this.state.operator === "+") {
        this.setState({result: 
                          (Number.parseFloat(this.state.firstNumber, 10) + 
                            Number.parseFloat(this.state.secondNumber, 10)).toString()});
        this.setState({isCalculated: true});
      }
      else if (this.state.operator === "-") {
        this.setState({result: 
                          (Number.parseFloat(this.state.firstNumber,10) - 
                            Number.parseFloat(this.state.secondNumber, 10)).toString()});
        this.setState({isCalculated: true});
      }
      else if (this.state.operator === "x") {
        this.setState({result: 
                          (Number.parseFloat(this.state.firstNumber,10) * 
                            Number.parseFloat(this.state.secondNumber, 10)).toString()});
        this.setState({isCalculated: true});
      }
      else if (this.state.operator === "÷") {
        this.setState({result: 
                          (Number.parseFloat(this.state.firstNumber,10) /
                            Number.parseFloat(this.state.secondNumber, 10)).toString()});
        this.setState({isCalculated: true});
      }
    }

    else if (buttonName === "AC") {
      this.setState({
        firstNumber: "",
        secondNumber: "",
        isOperatorChosen: false,
        operator: "",
        result: "",
        isCalculated: false
      })
    }
  };
  
  render() {
    console.log(this.state);
    return (
      <div className="component-app">
        <Display value={this.state.result || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  };

};

export default App;
