import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Lore from "./components/Lore.jsx";
import HowToJoin from "./components/HowToJoin.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "./theme.jsx";
import FAQ from "./components/FAQ.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Lore />
          <HowToJoin />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
