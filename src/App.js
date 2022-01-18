import React from "react"
//import Navbar from "./Components/Navbar.js"
import Intro from "./Components/Intro.js"
import About from "./Components/About.js"
import Skills from "./Components/Skills.js"
import Projects from "./Components/Projects.js"
import Contact from "./Components/Contact.js"
import Header from "./Components/Header.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
