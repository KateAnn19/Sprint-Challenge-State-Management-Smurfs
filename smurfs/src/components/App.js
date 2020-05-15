import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfsForm from "./SmurfsForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS w/Redux 🌈 </h1>
        <Smurfs />
        <SmurfsForm />
      </div>
    );
  }
}

export default App;
