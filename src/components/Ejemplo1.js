import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

export default function Ejemplo1 (props) {
  const { register, errors, handleSubmit } = useForm();

  const [Entradas, setEntradas] = useState([]);

  console.log(props);
  const onSubmit = (data, e) => {
    console.log(data);

    setEntradas([ ...Entradas, data ]);
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>{props.persona} </h1>
  <h3>{props.edad}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="titulo"
          placeholder="titulo"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Required Title" },
            minLength: {
              value: 3,
              message: "Mínimo 3 carácteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.titulo && errors.titulo.message}
        </span>
        <input
          name="descripccion"
          placeholder="descripccion"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Required Description" },
            minLength: {
              value: 5,
              message: "Mínimo 5 carácteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.descripccion && errors.descripccion.message}
        </span>
        <button className="btn btn-primary">Agregar</button>
      </form>
      <ul>
        {Entradas.map((entrada, index) => <li key={index}>{entrada.titulo} - {entrada.descripccion}</li>)}
      </ul>
    </Fragment>
  );
}
