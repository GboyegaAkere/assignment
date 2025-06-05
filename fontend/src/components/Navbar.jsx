import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 bg-black text-white border-b border-neutral-800"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-wide">
          SAMCREATES
        </div>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#about"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            ABOUT
          </a>
          <a
            href="#work"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            WORK
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            CONTACT
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;