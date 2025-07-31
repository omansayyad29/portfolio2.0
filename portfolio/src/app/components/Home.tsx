"use client";

import React from "react";
import { motion } from "framer-motion";
import { TbBrandFirebase } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io5";

const Home = () => {
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

  const techStack = [
    { Icon: RiReactjsLine, label: "React", color: "text-cyan-500" },
    { Icon: IoLogoAngular, label: "Angular", color: "text-red-500" },
    { Icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, label: "Express", color: "text-gray-500" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { Icon: TbBrandFirebase, label: "Firebase", color: "text-orange-500" },
    { Icon: SiPostgresql, label: "Postgresql", color: "text-blue-500" }
  ];

  return (
    <section
      id="home"
      className="bg-gray-100 dark:bg-gray-950 px-4 sm:px-6 py-16 min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="flex justify-center items-center w-full">
          <motion.img
            src="/OmanSayyadProfile.jpg"
            alt="Oman Sayyad"
            className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Hello, I&apos;m Oman Sayyad
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Full Stack Developer (MEAN + MERN)
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            I&apos;m a Full Stack Developer passionate about building modern,
            scalable web applications.
          </motion.p>
        </div>

        {/* Technologies Section */}
        <div className="md:col-span-2 border-t border-neutral-800 pt-16">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.2 }}
            className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
          >
            Technologies
          </motion.h2>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {techStack.map(({ Icon, label, color }, index) => (
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
      </div>
    </section>
  );
};

export default Home;
