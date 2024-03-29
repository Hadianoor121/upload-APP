import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <p></p>

        {this.props.counters.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
      //this.handleDelete is reference the function handleDelete() written above
    );
  }
}

export default Counters;
