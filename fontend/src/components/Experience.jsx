import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AR Developer & 3D Artist Intern",
    company: "Arexa, Mumbai",
    date: "01 May, 2024 – 31st July, 2024",
    points: [
      "Development of the AR, VR, MR & CGI Projects.",
      "Development of the 3D Models & XR experiences for clients.",
      "Collaboratively worked with the team.",
      "Worked closely on Asset Development.",
    ],
  },
  {
    title: "Creative Design Intern",
    company: "Humane Space, Mumbai",
    date: "01 Oct, 2024 – 31st December, 2024",
    points: [
      "Designed market-focused packaging for the brand Maadico, improving product appeal.",
      "Created interactive 3D models for the agency’s website to enhance user engagement.",
      "Developed impactful presentation decks for XR meetups to showcase innovative ideas.",
    ],
  },
  {
    title: "Creative Design Intern",
    company: "Treblel, Mumbai",
    date: "01 Jan, 2025 – 21st February, 2025",
    points: [
      "Assisted in motion projects, focusing on logo typography, color theory and visual identity.",
      "Designed posters, wallpapers, frames, and social media posts for various client brands.",
      "Applied design principles to create visually appealing and effective marketing materials.",
      "Collaborated with the design team to develop creative concepts aligned with client needs.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-black text-white py-16">
  <motion.div
    className="max-w-7xl mx-auto w-full px-6 md:px-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 inline-block">
      EXPERIENCE
    </h2>

    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="text-lg font-semibold">{exp.title}</h3>
          <p className="text-sm text-gray-400">{exp.company}</p>
          <p className="text-xs text-gray-500 mb-4">{exp.date}</p>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

  );
};

export default Experience;
