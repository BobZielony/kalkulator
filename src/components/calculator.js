import { Component } from "react";
import Number from "./number";
import Operator from "./operator";
import Screen from "./screen";

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
    calculatorHistory : [],
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      let tempCalculatorHistory = this.state.calculatorHistory;
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
        tempCalculatorHistory.push(this.state.first+this.state.second);
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
        tempCalculatorHistory.push(this.state.first/this.state.second);
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
        tempCalculatorHistory.push(this.state.first-this.state.second);
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
        tempCalculatorHistory.push(this.state.first*this.state.second);
      }
      this.setState({calculatorHistory:tempCalculatorHistory});
      console.log(tempCalculatorHistory);
    } else if (operator === "wyczyść") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  

  render() {
    let tempCalculatorHistory  = this.state.calculatorHistory;
    const historyToRender = tempCalculatorHistory.map((value,index)=>{
      return (
        <li key={index}><h1>Wynik działania numer: {index+1} to: {value}</h1></li>
      );
    });
    return (
      <>
        <Screen value={this.getScreenValue()} />
        <div style={{ display: "flex" }}>
          <div>
            <Number value={0} onClick={this.handleNumberClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Operator value="wyczyść" onClick={this.handleOperatorClick} />
          </div>
        </div>
        <ul style={{listStyle:"none",color:"#32CD32", border: "2px solid #32CD32",backgroundColor: "black",}}>
          {historyToRender}
        </ul>
      </>
    );
  }
}

export default Calculator;