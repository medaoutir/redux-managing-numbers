import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class CounterComponent extends Component {
  state = {
    counter: 0
  };

  render() {
    const {
      onIncrementCounter,
      onDecrementCounter,
      onAdd5,
      onSubstract5,
      ctr
    } = this.props;
    return (
      <div>
        <CounterOutput value={ctr} />
        <CounterControl
          label="Increment"
          clicked={() => onIncrementCounter(ctr)}
        />
        <CounterControl
          label="Decrement"
          clicked={() => onDecrementCounter(ctr)}
        />
        <CounterControl label="Add 5" clicked={() => onAdd5(ctr)} />
        <CounterControl label="Subtract 5" clicked={() => onSubstract5(ctr)} />
      </div>
    );
  }
}

export default CounterComponent;
