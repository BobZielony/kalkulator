import { Component } from 'react';

class Operator extends Component {
  render() {
    return (
      <div style={{
        padding: "10px",
        border: "2px solid #32CD32",
        marginBottom: "10px",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "#32CD32",
        textAlign: "right",
        width: "60px"
        }} onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </div>
    );
  }
}

export default Operator;