"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description: (
        <>
          We operate with honesty, transparency, and strong <br />
          engineering ethics.
        </>
      ),
    },
    {
      title: "Safety",
      description: (
        <>
          We prioritize human life and asset protection every <br />
          time.
        </>
      ),
    },
    {
      title: "Excellence",
      description: (
        <>
          We deliver high-quality engineering solutions <br />
          aligned with international standards.
        </>
      ),
    },
    {
      title: "Innovation",
      description: (
        <>
          We adopt modern technologies and advanced <br />
          inspection methodologies.
        </>
      ),
    },
    {
      title: "Reliability",
      description: (
        <>
          We ensure consistent, accurate, and dependable <br />
          service delivery.
        </>
      ),
    },
    {
      title: "Technical Expertise",
      description: (
        <>
          We are supported by a highly skilled and <br />
          experienced team of professionals ensuring <br />
          excellent execution.
        </>
      ),
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-left mb-10"
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="text-[#FD550A] text-xs font-semibold tracking-wider block mb-1.5"
        >
          Core Values
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontFamily: "var(--font-source-serif)" }}
          className="text-[#01286D] text-3xl sm:text-4xl font-bold mb-3"
        >
          The Way We Engineer
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ originX: 0 }}
          className="w-12 h-0.5 bg-[#FD550A] mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="text-[#434343] text-xs sm:text-sm leading-relaxed"
        >
          Our services are adapted to client requirements, operating
          environments, equipment
          <br className="hidden sm:inline" />
          conditions, and applicable technical standards.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            style={{ perspective: 1000 }}
            className="bg-white rounded-xl border border-[#434343]/20 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all text-left flex flex-col justify-between group"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-[#01286D] text-lg sm:text-xl font-bold mb-3 group-hover:text-[#FD550A] transition-colors duration-300"
              >
                {item.title}
              </motion.h3>
              <p
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[#434343] text-xs sm:text-[11px] leading-relaxed"
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}