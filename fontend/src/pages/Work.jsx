import { useParams } from "react-router-dom";
import { useState } from "react";
import featuredProjects from "../assets/asset";

const Work = () => {
  const { id } = useParams();
  const project = featuredProjects.find(p => p.slug === id);

  const [mainImage, setMainImage] = useState(project?.image); // initial main image

  if (!project) return <p className="text-white">Project not found</p>;

  return (
    <section className="bg-black text-white py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold uppercase mb-1">{project.title}</h1>
        <p className="text-neutral-400 mb-8">{project.subtitle}</p>

        {/* Main image */}
        <img
          src={mainImage}
          alt={project.title}
          className="w-full rounded-md mb-6 transition-all duration-300"
        />

        {/* Description */}
        <div className="bg-neutral-900 p-4 text-sm border border-neutral-800 rounded-md mb-8">
          <p>{project.description}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              onClick={() => setMainImage(img)}
              className="rounded-md w-full h-[200px] object-cover border border-neutral-800 cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
