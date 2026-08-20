"use client";

import React from "react";
import Image from "next/image";
import { motion, Transition } from "framer-motion";
import Header from "@/components/landing/Header";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function WhyChooseUsPage() {
  const reasons = [
    {
      id: "01",
      icon: "/images/skilled.svg",
      type: "skilled",
      title: "Skilled Technical Professionals",
      description:
        "We are supported by a highly skilled, certified,\nand experienced team of professionals with\nstrong technical expertise in inspection, testing,\ncalibration, and engineering services, ensuring\nprecise and reliable service execution.",
    },
    {
      id: "02",
      icon: "/images/safety.svg",
      type: "safety",
      title: "Safety-Focused Approach",
      description:
        "Human safety, asset protection, and operational\nrisk reduction remain central to our service\nexecution.",
    },
    {
      id: "03",
      icon: "/images/reliable.svg",
      iconType: "reliable",
      type: "reliable",
      title: "Reliable Technical Reporting",
      description:
        "Clear, accurate, and dependable technical\nfindings support informed maintenance and\noperational decisions.",
    },
    {
      id: "04",
      icon: "/images/location.svg",
      type: "location",
      title: "On-Site Service Capability",
      description:
        "Technical services can be delivered directly at\nclient facilities according to site conditions and\nproject requirements.",
    },
    {
      id: "05",
      icon: "/images/engineering.svg",
      type: "engineering",
      title: "Tailored Engineering Solutions",
      description:
        "Services are adapted to industry risks, equipment\nconditions, operating environments, and client-\nspecific requirements.",
    },
    {
      id: "06",
      icon: "/images/quality.svg",
      type: "quality",
      title: "Commitment to Quality",
      description:
        "Structured practices, technical accuracy, and\ncontinuous attention to service quality support\nreliable project outcomes.",
    },
  ];

  const pillars = [
    "Technical Expertise",
    "Safety",
    "Accuracy",
    "Reliability",
    "Quality",
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <Header />

      <section className="relative w-full h-[350px] sm:h-[420px] md:h-[530px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/why-choose-bg.jpg"
              alt="Why Choose DAIS Background"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#01286D]/90 via-[#01286D]/70 to-[#01286D]/70" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-25">
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
              Our Advantage
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "var(--font-source-serif)" }}
              className="text-white text-3xl sm:text-4xl md:text-[50px] font-bold mb-3 tracking-tight leading-tight"
            >
              Why Choose DAIS
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ originX: 0 }}
              className="w-16 h-1 bg-[#FD550A] mb-4"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-white text-xs sm:text-sm leading-relaxed max-w-2xl"
            >
              DAIS combines technical expertise, structured engineering
              practices,
              <br className="hidden sm:inline" />
              and a strong commitment to safety and quality to deliver
              dependable
              <br className="hidden sm:inline" />
              asset integrity solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-6 sm:mb-8"
        >
          <span
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs font-semibold tracking-wider block mb-1"
          >
            Six Reasons
          </span>
          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl font-bold mb-2"
          >
            Dependable By Design
          </h2>
          <div className="w-12 h-1 bg-[#FD550A] mb-2" />
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-sm leading-relaxed"
          >
            Our services are adapted to client requirements, operating
            environments, equipment
            <br className="hidden sm:inline" />
            conditions, and applicable technical standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {reasons.map((item, index) => {
            const getIconAnimation = (type: string) => {
              switch (type) {
                case "skilled":
                  return {
                    animate: { scale: [1, 1.08, 1] },
                    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } as Transition,
                  };
                case "safety":
                  return {
                    animate: { scale: [1, 1.12, 1, 1.12, 1] },
                    transition: { repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 1 } as Transition,
                  };
                case "reliable":
                  return {
                    animate: { y: [0, -4, 0] },
                    transition: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } as Transition,
                  };
                case "location":
                  return {
                    animate: { y: [0, -6, 0] },
                    transition: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } as Transition,
                  };
                case "engineering":
                  return {
                    animate: { rotate: 360 },
                    transition: { repeat: Infinity, duration: 10, ease: "linear" } as Transition,
                  };
                case "quality":
                  return {
                    animate: { rotate: [-5, 5, -5] },
                    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } as Transition,
                  };
                default:
                  return { animate: {}, transition: {} as Transition };
              }
            };

            const animProps = getIconAnimation(item.type);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-[#434343]/20 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] sm:min-h-[235px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      animate={animProps.animate}
                      transition={animProps.transition}
                      className="relative w-8 h-8 sm:w-9 sm:h-9"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                    <span
                      style={{ fontFamily: "var(--font-montserrat)" }}
                      className="text-[#01286D]/20 text-xl sm:text-2xl font-bold"
                    >
                      {item.id}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="text-[#01286D] text-base sm:text-lg font-bold mb-2 leading-snug"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    className="text-[#434343] text-[11px] sm:text-xs leading-relaxed whitespace-pre-line"
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative w-full bg-[#0F2D5D] py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20">
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
                Our Pillars
              </span>
              <h2
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-white text-2xl sm:text-3xl md:text-[30px] font-bold mb-3 leading-tight"
              >
                Trusted engineering support for
                <br />
                safer operations
              </h2>
              <div className="w-12 h-1 bg-[#FD550A] mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="border border-[#BEBCBC] rounded-lg p-3.5 transition-colors duration-300 hover:border-[#FD550A]"
                  >
                    <span
                      style={{ fontFamily: "var(--font-montserrat)" }}
                      className="text-[#FFFFFF] text-xs sm:text-sm font-medium block"
                    >
                      {pillar}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-white text-[12px] sm:text-sm leading-relaxed"
              >
                Trusted engineering support for safer operations and more
                reliable industrial assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
              className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden shadow-lg transition-transform duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/overview3.jpg"
                  alt="Inspection Team Working"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-[#FD550A] z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <span
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-1.5"
          >
            Work With Us
          </span>
          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl md:text-[34px] font-bold mb-3"
          >
            Let&apos;s Assess Your Assets
          </h2>
          <div className="w-12 h-1 bg-[#FD550A] mb-4" />
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-sm leading-relaxed mb-6"
          >
            Tell us about your equipment, operating conditions and compliance
            requirements.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="inline-block bg-gradient-to-r from-[#FF6221] to-[#D9480D] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md hover:bg-[#01286D]/90 transition-colors duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}