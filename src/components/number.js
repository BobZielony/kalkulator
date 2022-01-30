import { Component } from 'react';

class Number extends Component {
  render() {
    return (
    <div style={{
            padding: "10px",
            border: "2px solid #32CD32",
            borderRadius: "10px",
            backgroundColor: "black",
            color: "#32CD32",
            textAlign: "right",
            marginBottom: "10px",
            width: "60px"
        }} onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
    </div>
    );
  }
}

export default Number;