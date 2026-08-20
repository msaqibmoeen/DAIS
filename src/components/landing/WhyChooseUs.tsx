"use client";

import React from "react";
import { motion } from "framer-motion";

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}

const advantages: AdvantageItem[] = [
  {
    id: "01",
    title: "Why Choose DAIS",
    description:
      "We are supported by a highly skilled, certified, and experienced team of professionals with strong technical expertise in inspection, testing, calibration, and engineering services, ensuring precise and reliable service execution.",
  },
  {
    id: "02",
    title: "Safety-Focused Approach",
    description:
      "Human safety, asset protection, and operational risk reduction remain central to our service execution.",
  },
  {
    id: "03",
    title: "Reliable Technical Reporting",
    description:
      "Clear, accurate, and dependable technical findings support informed maintenance and operational decisions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#E9F3FF]/50 py-10 md:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-[1050px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs font-semibold tracking-wide mb-1"
          >
            Our Advantage
          </p>

          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight mb-2"
          >
            Why Choose DAIS
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-[3px] bg-[#FD550A] rounded-full mb-4 origin-left"
          />

          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-[13px] leading-relaxed whitespace-nowrap overflow-x-auto"
          >
            Technical expertise, structured engineering practices, and a strong commitment to safety and quality.
          </p>
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -5, boxShadow: "0px 12px 35px rgba(0,0,0,0.06)" }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-start transition-colors duration-300"
            >
              <span
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-[#FD550A] text-xl sm:text-2xl font-bold mb-3 block leading-none"
              >
                {item.id}
              </span>

              <h3
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-[#01286D] text-lg sm:text-xl font-bold mb-3 leading-snug"
              >
                {item.title}
              </h3>

              <p
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[#434343] text-[11px] font-medium leading-relaxed"
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}