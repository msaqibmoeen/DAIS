"use client";

import React from "react";
import Image from "next/image";
import { motion, Transition } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  iconPath: string;
  type: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Inspection & Integrity Assessment",
    description:
      "Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.",
    linkText: "Explore Inspection",
    iconPath: "/images/search.svg",
    type: "inspection",
  },
  {
    id: "02",
    title: "Calibration Services",
    description:
      "Verifying measuring instruments against recognized reference standards to ensure accurate, consistent, and reliable readings.",
    linkText: "Explore Calibration",
    iconPath: "/images/speedometer.svg",
    type: "calibration",
  },
  {
    id: "03",
    title: "Testing Services",
    description:
      "Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.",
    linkText: "Explore Testing",
    iconPath: "/images/test-tubes.svg",
    type: "testing",
  },
  {
    id: "04",
    title: "Training Services",
    description:
      "Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety and operational awareness.",
    linkText: "Explore Training",
    iconPath: "/images/cap.svg",
    type: "training",
  },
];

export default function Services() {
  const getIconAnimation = (type: string) => {
    switch (type) {
      case "inspection":
        return {
          animate: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
          transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          } as Transition,
        };
      case "calibration":
        return {
          animate: {
            rotate: [-15, 15, -10, 20, -15],
            scale: [1, 1.05, 0.95, 1.08, 1],
          },
          transition: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          } as Transition,
        };
      case "testing":
        return {
          animate: { y: [0, -4, 0, 4, 0] },
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          } as Transition,
        };
      case "training":
        return {
          animate: { y: [0, -5, 0], rotate: [0, -3, 3, 0] },
          transition: {
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          } as Transition,
        };
      default:
        return { animate: {}, transition: {} as Transition };
    }
  };

  return (
    <section className="w-full bg-white py-6 md:py-8 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col justify-center">
      <div className="max-w-[1050px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs font-semibold tracking-wide mb-1"
          >
            Service Domains
          </p>

          <h2
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight mb-2"
          >
            What We Do
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-[3px] bg-[#FD550A] rounded-full mb-3 origin-left"
          />

          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-[13px] max-w-[600px] leading-relaxed"
          >
            Four integrated technical domains covering the full lifecycle of
            industrial asset integrity.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {services.map((service) => {
            const animProps = getIconAnimation(service.type);

            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0px 12px 35px rgba(0,0,0,0.08)",
                }}
                className="relative bg-white rounded-xl p-5 sm:p-6 border border-[#434343]/30 shadow-[1px_4px_20px_rgba(0,0,0,0.03)] transition-colors duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <motion.div
                    animate={animProps.animate}
                    transition={animProps.transition}
                    className="w-10 h-10 flex items-center justify-start shrink-0"
                  >
                    <Image
                      src={service.iconPath}
                      alt={service.title}
                      width={36}
                      height={36}
                      className="w-8 h-8 object-contain text-[#01286D]"
                    />
                  </motion.div>

                  <span
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="text-3xl sm:text-4xl font-bold text-[#ECF3FC] select-none leading-none"
                  >
                    {service.id}
                  </span>
                </div>

                <div className="mb-4 flex-grow">
                  <h3
                    style={{ fontFamily: "var(--font-source-serif)" }}
                    className="text-[#01286D] text-base sm:text-lg font-bold mb-2 leading-snug"
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    className="text-[#434343] text-[10px] font-medium leading-relaxed"
                  >
                    {service.description}
                  </p>
                </div>

                <div className="pt-1">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    className="inline-flex items-center space-x-2 text-[#FD550A] text-xs font-semibold hover:opacity-80 transition group cursor-pointer"
                  >
                    <span>{service.linkText}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      &rarr;
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
