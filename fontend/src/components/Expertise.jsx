import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const expertise = [
  {
    title: "Branding",
    description:
      "Crafting user-centered designs that blend creativity with functionality. I specialize in creating intuitive, visually appealing interfaces that enhance user experience and reflect brand identity across both web and mobile platforms."
  },
  {
    title: "3D Design",
    description:
      "Bringing ideas to life with immersive 3D models and visualizations. From concept to creation, I specialize in crafting realistic, high-quality 3D assets for product visualization, animation, and interactive experiences, pushing the boundaries of digital creativity."
  },
  {
    title: "Web Development",
    description:
      "Transforming designs into fully functional, high-performing websites and apps. My expertise lies in building responsive, scalable, and secure digital experiences using the latest web technologies to ensure seamless performance across devices."
  }
];

const Expertise = () => {
  return (
    <section className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 grid md:grid-cols-2 gap-10">

        {/* Left Column - Expertise Cards + Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 rounded-xl p-6 shadow-md"
        >
          <h2 className="text-3xl font-semibold mb-6 border-b border-neutral-800 inline-block">
            EXPERTISE
          </h2>

          {expertise.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <h3 className="text-md font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
              {index < expertise.length - 1 && <hr className="mt-4 border-neutral-800" />}
            </div>
          ))}
        </motion.div>

        {/* Right Column - Availability + Contact */}
        <div className="flex flex-col gap-4">
          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-md flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <p className="text-xl sm:text-3xl font-semibold text-center text-white">
              AVAILABLE FOR FREELANCE
            </p>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md min-h-[500px]"
          >
            <h2 className="text-3xl font-semibold mb-4">CONTACT</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                defaultValue="Samkeet Mehta"
                className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                defaultValue="samkeetm@gmail.com"
                className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
              />
              <textarea
                placeholder="Tell me more about your project..."
                rows={3}
                className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
              />
              <select className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm">
                <option>Select...</option>
                <option value="500">$500+</option>
                <option value="1000">$1000+</option>
                <option value="5000">$5000+</option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-neutral-200 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
