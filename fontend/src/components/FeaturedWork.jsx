import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import featuredProjects from "../assets/asset";

const FeaturedWork = () => {
  return (
    <section className="bg-black text-white px-4 py-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          <span className="text-neutral-400 italic">FEATURED WORK</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((project, index) => (
            <Link to={`/projects/${project.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 transition-shadow duration-300 ${
                  index > 1 ? "h-[150px]" : "h-[250px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-700 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-sm z-10">
                  <p className="font-semibold">{project.title}</p>
                  <p className="text-neutral-400 italic">{project.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
