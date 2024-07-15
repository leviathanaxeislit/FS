import React from "react";
import "./App.css";
import Parent from "./Parent";
import "./index.css";
 
const App = () => {
    return (
        <div className="App">
            <h1 className="coloring">WELCOME TO REACT JS</h1>
            <h3>This is App.js Component</h3>
            <Parent />
        </div>
    );
};
 
export default App;