import React, { Component } from "react";

export default class Counter2 extends Component {
  state = {
    arrayNumber : [1,2,3,4,3,5],
    number : 6
  };

  aumentar = () => {
      console.log('aumentando');
      this.setState(({number, arrayNumber}) => ({
          arrayNumber : [...arrayNumber, number],
          number : number +1
      }))
  }

  render() {
    const  arrayNumber = this.state.arrayNumber;
    return (
      <div className="App">
              <h1>Contador</h1>
      {arrayNumber.map((number, index) => 
      <p key={index}>{number}</p>
      )}
      {/* <p>{number}</p>*/}
      <button onClick={this.aumentar}> Aumentar</button> 
      </div>
    );
  }
}