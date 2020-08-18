import React, { Component } from "react";
//import Counter from './components/counter';
import Counter2 from "./components/counterState";
import Form from "./components/Form";
import DatePickerComp from "./components/datePickerComp";
import Ejemplo1 from "./components/Ejemplo1";
import MediaHeading from "./components/MediaHeading";
import Crud from './components/Crud';
export default function App() {
  const sujeto = {
    nombre: "lucy",
    urlImage: "https://via.placeholder.com/64",
    texto: "holaholaolahola",
  };

  return (
    <div className="App">
      {/* <Form />
        <DatePickerComp /> */}
      {/* <Ejemplo1 persona='lucy' edad={25} />
        <Ejemplo1 persona='mendez'/> */}
      {/* <MediaHeading sujeto={sujeto} /> */}
      <Crud />
    </div>
  );
}
