"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rows = [
  [
    { name: "ge", label: "GE" },
    { name: "kcen", label: "KCEN" },
    { name: "pso", label: "PSO" },
    { name: "engro", label: "Engro Energy" },
    { name: "package", label: "Packages Mall" },
    { name: "coats", label: "COATS" },
    { name: "parco", label: "PARCO" },
    { name: "fuel", label: "Fuel" },
    { name: "go", label: "GO" },
  ],
  [
    { name: "style", label: "Style Textile" },
    { name: "hubco", label: "Hubco" },
    { name: "fossil", label: "Fossil" },
    { name: "nishat", label: "Nishat" },
    { name: "attock", label: "Attock" },
    { name: "mcl", label: "MCL" },
    { name: "emporium", label: "Emporium" },
    { name: "army-welfare", label: "Army Welfare Trust" },
  ],
  [
    { name: "empire-gaming", label: "Empire Gaming" },
    { name: "total", label: "Total" },
    { name: "destiny", label: "Destiny" },
    { name: "honda", label: "Honda" },
    { name: "naveena", label: "Naveena Group" },
    { name: "guard-filter", label: "Guard Filters" },
    { name: "ffc", label: "FFC" },
    { name: "hallmark", label: "Hallmark Health Network" },
    { name: "bp", label: "BP" },
  ],
  [
    { name: "amal-food", label: "Amal Foods" },
    { name: "hi-tech", label: "Hi-Tech" },
    { name: "tuv-rheinland", label: "TUV Rheinland" },
    { name: "packages-group", label: "Packages Group" },
    { name: "be-energy", label: "Be Energy" },
    { name: "nestlé", label: "Nestlé" },
    { name: "ekl", label: "EKL" },
    { name: "pepsico", label: "PepsiCo" },
    { name: "n3", label: "N3" },
  ],
  [
    { name: "velosi", label: "Velosi" },
    { name: "shell", label: "Shell" },
    { name: "bureau", label: "Bureau Veritas" },
    { name: "elite", label: "Elite" },
    { name: "puma", label: "Puma" },
    { name: "molson", label: "Molson" },
    { name: "jawz", label: "Jawz MS" },
    { name: "byco", label: "Byco" },
    { name: "saybolt", label: "Saybolt" },
  ],
  [
    { name: "pol", label: "Pakistan Oilfields" },
    { name: "hepsec", label: "Hepsec" },
    { name: "taj", label: "Taj Gasoline" },
    { name: "zoom", label: "Zoom" },
    { name: "shafi", label: "Mazhar Shafi" },
    { name: "austria", label: "TUV Austria" },
    { name: "coca-cola", label: "Coca-Cola" },
    { name: "lot", label: "LOT" },
    { name: "nimir", label: "Nimir" },
  ],
  [
    { name: "diagnost", label: "Centaurus" },
    { name: "rousch", label: "Rousch Pakistan" },
    { name: "hw", label: "IIW" },
    { name: "mascol", label: "Mascol" },
    { name: "descon", label: "Descon" },
    { name: "ueil", label: "UEIL" },
    { name: "askar", label: "Askar" },
  ],
];

export default function ClientsMarquee() {
  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs font-semibold tracking-wide mb-1"
          >
            Trusted Partner in Asset Integrity
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight mb-2"
          >
            Sublime Family of Dolphin
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ originX: 0 }}
            className="w-10 h-[3px] bg-[#FD550A] rounded-full mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-[14px] max-w-[620px] leading-relaxed"
          >
            A selection of organisations served across energy, process,
            manufacturing and infrastructure sectors.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-3 w-full">
          {rows.map((row, rowIndex) => {
            const isSecondRow = rowIndex === 1;
            const isLastRow = rowIndex === rows.length - 1;

            const gridColsClass = isSecondRow
              ? "grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
              : isLastRow
                ? "grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
                : "grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9";

            return (
              <motion.div
                key={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: rowIndex * 0.05,
                    },
                  },
                }}
                className={`grid ${gridColsClass} gap-2 sm:gap-3 w-full items-center`}
              >
                {row.map((client, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                      filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.06))",
                    }}
                    whileTap={{ scale: 0.98 }}
                    // Yahan se 'cursor-pointer' hata diya gaya hai taake hand icon na aye
                    className="bg-transparent p-2 flex items-center justify-center transition-colors duration-300 h-[50px] sm:h-[62px]"
                  >
                    <div className="relative w-full h-full flex items-center justify-center mix-blend-multiply">
                      <Image
                        src={`/images/${client.name}.svg`}
                        alt={client.label}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
