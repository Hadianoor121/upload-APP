import React, { Component } from "react";

class Counter extends Component {
  //removing state as we need to update the value of count from another component
  /*   state = {
    value: this.props.counter.value,
    tags: [],

    //prop are being passed from component: counters.js
    //state contains all data this component needs
  };
*/
  styles = {
    fontSize: 50,
    fonrWeight: "bold",
  };

  //<span style={this.styles} className="badge badge-primary m-2"> -->styling syntax

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    // this.state.count++; // we have tell explicitly to react which state to change
    //console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      //React.Fragment will allow you to add these tags in existing div
      //<span>{this.state.count}</span>
      //className="badge badge-primary m-2" --> bootstrap for syle, m-2 is margin
      //In JS true && HI = HI, true && a && b = b
      <React.Fragment>
        {/* 
        <p>{this.state.tags.length === 0 && "Please create a new tag"}</p>
        <ul>{this.renderTags()}</ul> 
        */}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <p> </p>
      </React.Fragment>
    ); //<h1>Hello World</h1><button>Increment</button>, will not work as should be wrapper with type like react.Fragment,h1
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

// function Counter() {
//     return ( (<h1>Hello World</h1>));
// }
export default Counter;
