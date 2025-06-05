import { motion } from "framer-motion";
import b from "../images/a.png"
import a from "../images/b.jpeg"
import c from "../images/c.webp"
import d from "../images/d.jpg"

const testimonials = [
   {
     image: b
   },

   {
     image: a
   },

   {
     image: c
   },
    {
     image: b
   },

   {
     image: d
   },
    {
     image: b
   },
   {
     image: a
   },
   {
     image: b
   },
   {
     image: b
   },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const Toolbox = () => {
 return (
    <section className="bg-black py-10 px-10 mx-5 sm:mx-20 sm:py-5  border h-[50%] border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl font-semibold mb-10 text-left">Toolbox</h2>
        <div className="flex justify-center">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
          >
            {duplicatedTestimonials.map((item, index) => (
              <div key={index} className="min-w-[80px] max-w-[80px] h-[80px] mx-3 bg-black border border-neutral-700 rounded-sm flex items-center justify-center">
                <img src={item.image} alt="logo" className="w-[50px] h-[50px] object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
