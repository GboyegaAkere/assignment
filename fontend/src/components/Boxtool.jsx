import { motion } from "framer-motion";
import b from "../images/a.png";
import a from "../images/b.jpeg";
import c from "../images/c.webp";
import d from "../images/d.jpg";

const testimonials = [
  { image: b },
  { image: a },
  { image: c },
  { image: b },
  { image: d },
  { image: b },
  { image: a },
  { image: b },
  { image: b },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const Boxtool = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <h2 className="text-2xl font-semibold mb-10">Toolbox</h2>

        {/* Bordered container that clips content inside */}
        <div className="border border-neutral-800 rounded-md overflow-hidden py-6 px-4">
          <motion.div
            className="flex w-max space-x-6"
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
                className="min-w-[80px] max-w-[80px] h-[80px] bg-black border border-neutral-700 rounded flex items-center justify-center"
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
