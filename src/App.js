import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./components/Home/Home";
import APropos from "./components/APropos/APropos";
import Competences from "./components/Competences/Competences";
import Parcours from "./components/Parcours/Parcours";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import initFontAwesome from "./lib/initFontAwesome";
initFontAwesome()

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <APropos />
      <Competences />
      <Parcours />
      <Portfolio />
      <Contact />

      <div>
        <a href="#home" className="up">
          <FontAwesomeIcon icon={faCircleArrowUp} className="arrowUp" />
        </a>
      </div>
    </div>
  );
}

export default App;
