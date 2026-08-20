"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function InspectionPage() {
  const servicesList = [
    { id: "01", title: "Non-Destructive Testing (NDT) Training" },
    { id: "02", title: "Lifting Operations & Inspection Training" },
    { id: "03", title: "Electrical Safety Training" },
    { id: "04", title: "Fire Safety Training" },
    { id: "05", title: "Emergency Response Training" },
  ];

  const competencyPrograms = [
    {
      id: "01",
      title: "Non-Destructive Testing (NDT) Training",
      description:
        "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
    {
      id: "02",
      title: "Lifting Operations & Inspection Training",
      description:
        "Building awareness of lifting equipment, inspection requirements, load handling, and safe lifting practices.",
    },
    {
      id: "03",
      title: "Electrical Safety Training",
      description:
        "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
    {
      id: "04",
      title: "Fire Safety Training",
      description:
        "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
    {
      id: "05",
      title: "Emergency Response Training",
      description:
        "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
  ];

  const benefits = [
    "Personnel competent in inspection and safe testing practice",
    "Stronger hazard awareness on lifting and electrical work",
    "Faster, more confident emergency response",
    "Practical skills transferred directly to site conditions",
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/service_4.jpg"
              alt="Inspection & Integrity Assessment Background"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#01286D]/80" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-8">
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
              className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-2"
            >
              Service Domain 04
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-white text-3xl sm:text-4xl md:text-[44px] font-bold mb-3 tracking-tight leading-tight"
            >
              Training Services
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
              className="text-white text-xs sm:text-sm leading-relaxed max-w-2xl"
            >
              Industry-focused training programs designed to strengthen
              technical
              <br className="hidden sm:inline" />
              knowledge, practical skills, workplace safety and operational
              awareness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-14">
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
              Our training services support personnel in developing the
              <br className="hidden sm:inline" />
              competences required to perform industrial activities safely,
              <br className="hidden sm:inline" />
              accurately, and in accordance with applicable technical practices
              <br className="hidden sm:inline" />
              and safety requirements.
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
                src="/images/overview4.jpg"
                alt="Inspection Team Working"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="relative w-full bg-[#E9F3FF]/50  py-8 sm:py-10 md:py-14 overflow-hidden">
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

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-left mb-4 sm:mb-5"
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
                  className="text-[#434343] text-xs sm:text-sm group-hover:text-[#000000] transition-colors duration-300 font-medium"
                >
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge To Competency Component */}
      <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-6 sm:mb-8"
        >
          <span
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-1"
          >
            Programs
          </span>
          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl md:text-[34px] font-bold mb-2"
          >
            Knowledge To Competency
          </h2>
          <div className="w-12 h-0.5 bg-[#FD550A] mb-2 sm:mb-3" />
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-sm tracking-wide"
          >
            Knowledge &gt; Practical Skills &gt; Safety Awareness &gt;
            Competency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {competencyPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-[#434343]/20 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className="inline-block bg-[#FD550A] text-white font-semibold text-xs sm:text-sm px-2 h-8 w-8 py-2 rounded mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {program.id}
                </div>
                <h3
                  style={{ fontFamily: "var(--font-source-serif)" }}
                  className="text-[#01286D] text-base sm:text-lg font-bold mb-2 leading-snug"
                >
                  {program.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  className="text-[#434343] text-[11px] sm:text-xs leading-relaxed"
                >
                  {program.id === "02" ? (
                    <>
                      Building awareness of lifting equipment, <br />
                      inspection requirements, load handling, and safe <br />
                      lifting practices.
                    </>
                  ) : (
                    program.description
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      <Footer />
    </div>
  );
}
