import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import HeroTafseer from "./Components/HeroTafseerSection";
import MultiHeroCarousel from "./Components/MultiHeroCarousel";
import Footer from "./Components/Footer";
import OffersComponent from "./Components/OffersComponent";
function App() {
  return (
    <div>
      <Navbar />
      <MultiHeroCarousel />
      <OffersComponent />
      <Footer />
    </div>
  );
}

export default App;
