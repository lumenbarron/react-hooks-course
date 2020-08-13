import React, { Component } from "react";
import imagePreview from "./images/preview.png";

export default class readerFile extends Component {
    state = {
      profileImg: imagePreview
    };
    imageHandler = e => {
      console.log("here");
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ profileImg: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };
    render() {
      const { profileImg } = this.state;
      return (
        <div className="App">
          <h1>Add you image</h1>
          <img
            src={profileImg}
            style={{ width: 100, height: 100 }}
            alt="imagepreview"
          />
          <input type="file" accept="image/*" onChange={this.imageHandler} />
        </div>
      );
    }
  }