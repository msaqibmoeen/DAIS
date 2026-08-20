"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2D5D] text-white pt-13 sm:pt-20 pb-8 sm:pb-11 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/20"
        >
          <div className="flex flex-col md:col-span-5 text-left">
            <h4
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-[18px] sm:text-[20px] font-bold mb-3 text-white leading-tight"
            >
              Dolphin Asset Integrity Solutions
            </h4>
            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#FD550A] text-[11px] sm:text-xs font-semibold mb-2 tracking-wide"
            >
              Ensuring Safety, Integrity, and Reliability
            </p>

            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-white text-xs sm:text-[13px] leading-relaxed max-w-[480px]"
            >
              Engineering and asset integrity services ensuring the safety,
              integrity and reliability of industrial assets — inspection,
              calibration, testing and training.
            </p>
          </div>

          <div className="flex flex-col md:col-span-3 text-left">
            <h4
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-[18px] sm:text-[20px] font-bold mb-3 text-white leading-tight"
            >
              Service Domains
            </h4>
            <ul
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="space-y-3 text-[11px] sm:text-xs text-white"
            >
              {["inspection", "calibration", "testing", "training"].map(
                (domain, index) => {
                  const labels = [
                    "Inspection & Integrity Assessment",
                    "Calibration Services",
                    "Testing Services",
                    "Training Services",
                  ];
                  return (
                    <motion.li
                      key={domain}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={`#${domain}`}
                        className="hover:text-[#FD550A] transition-colors inline-block"
                      >
                        {labels[index]}
                      </a>
                    </motion.li>
                  );
                },
              )}
            </ul>
          </div>

          <div className="flex flex-col md:col-span-4 text-left">
            <h4
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-[18px] sm:text-[20px] font-bold mb-3 text-white leading-tight"
            >
              Head Office
            </h4>
            <ul
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="space-y-3.5 text-[11px] sm:text-xs text-white"
            >
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-3.5 h-3.5 shrink-0 mt-0.5 relative">
                  <Image
                    src="/images/map.svg"
                    alt="Location"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="leading-relaxed">
                  First Floor, Plaza No. 29 Broadway, Paragon Housing Society,
                  Barki Road, Lahore, Pakistan.
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-3.5 h-3.5 shrink-0 relative">
                  <Image
                    src="/images/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>+92 4235305335</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-3.5 h-3.5 shrink-0 relative">
                  <Image
                    src="/images/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>+92 300 6624494</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-3.5 h-3.5 shrink-0 relative">
                  <Image
                    src="/images/email.svg"
                    alt="Email"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>info@dolphinais.com</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-3.5 h-3.5 shrink-0 relative">
                  <Image
                    src="/images/website.svg"
                    alt="Website"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>dolphinais.com</span>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-white gap-4 text-center md:text-left"
        >
          <p>
            © 2026. Dolphin Asset Integrity Solutions (Private) Limited-All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-white">
            <a
              href="#inspection"
              className="hover:text-[#FD550A] transition-colors"
            >
              Inspection
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="#calibration"
              className="hover:text-[#FD550A] transition-colors"
            >
              Calibration
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="#testing"
              className="hover:text-[#FD550A] transition-colors"
            >
              Testing
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="#training"
              className="hover:text-[#FD550A] transition-colors"
            >
              Training
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
