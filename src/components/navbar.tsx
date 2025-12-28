import React, { useState } from "react";
import { Coffee } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Shop"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 text-white mix-blend-difference">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer group relative z-50">
          <Coffee className="w-5 h-5 group-hover:text-zinc-400 transition-colors" />
          <span className="font-condensed text-xl uppercase tracking-tighter font-bold">
            Noir
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item}
              className="text-xs uppercase tracking-[0.2em] font-sans hover:text-zinc-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-xs uppercase tracking-widest relative z-50 hover:text-zinc-400 transition-colors"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item, index) => (
            <button
              key={item}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="text-2xl uppercase tracking-[0.2em] font-light text-white hover:text-zinc-400 transition-colors transform hover:scale-110 duration-300"
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
