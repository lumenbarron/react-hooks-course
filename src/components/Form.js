import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    lastname: "",
  });

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.name + " " + data.lastname);
  };

  return (
    <Fragment>
      <h1>form</h1>
      <form className="row" onSubmit={sendData}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Apellido"
            className="form-control"
            name="lastname"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-success" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3 mt-4">
          <input
            type="text"
            placeholder="title"
            className="form-control"
            name="title"
            ref={register({
              required: { value: true, message: "Required Title" },
              maxLength: {
                value: 5,
                message: "No más de 5 carácteres!",
              },
              minLength: {
                value: 2,
                message: "Mínimo 2 carácteres",
              },
            })}
          />
        </div>
        <span className="text-danger text-small d-block mb-2">
    {errors.title && errors.title.message}
</span>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <p>
        {data.name}- {data.lastname}
      </p>
    </Fragment>
  );
}
