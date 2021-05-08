import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FullPicture } from "./FullPicture";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FullPicture />
    </div>
  );
};

export default App;
