import React, { useState, Fragment } from "react";

const Counter = () => {
  const [number, setNumber] = useState(6);
  const [arrayNumero, setArrayNumber] = useState([1,2,3,4,3,5]);


/*   const aunmentar = () => {
    console.log("aumentando");
    setNumber(number + 1);
  }; */

  const aunmentar = () => {
    console.log("aumentando");
    setNumber(number + 1)
    setArrayNumber([...arrayNumero, number]);
  };

  return (
    <Fragment>
      <h1>Contador</h1>
      {arrayNumero.map((number, index) => 
      <p key={index}>{number}</p>
      )}
      {/* <p>{number}</p>*/}
      <button onClick={aunmentar}> Aumentar</button> 
    </Fragment>
  );
};

export default Counter;
