//* Dependencies
import React from "react";
import "./App.css";

//* Custom components
import PwordBox from "./components/password/PwordBox";

//* Exported component
function App() {
  return (
    <div className="App">
      <div className="bground" />
        <PwordBox />
    </div>
  );
}

export default App;
