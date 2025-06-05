import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="w-full fixed top-0 left-0 z-50 bg-black text-white border-b border-neutral-800"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold tracking-wide">
            SAMCREATES
          </Link>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:underline underline-offset-4 transition-all duration-300">
              ABOUT
            </a>
            <a href="#work" className="hover:underline underline-offset-4 transition-all duration-300">
              WORK
            </a>
            <a href="#contact" className="hover:underline underline-offset-4 transition-all duration-300">
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Fixed Mobile Menu Panel (not full screen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[64px] left-0 right-0 z-40 bg-black text-white px-6 py-6 shadow-xl border-b border-neutral-800 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                ABOUT
              </a>
              <a href="#work" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                WORK
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
