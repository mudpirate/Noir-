import React from "react";
import { ArrowRight, Coffee } from "lucide-react";

const JoinUsFooter: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white relative z-20">
      {/* 
        Part 1: Visual Call-to-Action Section 
        Expects 'footer-bg.jpg' in public folder.
      */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="footer.jpg"
            onError={(e) => {
              // Fallback if user hasn't added the file yet
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2574&auto=format&fit=crop";
            }}
            alt="Coffee Society Background"
            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
        </div>

        {/* Center Floating Pixel Badge (Simulated) */}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Left: Big Heading */}
          <h2 className="font-mono text-4xl md:text-6xl max-w-md leading-tight text-white ">
            Join The
            <br />
            Coffee Society
          </h2>

          {/* Right: Description */}
          <div className="max-w-md border-t border-white/30 pt-6">
            <p className="font-sans text-sm md:text-base text-zinc-300  uppercase tracking-wider mb-4 leading-relaxed">
              Join us in a space where innovation meets tradition, and where
              coffee lovers connect over the shared joy of discovering what
              great coffee can be.
            </p>
          </div>
        </div>
      </div>

      {/* 
        Part 2: Main Footer Links & Newsletter
      */}
      <div className="w-full px-6 md:px-12 py-16 md:py-20 border-t border-zinc-900 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Coffee className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="font-condensed text-lg leading-none tracking-tight">
                  Noir
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 font-sans text-sm text-zinc-300">
              {[
                "Home",
                "About Us",
                "The Coffee",
                "Our Process",
                "Journal",
                "Shop",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Socials
            </h4>
            <nav className="flex flex-col gap-2 font-sans text-sm text-zinc-300">
              {["Instagram", "X (Twitter)", "Tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-white transition-colors w-fit"
                >
                  {social}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Newsletter
            </h4>
            <p className="font-sans text-sm text-zinc-300 max-w-xs">
              Get 20% off after subscribing to our newsletter
            </p>

            <div className="relative mt-2 max-w-xs group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-zinc-700 p-3 pr-10 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-zinc-900 text-[10px] md:text-xs text-zinc-600 uppercase tracking-wider font-sans">
          <div className="mb-4 md:mb-0">©2024 - The Coffee Society</div>
          <div className="mb-4 md:mb-0 hover:text-zinc-400 cursor-pointer">
            hello@coffeesociety.com
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-zinc-400">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JoinUsFooter;
