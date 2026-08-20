"use client";

import React from "react";
import { motion } from "framer-motion";

interface ValueItem {
  title: string;
  description: string;
}

const coreValues: ValueItem[] = [
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and strong engineering ethics.",
  },
  {
    title: "Safety",
    description: "We prioritize human life and asset protection every time.",
  },
  {
    title: "Excellence",
    description:
      "We deliver high-quality engineering solutions\naligned with international standards.",
  },
  {
    title: "Innovation",
    description:
      "We adopt modern technologies and advanced\ninspection methodologies.",
  },
  {
    title: "Reliability",
    description:
      "We ensure consistent, accurate, and dependable\nservice delivery.",
  },
  {
    title: "Technical Expertise",
    description:
      "We are supported by a highly skilled and experienced team of professionals ensuring excellent execution.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative w-full bg-[#0F2D5D] text-white py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(102, 102, 102, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(102, 102, 102, 0.2) 1px, transparent 1px)
            `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1050px] mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <p className="text-[#FD550A] text-[16px] font-montserrat tracking-wide mb-1">
            Core Values
          </p>

          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-white text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight mb-2"
          >
            The Way We Engineer
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-[3px] bg-[#FD550A] rounded-full origin-left"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col border-t border-[#FFFFFF]/40 pt-6"
            >
              <h3
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-white text-lg sm:text-xl font-bold mb-2 leading-snug"
              >
                {value.title}
              </h3>
              <p className="text-[#FFFFFF] text-[11px] font-montserrat leading-relaxed whitespace-pre-line">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
