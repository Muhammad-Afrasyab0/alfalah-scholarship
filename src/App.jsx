import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import ImpactStrip from "./components/home/ImpactStrip";
import MessageSection from "./components/home/MessageSection";
import ImpactTimeline from "./components/home/ImpactTimeline";
import SponsorCTA from "./components/home/SponsorCTA";

import About from "./pages/About";
import Donor from "./pages/Donor";
import Scholar from "./pages/Scholar";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>

          {/* =================================================
              HOME
          ================================================== */}

          <Route
            path="/"
            element={
              <>
                <Hero />
                <ImpactStrip />
                <MessageSection />
                <ImpactTimeline />
                <SponsorCTA />
              </>
            }
          />

          {/* =================================================
              ABOUT
          ================================================== */}

          <Route
            path="/about"
            element={<About />}
          />

          {/* =================================================
              BECOME A DONOR
          ================================================== */}

          <Route
            path="/donor"
            element={<Donor />}
          />

          {/* =================================================
              BECOME A SCHOLAR
          ================================================== */}

          <Route
            path="/scholar"
            element={<Scholar />}
          />

          {/* =================================================
              CONTACT US
          ================================================== */}

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;