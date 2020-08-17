import React, { Component } from "react";
import Counter from './components/counter';
import Counter2 from './components/counterState';
import Form from './components/Form';
import DatePickerAndTime from './components/DatePicker';

export default class App extends Component {
  state = {

  };

  render() {

    return (
      <div className="App">
        <Counter2 />
        <Form  className='container mt-5' />
        <DatePickerAndTime />
      </div>
    );
  }
}
