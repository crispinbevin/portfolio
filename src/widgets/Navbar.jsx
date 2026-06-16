import { useEffect, useState } from "react";
import HoverLink from "../components/HoverLink";
import resume from "../assets/crispinResume.pdf";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`navbar max-sm:p-3 p-5 flex justify-end items-center ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="elements flex gap-8 items-center">
        <div className="hover:cursor-pointer" onClick={scrollToSkills}>
          <HoverLink text="Skills" />
        </div>
        <div className="">
          <a
            className="flex gap-3 bg-white text-black font-bold rounded-2xl px-6 py-3 hover:transform hover:translate-y-0.5 hover:translate-x-0.5  hover:shadow-lg hover:shadow-accent hover:cursor-pointer transition-all duration-300"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
