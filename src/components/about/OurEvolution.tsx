"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurEvolution() {
  const checklistItems = [
    "Same leadership, same trusted client relationships",
    "Broader scope across inspection, calibration, testing and training",
    "Strengthened technical team and engineering capability",
  ];

  return (
    <section className="bg-[#E9F3FF]/50 py-16 lg:py-20 border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              Our Evolution
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-3xl sm:text-4xl font-bold text-[#01286D] mb-4 tracking-tight"
            >
              From DES To DAIS
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{ originX: 0 }}
              className="w-12 h-0.5 bg-[#FD550A] mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-xs sm:text-s text-[#434343] mb-6 leading-relaxed"
            >
              With an established client base and successful operations under DES — Dolphin <br />
              Engineering Solutions — we are now expanding our capabilities through DAIS: a <br />
              new identity designed to serve clients while building on enhanced technical <br />
              expertise and our team.
            </motion.p>

            <div
              className="space-y-3.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {checklistItems.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="relative w-4 h-4 shrink-0 mt-0.5">
                    <Image
                      src="/images/tick.svg"
                      alt="Check"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-[#434343]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
            style={{ perspective: 1000 }}
            className="lg:col-span-5 bg-white rounded-2xl border border-[#434343]/50 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 ml-auto lg:translate-x-10 w-full max-w-[600px]"
          >
            <div className="text-center flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="h-12 relative flex items-center justify-center mb-3"
              >
                <Image
                  src="/images/des_logo.svg"
                  alt="DES Logo"
                  width={90}
                  height={36}
                  className="object-contain"
                />
              </motion.div>
              <span
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[10px] font-semibold text-[#434343] uppercase tracking-wider block mb-1 text-center"
              >
                PREVIOUSLY
              </span>
              <p
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[8px] sm:text-[8px] text-[#434343] leading-relaxed text-center"
              >
                Dolphin Engineering Solutions
                <br />
                (Private) Limited
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-9 h-9 rounded-full bg-[#FD550A] flex items-center justify-center text-white shrink-0 shadow-md my-2 md:my-0 cursor-pointer"
            >
              →
            </motion.div>

            <div className="text-center flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="h-12 relative flex items-center justify-center mb-3"
              >
                <Image
                  src="/images/dais_logo.svg"
                  alt="DAIS Logo"
                  width={130}
                  height={46}
                  className="object-contain"
                />
              </motion.div>
              <span
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[10px] font-semibold text-[#434343] uppercase tracking-wider block mb-1 text-center"
              >
                TODAY
              </span>
              <p
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[8px] sm:text-[8px] text-[#434343] leading-relaxed text-center"
              >
                Dolphin Asset Integrity Solutions
                <br />
                (Private) Limited
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}