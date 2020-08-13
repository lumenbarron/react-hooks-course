import React, { Component } from "react";
import Counter from './components/counter';
import Counter2 from './components/counterState';

export default class App extends Component {
  state = {

  };

  render() {

    return (
      <div className="App">
        <Counter2 />
      </div>
    );
  }
}
