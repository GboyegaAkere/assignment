import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-black text-white pt-10">
      <motion.div
        className="max-w-7xl mx-auto w-full rounded-md p-6 md:p-10 flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="border border-gray-800 rounded-md p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            SAM <br className="block md:hidden" /> CREATES
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            className="border border-gray-800 rounded-md p-6 text-sm leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              I'm Samkeet Mehta, a <strong>3D artist</strong>, <strong>AR creator</strong>, and <strong>graphic designer</strong> with a background in computer engineering. I specialize in <strong>brand identity</strong>, <strong>CGI marketing</strong>, and <strong>augmented reality</strong>, with experience in social media management, packaging design, and product animation. I've worked on rebranding projects, XR presentations, and AR healthcare concepts using Unity. Passionate about blending creativity with technology, I strive to craft immersive digital experiences that push the boundaries of design and storytelling.
            </p>
          </motion.div>

          <motion.div
            className="border border-gray-800 rounded-md p-6 bg-neutral-900 flex items-center justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-gray-400 text-sm">Wanna get in touch?</p>
              <a href="mailto:samkeetm@gmail.com" className="text-white font-bold text-lg mt-2 inline-block">EMAIL ME</a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L6.75 17.25M17.25 17.25V6.75H6.75" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
