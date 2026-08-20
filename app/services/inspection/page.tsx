"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function InspectionPage() {
  const servicesList = [
    { id: "01", title: "Asset Integrity & Risk Management" },
    { id: "02", title: "Pressure Vessel Inspection" },
    { id: "03", title: "Piping System Inspection" },
    { id: "04", title: "Storage Tank Inspection" },
    { id: "05", title: "Mechanical Integrity Assessment" },
    { id: "06", title: "Non-Destructive Testing (NDT)" },
    { id: "07", title: "Welding & Material Inspection" },
    { id: "08", title: "Corrosion Monitoring & Control" },
    { id: "09", title: "Structural Integrity Assessment" },
    { id: "10", title: "Lifting Inspection Services" },
  ];

  const benefits = [
    "Early detection of corrosion, cracks and material degradation",
    "Documented fitness-for-service evidence for continued operation",
    "Reduced risk of unplanned shutdowns and safety incidents",
    "Inspection findings that feed directly into maintenance planning",
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/service_1.jpg"
              alt="Inspection & Integrity Assessment Background"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#01286D]/80" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-7 sm:px-10 md:px-16 lg:px-22 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-left"
          >
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#FD550A] text-[11px] sm:text-xs font-semibold tracking-wider block mb-2"
            >
              Service Domain 01
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-white text-2xl sm:text-3xl md:text-[40px] font-bold mb-3 tracking-tight leading-tight"
            >
              Inspection & Integrity
              <br />
              Assessment
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ originX: 0 }}
              className="w-16 h-0.5 bg-[#FD550A] mb-4"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-white text-[11px] sm:text-xs leading-relaxed max-w-2xl"
            >
              Systematic evaluation of industrial equipment, structures, and
              <br className="hidden sm:inline" />
              mechanical systems to determine their present condition and
              fitness for
              <br className="hidden sm:inline" />
              continued operation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-22 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <span
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-1.5"
            >
              Overview
            </span>
            <h2
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-[#01286D] text-2xl sm:text-3xl md:text-[34px] font-bold mb-3"
            >
              Why It Matters
            </h2>
            <div className="w-12 h-0.5 bg-[#FD550A] mb-4" />
            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#434343] text-xs sm:text-sm leading-relaxed mb-6"
            >
              Inspection activities help identify defects, corrosion,
              deterioration,
              <br className="hidden sm:inline" />
              structural weaknesses, and operational risks that may affect asset
              <br className="hidden sm:inline" />
              safety and performance.
            </p>

            <div className="space-y-3.5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mt-0.5 flex-shrink-0 w-4 h-4 relative"
                  >
                    <Image
                      src="/images/tick.svg"
                      alt="Check"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <span
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    className="text-[#434343] text-xs sm:text-sm leading-relaxed"
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.015 }}
            className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-[#434343]/10 transition-transform duration-500"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/overview1.jpg"
                alt="Inspection Team Working"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="relative w-full bg-[#E9F3FF]/50 border-t border-b border-[#E2E8F0] py-10 sm:py-10 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(102, 102, 102, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(102, 102, 102, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-22">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-left mb-5 sm:mb-6"
          >
            <span
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-1"
            >
              Scope
            </span>
            <h2
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-[#01286D] text-2xl sm:text-3xl md:text-[34px] font-bold mb-2"
            >
              Services We Deliver
            </h2>
            <div className="w-12 h-0.5 bg-[#FD550A]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FFFFFF] rounded-lg border border-[#434343]/40 p-3 sm:p-3.5 shadow-sm hover:shadow-lg hover:border-[#FD550A]/40 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  className="text-[#FD550A] text-[16px] font-semibold sm:text-base flex-shrink-0 w-6"
                >
                  {service.id}
                </motion.div>

                <h3
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  className="text-[#434343] text-xs sm:text-s group-hover:text-[#000000] transition-colors duration-300 font-medium"
                >
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      <Footer />
    </div>
  );
}
