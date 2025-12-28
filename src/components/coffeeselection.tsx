import React from "react";
import { Coffee } from "lucide-react";

const products = [
  {
    id: 1,
    ratio: "20R : 80A",
    title: "Toraja Highland Pride",
    description:
      "Earthy and bold with dark chocolate and spice notes, a true reflection of Toraja's coffee heritage.",
    bgImage:
      "https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?q=80&w=1974&auto=format&fit=crop", // Misty mountains
    accentColor: "text-emerald-900",
  },
  {
    id: 2,
    ratio: "10R : 90A",
    title: "Sindoro Peak Select",
    description:
      "Bright and aromatic with citrus and floral hints, crafted from the volcanic slopes of Mount Sindoro.",
    bgImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop", // Sunny fields
    accentColor: "text-amber-900",
  },
  {
    id: 3,
    ratio: "40R : 60A",
    title: "Colonial Heritage",
    description:
      "Smooth and layered with nutty sweetness and gentle smokiness, bridging tradition and modern taste.",
    bgImage:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2561&auto=format&fit=crop", // Organic texture
    accentColor: "text-stone-900",
  },
];

const CoffeeSelection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F2] text-zinc-900 py-24 px-6 md:px-12 w-full relative z-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <h2 className="font-condensed text-4xl md:text-5xl uppercase leading-tight tracking-wide max-w-xs">
          Our Coffee
          <br />
          Selection
        </h2>

        <div className="flex flex-col items-start gap-8 max-w-md">
          <p className="font-sans text-sm text-zinc-600 leading-relaxed">
            Discover a curated selection of our signature brews, from timeless
            blends to innovative creations, each crafted to highlight distinct
            flavor profiles and elevate your coffee experience.
          </p>
          <button className="border border-black px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
            See All Coffee
          </button>
        </div>
      </div>

      {/* Thin Divider Line */}
      <div className="w-full h-[1px] bg-zinc-300 mb-20 max-w-7xl mx-auto" />

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Top Meta Data */}
            <span className="font-sans text-[10px] tracking-widest uppercase text-zinc-500 mb-3">
              (House Blend • {product.ratio})
            </span>

            {/* Title */}
            <h3 className="font-condensed text-2xl md:text-3xl uppercase tracking-normal mb-8 text-center group-hover:opacity-70 transition-opacity">
              {product.title}
            </h3>

            {/* Image Composition Area */}
            <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden bg-zinc-200">
              {/* Background Landscape Image */}
              <img
                src={product.bgImage}
                alt="Coffee Origin Landscape"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
              />

              {/* Floating Bag Mockup - Creative Simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-56 bg-zinc-100 shadow-2xl transform group-hover:-translate-y-4 transition-transform duration-500 rounded-sm overflow-hidden flex flex-col">
                  {/* Bag Texture Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-100 to-zinc-200 opacity-80" />

                  {/* Bag Content */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between items-center text-center">
                    <div className="flex items-center gap-1 opacity-60">
                      <Coffee size={12} />
                      <span className="text-[6px] uppercase tracking-widest">
                        Noir Society
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center mb-1">
                        <span className="text-[8px] font-bold">N</span>
                      </div>
                      <h4 className="font-condensed text-lg leading-none uppercase">
                        {product.title.split(" ")[0]}
                      </h4>
                      <span className="text-[6px] uppercase tracking-widest border-t border-black/20 pt-1 mt-1">
                        Whole Bean
                      </span>
                    </div>

                    <div className="w-full flex justify-between text-[6px] font-mono text-zinc-500 uppercase">
                      <span>250g</span>
                      <span>Med Roast</span>
                    </div>
                  </div>
                  {/* Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Bottom Description */}
            <p className="font-sans text-xs text-zinc-600 text-center leading-relaxed px-4 max-w-xs">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeSelection;
