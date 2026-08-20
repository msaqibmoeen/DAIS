"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-10 lg:py-15 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 text-left"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs font-semibold tracking-wider block mb-1.5"
          >
            Who We Are
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-3xl sm:text-4xl font-bold text-[#01286D] mb-4 tracking-tight leading-tight"
          >
            Ensuring Safety, Integrity & <br />
            Reliability
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ originX: 0 }}
            className="w-12 h-1 bg-[#FD550A] mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-s leading-relaxed max-w-[490px]"
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

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-l-2 border-[#FD550A] pl-4 py-1 mt-7"
          >
            <h4
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-[#01286D] text-base sm:text-lg font-bold"
            >
              &ldquo;Ensuring safety, integrity, and reliability&rdquo;
            </h4>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <motion.div
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.3 }}
            style={{ perspective: 1000 }}
            className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] rounded-lg overflow-hidden shadow-lg border-b-4 border-[#FD550A]"
          >
            <Image
              src="/images/overview1.jpg"
              alt="Inspection Team Working"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
