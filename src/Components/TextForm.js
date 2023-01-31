import React, { useState } from "react";



export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpClick() {
    setText(text.toUpperCase());
    props.showAlert("Changed to Uppercase", "success");


  }

  function handleloClick() {
    setText(text.toLowerCase());
    props.showAlert("Changed to Lowercase", "success");
  }

  function handleCapitalClick() {
    const capital = text.charAt(0).toUpperCase() + text.slice(1);
    setText(capital);
    props.showAlert("Capitalized first letter", "success");

  }

  function handleClearClick() {
    setText(" ");
    props.showAlert("Text cleared", "success");
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleExtraSpace() {
    let spacefree = text.replace(/\s+/g, " ");
    setText(spacefree);
    props.showAlert("Removed extra space", "success");

  }

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label className="form-label my-2">
            <h2>{props.head}</h2>
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Clear Extra Space
        </button>
      </div>

      <div className="container my-2 ">
        <h2>Your text summary</h2>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <p>{text.split(" ").length/ 125} Minutes to read</p>
      </div>
    </>
  );
}
