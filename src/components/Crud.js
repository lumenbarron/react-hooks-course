import React, { useState } from "react";
import CrudTable from "./CrudTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import { v4 as uuidv4 } from "uuid";

export default function Crud() {
  const usersData = [
    { id: uuidv4(), name: "ana", username: "ann" },
    { id: uuidv4(), name: "lucy", username: "lu" },
  ];

  //State
  const [users, setUsers] = useState(usersData);

  //Add users
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Delete User
  const deleteUser = (id) => {
    console.log("eliminado", id);
    const arrayFilter = users.filter((user) => user.id !== id);
    setUsers(arrayFilter);
  };

  //Edit User
  const [editing, setEditing] = useState(false);

  const [ currentUser, setCurrentUser] = useState({
      id: null, name : '', username: ''
  });

  const EditRow = (user) => {
      setEditing(true);
      setCurrentUser({id: user.id, name : user.name, username: user.username});
  }

  const updateUser = (id, updateUser) => {
      setEditing(false);
      setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD APP</h1>
      <section className="flex-row">
        <section className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </section>
        <section className="flex-large">
          <h2>View users</h2>
          <CrudTable users={users} deleteUser={deleteUser} setEditing={setEditing} editRow={EditRow} />
        </section>
      </section>
    </div>
  );
}
