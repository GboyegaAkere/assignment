import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Head of Production at HBO",
    text: "Wayne exceeded all our expectations. The final product was stunning, and their ability to communicate and deliver on time made the whole process smooth and enjoyable.",
    logo: "/hbo.png"
  },
  {
    name: "Sarah Mitchell",
    role: "Lead UX Designer at Bose",
    text: "Working with Wayne was a game-changer. They took our vision and transformed it into something truly remarkable. The attention to detail and creativity is unmatched.",
    logo: "/bose.png"
  },
  {
    name: "David Rodriguez",
    role: "Senior Creative Director at Xbox",
    text: "I've collaborated with countless designers, but Wayne stands out for their innovative approach and seamless execution. Our project was elevated beyond expectations.",
    logo: "/xbox.png"
  },
  {
    name: "Jessica Parker",
    role: "Marketing Manager at Activision",
    text: "Wayne brought an incredible level of professionalism and creativity to our project. They understood our brand and delivered beyond what we had hoped for.",
    logo: "/activision.png"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-10 mt-5 px-10 mx-5 sm:mx-20 sm:py-5 border rounded-lg border-neutral-800 overflow-hidden">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-white mb-8 ">TESTIMONIALS</h2>

        <motion.div
          className="flex space-x-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs border border-neutral-800 rounded-xl p-4 h-full"
            >
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-neutral-500 mb-2">{item.role}</p>
                <hr className="border-gray-700" />
              </div>
              <p className="text-sm text-neutral-300 mt-3">"{item.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
