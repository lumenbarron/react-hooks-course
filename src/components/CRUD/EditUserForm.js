import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser);
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser
  });

//   setValue("name", props.currentUser.name);
//   setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    console.log(data);
    //data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)
    e.target.reset();
  };

  return (
    <div>
      <h1>Editando</h1>
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
        <button className="btn btn-primary ml-4">edit user</button>
      </form>
    </div>
  );
};

export default EditUserForm;
