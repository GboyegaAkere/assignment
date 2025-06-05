import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "iPhone 16",
    description: "Bold. Light. Beyond Vision.",
    image: "/images/iphone.png"
  },
  {
    title: "Kitsilano",
    description: "Seaside Escape",
    image: "/images/kitsilano.png"
  },
  {
    title: "Printing Solutions",
    description: "Modern 3D layout",
    image: "/images/print.png"
  },
  {
    title: "Framer Xplore",
    description: "Free Framer Components",
    image: "/images/xplore.png"
  }
];

const FeaturedWork = () => {
  return (
    <section className="bg-black text-white px-4 py-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          <span className="text-neutral-400 italic">FEATURED WORK</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 ${
                index > 1 ? "h-[150px]" : "h-[250px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-sm">
                <p className="font-semibold">{project.title}</p>
                <p className="text-neutral-400 italic">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
