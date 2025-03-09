import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Resume from "./Pages/Resume.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
     
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/experience" element={<About/>} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route  exact path="/contact" element={<Contact />} />
          <Route  exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    <Footer/>
    </Router>
  );
}

export default App;
