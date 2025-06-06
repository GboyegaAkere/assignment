import { motion } from "framer-motion";
import b from "../images/a.png";
import a from "../images/b.jpeg";
import c from "../images/c.webp";
import d from "../images/d.jpg";
import blender from '../images/blender.png'
import react from "../images/react.png"
import photo from "../images/photo.jpg"
import figma from "../images/figma.webp"
import notion from "../images/notion.png"

const testimonials = [
  { image: blender },
  { image: react },
  { image: photo },
  { image: figma},
  { image: notion },
  { image: blender },
  { image: react },
  { image: figma },
  { image: notion },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const Boxtool = () => {
  return (
    <section className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        {/* Bordered container with title and cards */}
        <div className="border border-neutral-800 rounded-md overflow-hidden py-6 px-4">
          <h2 className="text-4xl font-bold text-white mb-6 px-2">Toolbox</h2>

          <motion.div
            className="flex w-max space-x-6 border-l border-gray-100"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[80px] max-w-[80px] h-[80px] border rounded border-neutral-800 overflow-hidden flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={`tool-${index}`}
                  className="w-[50px] h-[50px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Boxtool;
