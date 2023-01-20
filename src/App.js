import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./components/Home/Home";
import APropos from "./components/APropos/APropos";
import Competences from "./components/Competences/Competences";
import Parcours from "./components/Parcours/Parcours";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

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
        <a href="#home" className="up">haut de page</a>
      </div>
    </div>
  );
}

export default App;
