import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skill from "./components/Skill";
import Banner from "./components/Banner";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import Education from "./components/Education";
import Sendmail from "./components/Sendmail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
