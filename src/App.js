import React, { Component } from "react";
import Counter from './components/counter';
import Counter2 from './components/counterState';
import DatePickerComp from './components/datePickerComp';

export default class App extends Component {
  state = {

  };

  render() {

    return (
      <div className="App">
        <Counter2 />
        <DatePickerComp />
      </div>
    );
  }
}
