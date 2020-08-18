import React, { Fragment, useState, useEffect } from "react";
import { firebase } from "../firebase";

const GetDataFirestore = () => {
  const [data, setData] = useState([]);
  const [tarea , setTarea] = useState('');
  const [fecha, setFecha] = useState('');

//   firebase.firestore().collection('tareas').add({
//       tarea : 'segunda tarea',
//       fecha:'hoy'
//   }).then(ref => {
//       console.log('added new task', ref.id);
//   })

  useEffect(() => {
    console.log("useEfect");
    getData();
  }, []);

  const getData = () => {
      //added variable unsubscribe
    const unsubscribe = firebase
    firebase.firestore().collection('tareas')
    .onSnapshot(snapshot => {
        const arrayData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
        setData(arrayData);
    })
    return () => unsubscribe()
    
  };

//   const getData = async () => {
//     const db = firebase.firestore();
//     try {
//       const data = await db.collection("tareas").get();
//       const arrayData = data.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       console.log(arrayData);
//       setData(arrayData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addNewData = async () => {
//     try {
//         const db = firebase.firestore()
//         const newData = {
//             name: data,
//             fecha: Date.now()
//         }
//         const data = await db.collection('tareas').add({ name: data,
//           fecha: Date.now()})
  
//           setData([...data, {id: data.id, ...newData}])
//           setData('')
//     } catch (error) {
//         console.log(error);
//     }
//   }
  

  const addData = (e) => {
      e.preventDefault();
      firebase.firestore().collection('tareas').add({
        tarea ,
        fecha
      })
      .then(() => setTarea(''), setFecha(''))
  }

  return (
    <Fragment>
      <div className="container mb-2">
        <div className="row">
          <div className="col-md-6">
            <h3>Lista de Tareas</h3>
            <ul className="list-group">
            <div>

    </div>
              {data.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <span>{item.tarea}</span>
                  <span>{item.fecha}</span>
                  <button className="btn btn-danger btn-sm float-right">
                    Eliminar
                  </button>
                  <button className="btn btn-warning btn-sm float-right mr-2">
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">formulario</div>
        </div>
      </div>
      <form onSubmit={addData}>
      <input name="tarea" type="text" value={tarea} onChange={e => setTarea(e.currentTarget.value)} />
      <input name="fecha" type="text" value={fecha} onChange={e => setFecha(e.currentTarget.value)} />
      <button>Submit</button>
    </form>

    </Fragment>
  );
};

export default GetDataFirestore;
