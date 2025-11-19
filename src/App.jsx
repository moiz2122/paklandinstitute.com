import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import ScrolToTop from "./Components/ScrollToTop";

import Home from "./pages/ExplorePages/Home";
import NotFound from "./pages/ExplorePages/PageNotFound";
import QuranGateWay from "./pages/EducationPages/QuranGateWay";
import QuranAcademy from "./pages/EducationPages/QuranAcademy";
import IslamicEssenrials from "./pages/EducationPages/IslamicEssentials";
import ArabicMastery from "./pages/EducationPages/ArabicMastery";

import About from "./pages/ExplorePages/About";
import Contact from "./pages/ExplorePages/Contact";
import Faculty from "./pages/ExplorePages/Faculty";
import PageReviews from "./pages/ExplorePages/PageReviews";

function App() {
  return (
    <div>
      <ScrolToTop />
      <Navbar />

      <Routes>
        {/* Explore Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/reviews" element={<PageReviews />} />

        {/* Courses Pages Routes */}
        <Route path="/qurangateway" element={<QuranGateWay />} />
        <Route path="/quranacademy" element={<QuranAcademy />} />
        <Route path="/islamicessentials" element={<IslamicEssenrials />} />
        <Route path="/arabicliteracy" element={<Home />} />
        <Route path="/islamictheology" element={<Home />} />
        <Route path="/arabicmastery" element={<ArabicMastery />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
