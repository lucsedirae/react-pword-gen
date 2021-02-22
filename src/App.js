//* Dependencies
import React from "react";
import "./App.css";

//* MUI comps, hooks, and icons
import Container from "@material-ui/core/Container";

//* Custom components
import PwordBox from "./components/password/PwordBox";

//* Exported component
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
