import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Philosophy from "./components/philosphy";
import CoffeeSelection from "./components/coffeeselection";
import JoinUsFooter from "./components/joinus";
import AboutTestimonials from "./components/abouttest";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />

      {/* 
        Step 1: Hero Section 
        Video background landing screen.
      */}
      <Hero />

      <Philosophy />
      <CoffeeSelection />
      <AboutTestimonials />
      <JoinUsFooter />
    </div>
  );
};

export default App;
