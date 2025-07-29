import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'
import HeroTafseer from "./Components/HeroTafseerSection"
import MultiHeroCarousel from "./Components/MultiHeroCarousel";
function App() {
  return (
    <div>
      <Navbar />
      <MultiHeroCarousel />
    </div>
  );
}

export default App;
