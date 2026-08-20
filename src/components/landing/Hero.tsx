"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#01286D] overflow-hidden flex items-center min-h-[510px] lg:min-h-[490px]">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/bg-image.jpg"
            alt="Industrial Asset Background"
            fill
            priority
            sizes="100vw"
            className="object-cover lg:object-fill object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(1,40,109,0.92) 0%, rgba(1,40,109,0.75) 45%, rgba(1,40,109,0.5) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-350 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-8 lg:py-10">
        <div className="max-w-155">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#FD550A] text-[16px] sm:text-sm font-montserrat tracking-wide mb-2"
          >
            Trusted Asset Integrity &amp; Engineering Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-white text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.2] mb-3"
          >
            Ensuring the <span className="text-[#FD550A]">Integrity,</span>
            <br />
            <span className="text-[#FD550A]">Safety</span> &amp; Reliability of
            <br />
            Critical Industrial Assets
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-16 h-[3px] bg-[#FD550A] mb-4 rounded-full origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-gray-200 text-[17px] sm:text-sm leading-relaxed mb-6 max-w-[510px]"
          >
            We provide comprehensive inspection, testing, calibration, and
            engineering solutions that help industries enhance operational
            safety, maximize asset performance, and maintain compliance with
            international quality standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #FF6221 0%, #D9480D 100%)",
                fontFamily: "var(--font-montserrat)",
              }}
              className="text-white text-xs font-semibold tracking-wider px-5 py-3 rounded-[9px] shadow-lg flex items-center space-x-2 cursor-pointer"
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

            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ fontFamily: "var(--font-inter)" }}
              className="border border-white/60 text-white hover:text-[#FD550A] text-xs font-semibold tracking-wider px-4 py-3 rounded-[9px] transition cursor-pointer"
            >
              EXPLORE OUR SERVICES
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
