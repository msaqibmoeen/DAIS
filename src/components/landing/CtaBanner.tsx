"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="w-full bg-white py-0 px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-gradient-to-r from-[#0F2D5D] via-[#113978] to-[#0F2D5D] border-y border-[#0F2D5D] px-4 sm:px-6 md:px-8 lg:px-16 py-9 sm:py-12 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-4 max-w-[1200px] w-full lg:w-auto mx-auto lg:mx-0">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 p-2.5"
          >
            <Image
              src="/images/trusted.svg"
              alt="Trusted Icon"
              width={28}
              height={28}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="w-full">
            <h3
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 leading-snug"
            >
              Trusted engineering support for safer operations
            </h3>
            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-white text-[11px] sm:text-xs tracking-wide leading-relaxed"
            >
              Technical Expertise | Safety | Accuracy | Reliability | Quality
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "linear-gradient(135deg, #FF6221 0%, #D9480D 100%)",
              fontFamily: "var(--font-inter)",
            }}
            className="text-white text-xs font-inter tracking-wider px-5 py-3 rounded-[9px] shadow-lg flex items-center space-x-2 cursor-pointer"
          >
            <span>REQUEST A QUOTE</span>
            <Image
              src="/images/arrow.svg"
              alt="Arrow"
              width={12}
              height={12}
              className="w-3 h-3 object-contain"
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
