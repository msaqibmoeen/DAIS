"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[360px] sm:h-[390px] md:h-[490px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img
            src="/images/bg-image.jpg"
            alt="About DAIS Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#01286D]/90 via-[#01286D]/70 to-[#01286D]/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-left"
        >
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-2"
          >
            About DAIS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-white text-3xl sm:text-4xl md:text-[44px] font-bold mb-3 tracking-tight leading-tight"
          >
            Engineering Asset <br />
            Integrity
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ originX: 0 }}
            className="w-16 h-1 bg-[#FD550A] mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FFFFFF] text-xs sm:text-sm leading-relaxed max-w-[590px]"
          >
            Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is a
            professional engineering and asset integrity services company
            specializing in ensuring the safety, integrity and reliability of
            industrial assets. We provide advanced <br />
            inspection, integrity assessment, calibration, and testing solutions
            across multiple <br />
            industries, helping clients maintain operational safety, enhance
            asset <br />
            performance, and extend equipment lifecycle through structured
            engineering practices and adherence to international standards.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
