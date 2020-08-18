import React, { Fragment, useState } from "react";
import { firebase } from "../../firebase";

const AddDataFirestore = () => {
  const [tarea, setTarea] = useState("");
  const [fecha, setFecha] = useState("");

  const addData = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("tareas")
      .add({
        tarea,
        fecha,
      })
      .then(() => setTarea(""), setFecha(""));
  };

  return (
    <Fragment>
      <form onSubmit={addData}>
          <h1>Add data</h1>
        <input
          name="tarea"
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.currentTarget.value)}
        />
        <input
          name="fecha"
          type="text"
          value={fecha}
          onChange={(e) => setFecha(e.currentTarget.value)}
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default AddDataFirestore;
