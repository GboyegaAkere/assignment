import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import featuredProjects from "../assets/asset";

const FeaturedWork = () => {
  return (
    <section className="bg-black text-white py-10 ">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column: Title Card + App Navigation Card */}
          <div className="flex flex-col gap-4">
            {/* FEATURED WORK title card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-6 h-[80px] flex items-center"
            >
              <h2 className="text-3xl font-bold text-white italic">
                FEATURED WORK
              </h2>
            </motion.div>

            {/* App Navigation card (shorter height) */}
            {featuredProjects[0] && (
              <Link to={`/projects/${featuredProjects[0].slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 h-[170px] transition-shadow duration-300"
                >
                  <img
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-700 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 text-sm z-10">
                    <p className="font-semibold">{featuredProjects[0].title}</p>
                    <p className="text-neutral-400 italic">{featuredProjects[0].subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            )}
          </div>

          {/* Right Column: Keep all other cards untouched */}
          {featuredProjects.slice(1).map((project, index) => (
            <Link to={`/projects/${project.slug}`} key={index + 1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 h-[250px] transition-shadow duration-300"
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
