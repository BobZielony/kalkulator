import { Component } from 'react';

class Screen extends Component {
  render() {
    return <div style={{
        border: "2px solid #32CD32",
        width: "300px",
        height: "70px",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "#32CD32",
        fontSize:"35px",
        textAlign: "right",
        marginBottom: "10px"
      }}>{this.props.value}</div>;
  }
}

export default Screen;