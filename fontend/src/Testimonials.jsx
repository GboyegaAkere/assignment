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

const Testimonials = () => {
  return (
    <section className="bg-black text-white px-4 py-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-8 italic">TESTIMONIALS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 h-full"
            >
              <p className="text-sm text-neutral-300 mb-4">"{item.text}"</p>
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-neutral-500 mb-2">{item.role}</p>
                <img src={item.logo} alt={item.name} className="h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
