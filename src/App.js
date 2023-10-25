
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects"
import Education from "./components/Education"
import Footer from "./components/Footer"


function App() { 
  return (
    <div className="app">
      <Navbar />
      <div className="maincontainer">
        <Hero /> 
        <About />
        <Experience />
        <Education />
        <Projects />
        <OtherProjects /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
