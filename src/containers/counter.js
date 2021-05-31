import React from "react";
import Counter from "../components/counter/index.js";

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((state) => ({
      currentValue: this.state.currentValue + 1,
    }));
  }

  handleReset() {
    this.setState((state) => ({
      currentValue: 0,
    }));
  }

  handleDecrement() {
    this.setState((state) => ({
      currentValue: this.state.currentValue - 1,
    }));
  }

  render() {
    return (
      <Counter
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleDecrement={this.handleDecrement}
        currentValue={this.state.currentValue}
      />
    );
  }
}

export default CounterContainer;
