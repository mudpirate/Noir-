import React, { useEffect, useRef } from "react";
import {
  ShoppingBag,
  ArrowUpRight,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-zinc-900 text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="background.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
            alt="Coffee aesthetic"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-12 pt-24 md:pt-12">
        {/* Top Header Section */}
        <div className="w-full flex justify-center items-center relative border-t border-white/30 pt-4 hidden sm:flex">
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/80 text-center max-w-xs md:max-w-md font-sans">
            We wanted to create a cafe, which is solely lacking in the city.
            Real beans, real passion.
          </p>
        </div>

        {/* Center Chaotic Layout */}
        <div className="flex-1 relative flex items-center justify-center w-full">
          {/* Floating 'About' Script - Responsive Positioning */}
          <div className="absolute top-0 left-2 sm:left-[10%] md:top-[15%] md:left-[15%] z-20 pointer-events-none">
            <div className="flex flex-col items-start md:items-center">
              <span className="font-sans text-[8px] md:text-[10px] tracking-widest uppercase mb-[-5px] md:mb-[-10px] ml-2 md:ml-0">
                About
              </span>
              <h2 className="font-script text-5xl sm:text-6xl md:text-8xl transform -rotate-12 drop-shadow-lg opacity-90">
                Noir
              </h2>
            </div>
          </div>

          {/* Main CTA: Show The Menu */}
          <div className="relative z-30 group cursor-pointer text-center mt-[-10%] md:mt-0">
            <div className="font-script text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 transform -translate-y-2 md:-translate-y-4 translate-x-4">
              Discover
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter group-hover:scale-105 transition-transform duration-500">
                Show
                <br />
                The
                <br />
                <span className="italic font-light text-white/90">Menu</span>
              </h1>
              <p className="mt-4 text-[9px] sm:text-[10px] uppercase tracking-widest max-w-[140px] md:max-w-[200px] text-center border-t border-white/50 pt-2 opacity-80">
                Take your first sip into a new world with us
              </p>
            </div>
          </div>

          {/* Right Side Vertical Text - Hidden on Mobile */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-4 writing-vertical">
              <div className="h-24 bg-white/50 mx-auto my-4"></div>
              <span className="font-script text-4xl text-white/80 rotate-90 whitespace-nowrap mb-12 italic">
                We believe coffee is for everyone
              </span>
            </div>
          </div>

          {/* Rotating Badge - Hidden on very small screens, Scaled on tablet */}
          <div className="absolute left-0 bottom-10 md:left-[10%] md:top-[50%] z-20 hidden sm:block transform scale-75 md:scale-100 origin-bottom-left">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="text-[9px] uppercase font-bold tracking-[2px] fill-white">
                    <textPath href="#circlePath" startOffset="0%">
                      • 10% Discount on all beans • Subscription System •
                    </textPath>
                  </text>
                </svg>
              </div>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex justify-between items-end relative pb-4 md:pb-0">
          {/* Bottom Left Contact Script */}
          <div className="flex flex-col items-start max-w-[150px] md:max-w-[200px]">
            <h3 className="font-script text-4xl sm:text-5xl md:text-7xl mb-1 md:mb-2 transform -rotate-6">
              Contact
            </h3>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-wider leading-relaxed text-white/80 pl-2 md:pl-4 border-l border-white/30">
              We are open every day
              <br />
              From 8 to 22.
            </p>
          </div>

          {/* Bottom Center Account/Cart - Hidden on Mobile */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-6">
            <span className="font-script text-3xl">Account</span>
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-white transition-colors duration-300">
                <span className="text-[10px] uppercase tracking-widest">
                  My Cart
                </span>
              </div>
              <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                0
              </div>
            </div>
          </div>

          {/* Bottom Right Socials */}
          <div className="flex items-center gap-4 sm:gap-6 pb-2">
            <a href="#" className="hover:text-white/70 transition-colors">
              <Instagram size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              <Send size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              <Facebook size={18} className="sm:w-5 sm:h-5" />
            </a>
            <span className="text-[10px] uppercase tracking-widest opacity-60 ml-2 hidden md:block rotate-180 writing-vertical">
              Est. 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
