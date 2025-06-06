import { motion } from "framer-motion";

const MotivationCertifications = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-neutral-800 rounded-xl p-6 bg-neutral-900"
        >
          <h2 className="text-2xl font-semibold mb-4">MOTIVATION</h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Driven by a passion for innovative design and a commitment to delivering high-quality work, I find motivation in the challenges each project presents.
            Every pixel, every interaction, every piece of code tells a story, and I am fueled by the opportunity to craft experiences that not only captivate but also solve real-world problems.
            For me, it's about pushing boundaries, embracing creativity, and continuously evolving to stay ahead in an ever-changing digital landscape.
            Each project is a new canvas, and my goal is always the same—to inspire, engage, and make a lasting impact.
          </p>
          <p className="mt-4 italic text-neutral-500">Wayne Kirkwood</p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-neutral-800 rounded-xl p-6 bg-neutral-900"
        >
          <h2 className="text-2xl font-semibold mb-4">CERTIFICATIONS</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-base">Awwwards – Site Of The Day</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Recognized for outstanding creativity, design, and user experience for a cutting-edge website created for a major brand, showcasing excellence in digital design.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base">Webby Awards – Best Portfolio</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Awarded for innovation and exceptional design in crafting a personal portfolio website that demonstrates both technical skill and aesthetic vision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotivationCertifications;
