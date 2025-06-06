/** @format */

import { motion } from "framer-motion";
import ceo from "../images/ceo.png"

export function Hero() {
  return (
    <section className="bg-black text-white py-16 mt-8">
      <motion.div
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Wrapper to allow image card to sit beside the title card on md+ */}
        <div className="relative flex md:flex-row flex-col gap-4 items-start">
          {/* Title Card */}
          <motion.div
            className="w-full md:w-[70%] lg:w-[65%] h-[247px] border border-gray-800 rounded-md p-10 text-left flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-center md:text-8xl font-bold ">
              SAM <br className="block" /> CREATES
            </h1>
          </motion.div>

          {/* Image Placeholder Card - hidden on mobile */}
          <motion.div
            className="hidden md:block w-[30%] lg:w-[35%] h-[247px] border border-gray-800 rounded-md bg-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* You can place an image here later */}
            <img src={ceo} className="w-full h-[247px]" alt="" />
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Description Card */}
          <motion.div
  className="border border-gray-800 rounded-md p-6 text-sm leading-relaxed"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <p>
    I'm Samkeet Mehta, a <strong>3D artist</strong>,{" "}
    <strong>AR creator</strong>, and <strong>graphic designer</strong>{" "}
    with a background in computer engineering. I specialize in{" "}
    <strong>brand identity</strong>, <strong>CGI marketing</strong>,
    and <strong>augmented reality</strong>, with experience in social
    media management, packaging design, and product animation. I've
    worked on rebranding projects, XR presentations, and AR healthcare
    concepts using Unity. Passionate about blending creativity with
    technology, I strive to craft immersive digital experiences that
    push the boundaries of design and storytelling.
  </p>
</motion.div>


          {/* Contact Card */}
          <motion.div
  className="h-[247px] border border-gray-800 rounded-md p-6 bg-neutral-900 flex justify-between items-start"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  {/* Left Side: Text */}
  <div className="flex flex-col">
    <p className="text-gray-400 text-sm">Wanna get in touch?</p>
    <a
      href="mailto:samkeetm@gmail.com"
      className="text-white font-bold text-3xl mt-30"
    >
      EMAIL ME
    </a>
  </div>

  {/* Right Side: Icon */}
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L6.75 17.25M17.25 17.25V6.75H6.75"
      />
    </svg>
  </div>
</motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
