"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    info: "+91 83780 36177",
    link: "tel:+918378036177",
    color: "text-green-500",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    info: "omansayyad29@gmail.com",
    link: "mailto:omansayyad29@gmail.com",
    color: "text-red-500",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    info: "linkedin.com/in/omansayyad",
    link: "https://www.linkedin.com/in/omansayyad",
    color: "text-blue-600",
  },
];

const cardVariants = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-950 py-16 sm:px-6 flex justify-center"
    >
      <div className="max-w-7xl w-full border-t border-neutral-800 pt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants(index * 0.2)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border-2 border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
              >
                <Icon className={`text-4xl mb-3 ${contact.color}`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{contact.info}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
