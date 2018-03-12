import React from 'react';
import Counter from './Counter';

class CounterContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.setIncrement = this.setIncrement.bind(this);
    this.setDecrement = this.setDecrement.bind(this);
  }

  setIncrement(e) {
    e.preventDefault();

    this.setState({
      counter: this.state.counter + 1
    });
  }

  setDecrement(e) {
    e.preventDefault();

    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <Counter
        // counter={this.state.counter}
        counter={counter}
        increment={this.setIncrement}
        decrement={this.setDecrement}
      />
    )
  }
}

export default CounterContainer;
