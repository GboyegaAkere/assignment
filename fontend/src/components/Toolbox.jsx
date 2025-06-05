import { motion } from "framer-motion";
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiBlender, SiUnity, SiFramer } from "react-icons/si";
import { FaCube } from "react-icons/fa";

const tools = [
  { icon: <SiFigma size={32} />, label: "Figma" },
  { icon: <SiAdobeillustrator size={32} />, label: "Illustrator" },
  { icon: <SiAdobephotoshop size={32} />, label: "Photoshop" },
  { icon: <SiBlender size={32} />, label: "Blender" },
  { icon: <SiUnity size={32} />, label: "Unity" },
  { icon: <FaCube size={32} />, label: "3D" }
];

const Toolbox = () => {
  return (
    <section className="bg-black text-white px-4 py-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-10"
        >
          TOOLBOX
        </motion.h2>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center w-20 h-20"
            >
              {tool.icon}
              <span className="text-xs mt-2 text-neutral-400">{tool.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16"
        >
          <img
            src="/images/framer-banner.png"
            alt="Framer Xplore"
            className="w-full rounded-xl border border-neutral-800 shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Toolbox;
