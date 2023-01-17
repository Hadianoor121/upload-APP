import logo from './logo.svg';
import React, { Component } from 'react'; 
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //make a copy of counter array but the changes made in copy will also be made in the original array
    const index = counters.indexOf(counter); //finding index of counter passed
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //console.log(counter);
  };

  handleReset = () => {
   // console.log("clicking reset");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId); // returns a new array
    this.setState({ counters: counters }); //update counters state to new counters arr
  };


  render() {

  return (
    <React.Fragment>
   <Navbar totalCounters = {this.state.counters.filter(c => c.value>0).length}/>
   <Counters 
   counters ={this.state.counters}
   onIncrement = {this.handleIncrement}
   onDelete = {this.handleDelete}
   onReset ={this.handleReset}
   />
   </React.Fragment>
  );

  }
}

export default App;
