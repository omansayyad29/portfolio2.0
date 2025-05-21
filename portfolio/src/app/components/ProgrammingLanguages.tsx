"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiJavascript, SiPython, SiPhp, SiTypescript } from "react-icons/si";
import { DiJava } from "react-icons/di";

const ProgrammingLanguages = () => {
  const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  });

  const languages = [
    { Icon: SiPython, label: "Python", color: "text-blue-500" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
    { Icon: DiJava, label: "Java", color: "text-orange-400" },
    { Icon: SiPhp, label: "PHP", color: "text-indigo-500" },
  ];

  return (
    <section
      id="programming-languages"
      className="bg-gray-100 dark:bg-gray-950 sm:px-6 py-16 flex justify-center"
    >
      <div className="border-t max-w-7xl w-full border-neutral-800 pt-16 flex flex-col items-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2 }}
          className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Programming Languages
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {languages.map(({ Icon, label, color }, index) => (
            <motion.div
              key={label}
              variants={iconVariants(2 + index * 0.4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <Icon className={`text-6xl sm:text-7xl ${color}`} title={label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammingLanguages;
