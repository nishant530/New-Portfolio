import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Project from "./section/Project";

import Contact from "./section/Contact";
import About from "./section/About";
import Skills from "./section/Skills";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
