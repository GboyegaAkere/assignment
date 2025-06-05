import a from "../images/a.png"
import b from "../images/b.jpeg"
import c from "../images/c.webp"
import d from "../images/d.jpg"

const featuredProjects = [
  {
    slug: "project-one",
    title: "iPhone 16",
    subtitle: "Bold. Light. Beyond Vision.",
    description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: c,
    gallery: [b, a]  // these are already imported above
  },
  {
    slug: "project-two",
    title: "Kitsilano",
    subtitle: "Seaside Escape",
   description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: a,
    // gallery: [g1, g2] // use the imports
  },
  {
    slug: "project-three",
    title: "Printing Solutions",
    subtitle: "Modern 3D layout",
    description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: d,
    // gallery: [g1, g2]
  },
  {
    slug: "project-four",
    title: "Framer Xplore",
    subtitle: "Free Framer Components",
    description: "Immerse yourself in the cutting-edge of real estate design with this sleek and modern website template. Crafted to elevate any real estate agency's online presence, it offers an intuitive, user-friendly platform to showcase properties in style. Whether you're dealing with residential homes, commercial spaces, or luxury estates, this template combines visually striking layouts with effortless navigation. Highlight unique property features and engage clients with sophistication, positioning your agency as a standout leader in the competitive real estate market.",
    image: b,
    // gallery: [g1, g2]
  }
];

export default featuredProjects