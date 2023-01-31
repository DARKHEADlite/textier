import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar title="Textier" aboutText="About" />
        <Alert alert={alert} />
      

        <div className="container my-2">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} head="Enter the text below" />
            {/* } /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
