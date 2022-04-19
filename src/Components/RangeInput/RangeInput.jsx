import "react-input-range/lib/css/index.css";
import './RangeInput.css'

import React from "react";
import InputRange from "react-input-range";

class RangeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 80000 }
    };
  }

  render() {
    return (
      <div>
        <InputRange
          maxValue={80000}
          minValue={0}
          value={this.state.value}
          onChange={(value) => this.setState({ value })}
        />
        <h3>{this.state.value.min}</h3>
      </div>
    );
  }
}

export default RangeInput;
