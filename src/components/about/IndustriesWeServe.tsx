"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustriesWeServe() {
  const categories = [
    {
      title: "Energy & Process Industries",
      items: [
        "Oil & Gas",
        "Petrochemical Plants",
        "Fertilizer & Chemical Industries",
        "Power Generation",
        "Energy Infrastructure",
      ],
    },
    {
      title: "Manufacturing & Production",
      items: [
        "Manufacturing Industries",
        "Industrial Processing Facilities",
        "Food & Beverage Industry",
        "Pharmaceutical & Healthcare Industry",
      ],
    },
    {
      title: "Infrastructure & Utilities",
      items: [
        "Cement & Construction Industry",
        "Water & Wastewater Facilities",
      ],
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-left mb-12"
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="text-[#FD550A] text-xs font-semibold uppercase tracking-wider block mb-1.5"
        >
          Industry Coverage
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontFamily: "var(--font-source-serif)" }}
          className="text-[#01286D] text-3xl sm:text-4xl font-bold mb-3"
        >
          Industries We Serve
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
          className="text-[#434343] text-xs sm:text-sm leading-relaxed max-w-2xl"
        >
          DAIS supports industries where equipment safety, operational continuity, accurate
          measurement, regulatory compliance, and asset reliability are critical.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            style={{ perspective: 1000 }}
            className="bg-[#E9F3FF] rounded-2xl border border-[#434343]/15 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                style={{ fontFamily: "var(--font-source-serif)" }}
                className={`text-[#01286D] text-xl font-bold mb-2 group-hover:text-[#FD550A] transition-colors duration-300 ${
                  idx === 1 ? "whitespace-nowrap" : ""
                }`}
              >
                {cat.title}
              </motion.h3>
              <div className="w-12 h-0.5 pt-0 bg-[#FD550A] mb-4" />
              <ul className="space-y-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                {cat.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#434343]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD550A] shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}