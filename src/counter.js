import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    this.setState((previousValue) => ({
      count: previousValue.count - 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <div className="counter">
          <button className="btnCounter" onClick={this.increment}>
            +
          </button>
          <button className="btnCounter" onClick={this.decrement}>
            -
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
