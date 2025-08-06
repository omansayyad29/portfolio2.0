"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStore, FaComments, FaBriefcase, FaUsers, FaBuilding, FaBusAlt } from "react-icons/fa";


const projects = [
  
  {
    title: "Chat App",
    type: "Personal",
    icon: FaComments,
    stack: "MERN",
    link:"https://chat-app-virid-nine-44.vercel.app/"
  },
  {
    title: "ZENO(SAAS)",
    type: "Personal",
    icon: FaBriefcase,
    stack: "MERN",
    link:"https://zenoai-theta.vercel.app/"
  },
  {
    title: "Social Media App (coming soon)",
    type: "Personal",
    icon: FaUsers,
    stack: "MERN",
     link:"https://zenoai-theta.vercel.app/"
  },
  {
    title: "PCMC Gov Portal",
    type: "Company",
    icon: FaBuilding,
    link:"https://noncoredev.pcmcindia.gov.in/login",
    stack: "React + Java",
  },
   {
    title: "NMMC Gov Portal",
    type: "Company",
    icon: FaBuilding,
    stack: "Angular + Java",
    link:"https://uatapp.nmmconline.in/"
  },
  {
    title: "Vector UZ Transport App",
    type: "Company",
    icon: FaBusAlt,
    stack: "Angular + FastAPI",
    
  },
];

const cardVariants = (delay: number) => ({
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-950 py-16 sm:px-6 flex justify-center"
    >
      <div className="max-w-7xl w-full border-t border-neutral-800 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Projects
           
        </motion.h2>

        <div className="mb-14">
         
          <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 ">
            Personal Projects
          </h3>
          <h4 className="text-center mb-6">Click to see the projects.</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.type === "Personal")
              .map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    onClick={() => project.link && window.open(project.link, "_blank")}
                    variants={cardVariants(index * 0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 border-2 border-neutral-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
                  >
                    <Icon className="text-6xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.stack}</p>
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div>
          <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Company Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.type === "Company")
              .map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    variants={cardVariants(index * 0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 border-2 border-neutral-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
                  >
                    <Icon className="text-6xl text-green-500 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.stack}</p>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
