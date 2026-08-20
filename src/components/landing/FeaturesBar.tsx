"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Feature {
  id: number;
  title: string;
  description: string;
  iconPath: string;
  iconWidth: string;
  iconHeight: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Structured Engineering",
    description: "International standards & practices",
    iconPath: "/images/scale.svg",
    iconWidth: "w-8",
    iconHeight: "h-8",
  },
  {
    id: 2,
    title: "On-Site Capability",
    description: "Services delivered at your facility",
    iconPath: "/images/site.svg",
    iconWidth: "w-7",
    iconHeight: "h-7",
  },
  {
    id: 3,
    title: "Certified Team",
    description: "Skilled inspection & calibration engineers",
    iconPath: "/images/certified.svg",
    iconWidth: "w-7",
    iconHeight: "h-7",
  },
];

export default function FeaturesBar() {
  return (
    <section className="w-full bg-[#ECF3FC]/50 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-30">
      <div className="max-w-300 mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded py-3 px-4 flex items-center space-x-3.5 border border-[#434343]/20 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded border-1 border-[#01286D] flex items-center justify-center shrink-0 bg-[#ECF3FC]/50 p-1"
              >
                <Image
                  src={feature.iconPath}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className={`${feature.iconWidth} ${feature.iconHeight} object-contain`}
                />
              </motion.div>

              <div className="flex flex-col justify-center min-w-0">
                <h3
                  style={{ fontFamily: "var(--font-source-serif)" }}
                  className="text-[#01286D] text-sm sm:text-[16px] font-bold leading-tight mb-0.5 sm:truncate"
                >
                  {feature.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  className="text-[#434343] text-[11px] font-medium leading-snug"
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}