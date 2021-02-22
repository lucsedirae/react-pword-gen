import React from "react";
import "./App.css";

import PwordBox from "./components/password/PwordBox";

import Container from "@material-ui/core/Container"

function App() {
  return (
    <div className="App">
      <div className="bground" />
      <Container>
      <PwordBox />

      </Container>
    </div>
  );
}

export default App;
