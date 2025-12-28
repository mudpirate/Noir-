import React from "react";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Wong",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "The precision in their brewing process is unmatched. I've never tasted a house blend that balances acidity and body so perfectly. A daily essential for me.",
  },
  {
    id: 2,
    name: "Avril Song",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    rating: 5,
    text: "Noir Café isn't just a coffee shop; it's an experience. The atmosphere, the aroma, and the dedication to tradition make every visit special.",
  },
  {
    id: 3,
    name: "Jeanne Wood",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "I love the community vibe here. It's rare to find a place that takes its coffee so seriously while remaining so welcoming to newcomers.",
  },
];

const AboutTestimonials: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12">
      {/* 
        Part 1: About Us Section 
      */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="font-sans text-zinc-500 text-md uppercase tracking-widest mb-4">
            About us
          </span>
          <h2 className="font-sans text-2xl uppercase tracking-wider mb-4">
            Why we are the best
          </h2>

          <div className="flex flex-col gap-6 text-zinc-400 font-sans text-md  tracking-wider mb-4  leading-relaxed max-w-lg">
            <p>
              At Noir, we believe that coffee is more than just a beverage—it is
              a ritual, a craft, and a connector. Our journey began with a
              simple mission: to source the finest beans from sustainable farms
              and roast them to perfection.
            </p>
            <p>
              We employ a meticulous brewing process that honors the unique
              profile of each origin. From the volcanic soils of Indonesia to
              the high altitudes of Ethiopia, our beans tell a story of
              dedication and terroir.
            </p>
            <p>
              Beyond the cup, we strive to create a space where innovation meets
              comfort. Whether you are a connoisseur or a casual drinker, our
              expert baristas are here to guide you through a sensory journey
              unlike any other.
            </p>
          </div>

          <button className="group mt-10 flex items-center gap-4 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-full border border-zinc-800">
            <span className="font-condensed text-xs uppercase tracking-[0.2em] text-white">
              Read More
            </span>
            <ArrowRight
              size={16}
              className="text-zinc-400 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Right: Creative Image Layout */}
        <div className="w-full lg:w-1/2 flex gap-4 h-[400px] md:h-[500px]">
          {/* Image 1: Portafilter - Custom Border Radius (Top Right & Bottom Left rounded) */}
          <div className="w-1/2 h-full overflow-hidden rounded-tr-[100px] rounded-bl-[100px] border border-zinc-800/50">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
              alt="Barista brewing espresso"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 2: Beans - Custom Border Radius (Top Left & Bottom Right rounded) */}
          <div className="w-1/2 h-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] border border-zinc-800/50 mt-12 lg:mt-24">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2561&auto=format&fit=crop"
              alt="Coffee beans detail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* 
        Part 2: Testimonials Section 
      */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-sans text-zinc-500 text-md uppercase tracking-widest mb-4">
            Testimonial
          </span>
          <h2 className="font-condensed  md:text-5xl font-sans text-2xl uppercase tracking-wider mb-4 text-white">
            What our buyers say
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col gap-6 hover:border-zinc-700 transition-colors"
            >
              {/* User Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-800"
                />
                <div className="flex flex-col">
                  <h4 className="font-condensed text-lg text-white tracking-wide">
                    {item.name}
                  </h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="font-sans tracking-wider text-sm mb-4">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
