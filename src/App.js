import React from "react"
import Navbar from "./Components/Navbar.js"
import Intro from "./Components/Intro.js"
import About from "./Components/About.js"
import Skills from "./Components/Skills.js"
import Projects from "./Components/Projects.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
