"use client";

import React from "react";
import { motion } from "framer-motion";

interface IndustryCategory {
  title: string;
  items: string[];
}

const industriesData: IndustryCategory[] = [
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
    items: ["Cement & Construction Industry", "Water & Wastewater Facilities"],
  },
];

export default function Industries() {
  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
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
            Industry Coverage
          </p>

          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight mb-2"
          >
            Industries We Serve
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
            className="text-[#434343] text-xs sm:text-[13px] max-w-[620px] leading-relaxed"
          >
            DAIS supports industries where equipment safety, operational
            continuity, accurate measurement, regulatory compliance, and asset
            reliability are critical.
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
          {industriesData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -5, boxShadow: "0px 12px 35px rgba(0,0,0,0.08)" }}
              className="bg-[#E9F3FF]/50 border border-[#434343]/15 rounded-xl p-5 sm:p-6 flex flex-col justify-start transition-colors duration-300"
            >
              <h3
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-[#01286D] text-base sm:text-lg lg:text-xl font-bold mb-3 leading-snug whitespace-nowrap"
              >
                {category.title}
              </h3>

              <div className="w-8 h-[2.5px] bg-[#FD550A] rounded-full mb-6" />

              <ul className="space-y-3.5">
                {category.items.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-2.5 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD550A] shrink-0" />
                    <span
                      style={{ fontFamily: "var(--font-montserrat)" }}
                      className="text-[#434343] text-xs font-medium leading-tight"
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}