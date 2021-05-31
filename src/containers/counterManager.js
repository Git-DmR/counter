import React from "react";
import CounterManager from "../components/counterManager/index.js";

class CounterManagerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCounters: 0,
    };
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  addCounter() {
    this.setState((state) => ({
      totalCounters: this.state.totalCounters + 1,
    }));
  }

  removeCounter() {
    if (this.state.totalCounters) {
      this.setState((state) => ({
        totalCounters: this.state.totalCounters - 1,
      }));
    }
  }

  render() {
    return (
      <CounterManager
        addCounter={this.addCounter}
        removeCounter={this.removeCounter}
        totalCounters={this.state.totalCounters}
      />
    );
  }
}

export default CounterManagerContainer;
