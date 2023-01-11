import React from "react"
import Navbar from "./Navbar"
import Home from "./Home";
import Skills from "./Skills";
import Code from "./Code";
import './App.css';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Home />
   <Skills />
   <Code />
    </div>
  );
}

export default App;
