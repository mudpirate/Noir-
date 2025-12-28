import React from "react";
import { Diamond, Home, Users } from "lucide-react";

const Philosophy: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 w-full">
      {/* Intro Text Block */}
      <div className="max-w-6xl mx-auto mb-24 md:mb-32">
        <p className="text-xl md:text-3xl lg:text-4xl font-sans font-light  uppercase tracking-wider mb-4 leading-relaxed text-center text-zinc-100">
          At <span className="font-normal">Noir Café</span>, precision,
          tradition, and community come together to define our vision of modern
          coffee culture, delivering brews that are crafted with excellence,
          inspired by heritage, and shared with people who value the art of
          coffee.
        </p>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full h-[1px] bg-zinc-800 mb-16 max-w-7xl mx-auto" />

      {/* Three Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 max-w-7xl mx-auto">
        {/* Column 1: Precision */}
        <div className="flex flex-col items-start group cursor-default">
          <div className="mb-6 text-white group-hover:text-zinc-400 transition-colors duration-300">
            {/* Simulating pixel/geometric icon style with Lucide */}
            <Diamond size={36} strokeWidth={1.5} className="fill-white/10" />
          </div>
          <h3 className="font-sans text-2xl uppercase tracking-wider mb-4">
            Crafted with
            <br />
            Precision
          </h3>
          <p className="font-sans text-sm text-zinc-500 leading-7 max-w-sm">
            Every brew is meticulously developed in our brewery, where advanced
            techniques and quality control ensure consistency, balance, and
            excellence in every cup.
          </p>
        </div>

        {/* Column 2: Tradition */}
        <div className="flex flex-col items-start group cursor-default">
          <div className="mb-6 text-white group-hover:text-zinc-400 transition-colors duration-300">
            <Home size={36} strokeWidth={1.5} className="fill-white/10" />
          </div>
          <h3 className="font-sans text-2xl uppercase tracking-wider mb-4">
            Inspired by
            <br />
            Tradition
          </h3>
          <p className="font-sans text-sm text-zinc-500 leading-7 max-w-sm">
            We respect the timeless rituals of coffee culture while refining
            them through modern innovation, creating a bridge between heritage
            and contemporary taste.
          </p>
        </div>

        {/* Column 3: Community */}
        <div className="flex flex-col items-start group cursor-default">
          <div className="mb-6 text-white group-hover:text-zinc-400 transition-colors duration-300">
            <Users size={36} strokeWidth={1.5} className="fill-white/10" />
          </div>
          <h3 className="font-sans text-2xl uppercase tracking-wider mb-4">
            Community of
            <br />
            Brewers
          </h3>
          <p className="font-sans text-sm text-zinc-500 leading-7 max-w-sm">
            Noir Café is not only about great coffee, but about building a
            culture — a place where enthusiasts, professionals, and casual
            drinkers connect through the craft of brewing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
