import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./pages/ExplorePages/Home";
import NotFound from "./pages/ExplorePages/PageNotFound";
import QuranGateWay from "./pages/EducationPages/QuranGateWay";
import QuranAcademy from "./pages/EducationPages/QuranAcademy";
import IslamicEssenrials from "./pages/EducationPages/IslamicEssentials";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Explore Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/faculty" element={<Home />} />
        <Route path="/reviews" element={<Home />} />

        {/* Courses Pages Routes */}
        <Route path="/qurangateway" element={<QuranGateWay />} />
        <Route path="/quranacademy" element={<QuranAcademy />} />
        <Route path="/islamicessentials" element={<IslamicEssenrials />} />
        <Route path="/arabicliteracy" element={<Home />} />
        <Route path="/islamictheology" element={<Home />} />
        <Route path="/arabicmastery" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
