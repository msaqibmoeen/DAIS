"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#666666]/30 rounded-2xl overflow-hidden shadow-sm bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.005, transition: { duration: 0.2 } }}
          style={{ perspective: 1000 }}
          className="bg-[#FFFFFF] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2E8F0] transition-shadow duration-300 hover:shadow-lg"
        >
          <div>
            <div className="flex items-center justify-between mb-9">
              <div className="flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontFamily: "var(--font-source-serif)" }}
                  className="w-12 h-12 rounded-lg bg-[#FD550A] text-white font-bold flex items-center justify-center text-[20px] shadow-sm cursor-pointer"
                >
                  01
                </motion.span>
                <h3
                  style={{ fontFamily: "var(--font-source-serif)" }}
                  className="text-[#01286D] text-2xl sm:text-3xl font-bold"
                >
                  Our Mission
                </h3>
              </div>
              <span
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[#01286D]/10 text-6xl font-extrabold tracking-tighter select-none"
              >
                01
              </span>
            </div>
            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#434343] text-xs sm:text-[13px] leading-relaxed border-l-2 border-[#FD550A] pl-2"
            >
              To deliver world-class asset integrity solutions that enhance{" "}
              <br />
              operational safety, extend asset life, and reduce industrial risk{" "}
              <br />
              through advanced engineering practices, technical excellence, and{" "}
              <br />
              adherence to international standards.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4, scale: 1.005, transition: { duration: 0.2 } }}
          style={{ perspective: 1000 }}
          className="bg-[#E9F3FF]/50 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg"
        >
          <div>
            <div className="flex items-center justify-between mb-9">
              <div className="flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontFamily: "var(--font-source-serif)" }}
                  className="w-12 h-12 rounded-lg bg-[#FD550A] text-white font-bold flex items-center justify-center text-[20px] shadow-sm cursor-pointer"
                >
                  02
                </motion.span>
                <h3
                  style={{ fontFamily: "var(--font-source-serif)" }}
                  className="text-[#01286D] text-2xl sm:text-3xl font-bold"
                >
                  Our Vision
                </h3>
              </div>
              <span
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[#01286D]/10 text-6xl font-extrabold tracking-tighter select-none"
              >
                02
              </span>
            </div>

            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#434343] text-xs sm:text-[13px] leading-relaxed border-l-2 border-[#FD550A] pl-2"
            >
              To become a globally recognized leader in asset integrity
              management, delivering trusted, innovative, and sustainable
              engineering solutions that set benchmarks for safety, reliability,
              and
              <br />
              performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}