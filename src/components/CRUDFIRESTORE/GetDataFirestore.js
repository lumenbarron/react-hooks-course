import React, { Fragment, useState, useEffect } from "react";
import { firebase } from "../../firebase";
import AddDataFirestore from './AddDataFirestore';
import EditDataFirestore from './EditDataFirestore';

const GetDataFirestore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEfect");
    getData();
  }, []);

  const getData = () => {
    const unsubscribe = firebase;
    firebase
      .firestore()
      .collection("tareas")
      .onSnapshot((snapshot) => {
        const arrayData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(arrayData);
      });
    return () => unsubscribe();
  };

  const deleteData = (id) => {
    console.log('eliminado');
    firebase.firestore().collection('tareas').doc(id).delete()
}

  return (
    <Fragment>
      <div className="container mb-2">
        <div className="row">
          <div className="col-md-6">
            <h3>Lista de Tareas</h3>
            <ul className="list-group">
              <div></div>
              {data.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <span>{item.tarea}</span>
                  <span>{item.fecha}</span>
                  <button onClick={() => deleteData(item.id)} className="btn btn-danger btn-sm float-right">
                    Eliminar
                  </button>
                  <button className="btn btn-warning btn-sm float-right mr-2">
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
<AddDataFirestore />
<EditDataFirestore />
    </Fragment>
  );
};

export default GetDataFirestore;
