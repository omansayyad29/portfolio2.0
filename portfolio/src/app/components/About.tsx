"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-950 px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto border-t border-neutral-800 py-20 items-center justify-center">
        <div className="text-center md:text-left">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            I&apos;m Oman Sayyad, a Full Stack Developer (MEAN + MERN) with a strong
            passion for creating modern and scalable applications.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            With hands-on experience in React, Angular, Node.js, and MongoDB, I
            focus on building clean UIs and powerful backend systems that
            deliver real results.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            I love solving problems, contributing to open source, and learning
            new technologies to stay ahead in this rapidly evolving field.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            I am currently pursuing my Master of Computer Applications (MCA)
            from MES IMCC College, Pune, further deepening my understanding of
            software development and system design.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/Oman_Photo.jpg"
            alt="Oman Sayyad"
            width={320}
            height={400}
            className="rounded-3xl shadow-lg max-h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
