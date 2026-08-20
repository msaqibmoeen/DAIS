"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function ServicesPage() {
  const rowOneServices = [
    {
      id: "01",
      title: "Inspection & Integrity Assessment",
      shortTitle: "Inspection",
      description:
        "Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.",
      image: "/images/service_1.jpg",
      link: "/services/inspection",
      iconSrc: "/images/search.svg",
    },
    {
      id: "02",
      title: "Calibration Services",
      shortTitle: "Calibration",
      description:
        "Verifying measuring instruments against recognized reference standards to ensure accurate, consistent, and reliable readings.",
      image: "/images/service_2.jpg",
      link: "/services/calibration",
      iconSrc: "/images/speedometer.svg",
    },
  ];

  const rowTwoServices = [
    {
      id: "03",
      title: "Testing Services",
      shortTitle: "Testing",
      description:
        "Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.",
      image: "/images/service_3.jpg",
      link: "/services/testing",
      iconSrc: "/images/test-tubes.svg",
    },
    {
      id: "04",
      title: "Training Services",
      shortTitle: "Training",
      description:
        "Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety and operational awareness.",
      image: "/images/service_4.jpg",
      link: "/services/training",
      iconSrc: "/images/cap.svg",
    },
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
              src="/images/service-bg.jpg"
              alt="Services Background"
              fill
              priority
              className="object-cover object-[50%_100%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#01286D]/90 via-[#01286D]/80 to-[#01286D]/80" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-22 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-left"
          >
            <span className="text-[#FD550A] text-xs sm:text-sm font-montserrat tracking-wider block mb-2">
              Service Domains
            </span>
            <h1
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-white text-3xl sm:text-4xl md:text-[44px] font-bold mb-3 tracking-tight leading-tight"
            >
              Our Services
            </h1>
            <div className="w-16 h-0.5 bg-[#FD550A] mb-4" />
            <p
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-white text-xs sm:text-s leading-relaxed max-w-110"
            >
              Advanced inspection, integrity assessment, calibration, testing
              and training solutions delivered through structured engineering
              practices and international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section / Service Cards */}
      <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-22 py-10 sm:py-12 md:py-14">
        <div className="text-left mb-8">
          <span className="text-[#FD550A] text-xs sm:text-sm font-montserrat tracking-wider block mb-1">
            Four Domains
          </span>
          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl font-bold mb-2"
          >
            Choose A Service Domain
          </h2>
          <div className="w-12 h-0.5 bg-[#FD550A] mb-2" />
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-sm max-w-2xl leading-relaxed"
          >
            Each domain has its own dedicated page covering scope, methodology
            and the specific services we deliver.
          </p>
        </div>

        {/* First Row (Cards 01 & 02) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8">
          {rowOneServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white rounded-[6px] border border-[#434343]/20 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#FD550A]/40 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <Link href={service.link} className="flex flex-col flex-grow">
                <div className="relative w-full h-[130px] sm:h-[150px] overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="absolute top-2.5 left-2.5 w-9 h-9 bg-[#FD550A] text-white text-[17px] font-bold rounded shadow flex items-center justify-center z-10"
                  >
                    {service.id}
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-left flex flex-col flex-grow">
                  <div className="mb-2 relative w-7 h-7 sm:w-8 sm:h-8">
                    <Image
                      src={service.iconSrc}
                      alt={`${service.title} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="text-[#01286D] text-base sm:text-lg font-bold mb-1.5 group-hover:text-[#FD550A] transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    className="text-[#434343] text-[10px] sm:text-[11px] leading-relaxed mb-4 line-clamp-2"
                  >
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <span
                      style={{ fontFamily: "var(--font-montserrat)" }}
                      className="inline-flex items-center gap-1.5 text-[#FD550A] font-semibold text-[11px] sm:text-xs group-hover:gap-2.5 transition-all"
                    >
                      Explore {service.shortTitle}
                      <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Second Row (Cards 03 & 04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rowTwoServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white rounded-[6px] border border-[#434343]/20 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#FD550A]/40 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <Link href={service.link} className="flex flex-col flex-grow">
                <div className="relative w-full h-[130px] sm:h-[150px] overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="absolute top-2.5 left-2.5 w-9 h-9 bg-[#FD550A] text-white text-[17px] font-bold rounded shadow flex items-center justify-center z-10"
                  >
                    {service.id}
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-left flex flex-col flex-grow">
                  <div className="mb-2 relative w-7 h-7 sm:w-8 sm:h-8">
                    <Image
                      src={service.iconSrc}
                      alt={`${service.title} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="text-[#01286D] text-base sm:text-lg font-bold mb-1.5 group-hover:text-[#FD550A] transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    className="text-[#434343] text-[10px] sm:text-[11px] leading-relaxed mb-4 line-clamp-2"
                  >
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <span
                      style={{ fontFamily: "var(--font-montserrat)" }}
                      className="inline-flex items-center gap-1.5 text-[#FD550A] font-semibold text-[11px] sm:text-xs group-hover:gap-2.5 transition-all"
                    >
                      Explore {service.shortTitle}
                      <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
