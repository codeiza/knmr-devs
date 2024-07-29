import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
