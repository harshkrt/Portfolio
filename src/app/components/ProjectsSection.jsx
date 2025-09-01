"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "This is the prtfolio website you're viewing now",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshkrt/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Child Vaccination Tracking System",
    description: "Made in React(Vite) and Socket.io",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshkrt/child-vaccination-tracking-system",
    previewUrl: "https://child-vaccination-tracking-system.vercel.app",
  },
  {
    id: 3,
    title: "TenHours",
    description: "e-commerce website for buying eco-friendly sanitary pads",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshkrt/tenHours",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Chain Reaction game",
    description: "Made using Pygame and concept of graph theory",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/harshkrt/Chain-Reaction",
    previewUrl: "/",
  },
  //   {
  //   id: 5,
  //   title: "Crowdfunding platform",
  //   description: "",
  //   image: "",
  //   tag: ["All"],
  //   gitUrl: "",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
