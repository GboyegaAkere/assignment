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
    <section className="bg-black text-white py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <h3 className="text-md font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <p className="text-sm font-medium text-white">AVAILABLE FOR FREELANCE</p>
          </div>
          <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
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
              rows={4}
              className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
            />
            <select
              className="w-full bg-neutral-800 text-white p-2 rounded-md text-sm"
            >
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
    </section>
  );
};

export default Expertise;
