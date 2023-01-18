import React from "react"
import Navbar from "./Navbar"
import Home from "./Home";
import Skills from "./Skills";
import Code from "./Code";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <---- Nav ----> */}
   <Navbar />
   {/* <---- About Me ----> */}
   <Home />
   {/* <---- Skills ----> */}
   <Skills />
   {/* <---- Project View ----> */}
   <Code />
   {/* <---- Footer ----> */}
   <Footer />
    </div>
  );
}

export default App;
