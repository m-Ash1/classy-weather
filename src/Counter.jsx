import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((curr) => {
      return { count: curr.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((curr) => {
      return { count: curr.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;