import React, { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const MediaHeading = (props) => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    console.log("useEfect");
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setData(posts);
    console.log(posts);
  };

  return (
    <Fragment>
      <div className="media mt-5">
        <div className="media-body">
          <h5 className="mt-0">{props.sujeto.nombre}</h5>
          {props.sujeto.texto}
        </div>
        <ul>
          {datas.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default MediaHeading;
