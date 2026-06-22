import { useState } from "react";
import HeroSection from "@/sections/HeroSection";
import AltHeroSection from "@/sections-alt/HeroSection";
import Navbar from "@/widgets/Navbar";
import "./App.css";

function App() {
  const [isProfeshMode, setIsProfeshMode] = useState(true);
  return (
    <>
      <div className="section bg-zinc-900 min-h-screen text-white font-inter">
        <Navbar
          isProfeshMode={isProfeshMode}
          setIsProfeshMode={setIsProfeshMode}
        />
        {isProfeshMode ? <HeroSection /> : <AltHeroSection />}
      </div>
    </>
  );
}

export default App;
