import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = ({ addUser }) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    addUser(data);
    e.target.reset();
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: { value: true, message: "Required name" },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.name && errors.name.message}
        </span>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          ref={register({
            required: { value: true, message: "Required userName" },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.username && errors.username.message}
        </span>
        <button className="btn btn-primary ml-4">add user</button>
      </form>
    </div>
  );
};

export default AddUserForm;
