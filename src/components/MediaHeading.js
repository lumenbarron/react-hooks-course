import React, { Fragment } from "react";

const MediaHeading = ( props ) => {
    console.log(props.sujeto);
  return (
    <Fragment>
      <div className="media mt-5">
        <img
          className="mr-3"
          src="https://via.placeholder.com/64"
          alt="Generic placeholder image"
        />
        <div className="media-body">
  <h5 className="mt-0">{props.sujeto.nombre}</h5>
         {props.sujeto.texto}
        </div>
      </div>
    </Fragment>
  );
};

export default MediaHeading;
