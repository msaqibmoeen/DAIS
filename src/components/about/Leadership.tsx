"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Leadership() {
  const leaders = [
    {
      num: "01",
      role: "Chief Executive Officer",
      name: "Muhammad Tariq Khan",
      darkBg: true,
    },
    {
      num: "02",
      role: "Director Commercial",
      name: "Rana Muhammad Hamad",
      darkBg: false,
    },
    {
      num: "03",
      role: "Director Finance",
      name: "Muhammad Rashid Khan",
      darkBg: false,
    },
    {
      num: "04",
      role: "Operations & Technical",
      name: "Muhammad Maaz Ahsan",
      darkBg: true,
    },
  ];

  return (
    <section className="bg-[#E9F3FF]/50 py-16 lg:py-24 border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12 border-l-3 border-[#FD550A] pl-2"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#FD550A] text-xs font-semibold tracking-wider block mb-1.5"
          >
            Core Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "var(--font-source-serif)" }}
            className="text-[#01286D] text-3xl sm:text-4xl font-bold mb-3"
          >
            Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-[#434343] text-xs sm:text-sm leading-relaxed max-w-[580px]"
          >
            Four directors accountable for engineering, commercial, financial
            and operational delivery on every project.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {leaders.map((leader, index) => {
            const isSecondCard = index === 1;
            const isThirdCard = index === 2;
            const isFourthCard = index === 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.005, transition: { duration: 0.2 } }}
                style={{ perspective: 1000 }}
                className={`relative p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[220px] transition-shadow duration-300 hover:shadow-lg ${
                  leader.darkBg
                    ? "bg-[#01286D] text-white shadow-sm"
                    : "bg-transparent text-[#01286D]"
                }`}
              >
                {isSecondCard ? (
                  <>
                    <div>
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className="text-xs font-semibold tracking-wide text-[#FD550A] block mb-2"
                      >
                        {leader.role}
                      </span>
                      <h3
                        style={{ fontFamily: "var(--font-source-serif)" }}
                        className="text-2xl sm:text-3xl font-bold text-[#01286D]"
                      >
                        {leader.name}
                      </h3>
                    </div>
                    <div className="flex justify-end mt-8">
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className="text-5xl sm:text-6xl font-extrabold select-none text-[#01286D]/20"
                      >
                        {leader.num}
                      </span>
                    </div>
                  </>
                ) : isThirdCard ? (
                  <>
                    <div>
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className="text-xs font-semibold tracking-wide text-[#FD550A] block mb-2"
                      >
                        {leader.role}
                      </span>
                      <h3
                        style={{ fontFamily: "var(--font-source-serif)" }}
                        className="text-2xl sm:text-3xl font-bold text-[#01286D]"
                      >
                        {leader.name}
                      </h3>
                    </div>
                    <div className="flex justify-start mt-8">
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className="text-5xl sm:text-6xl font-extrabold select-none text-[#01286D]/20"
                      >
                        {leader.num}
                      </span>
                    </div>
                  </>
                ) : isFourthCard ? (
                  <>
                    <div className="flex justify-start items-start">
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className="text-5xl sm:text-6xl font-extrabold select-none text-white/20"
                      >
                        {leader.num}
                      </span>
                    </div>

                    <div className="z-10 mt-6 flex flex-col items-end text-right">
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className="text-xs font-semibold tracking-wide px-3 py-1 bg-[#FD550A] text-white mb-3"
                      >
                        {leader.role}
                      </span>
                      <h3
                        style={{ fontFamily: "var(--font-source-serif)" }}
                        className="text-2xl sm:text-3xl font-bold text-white"
                      >
                        Muhammad Maaz <br />
                        Ahsan
                      </h3>
                      <div className="w-16 h-1 bg-[#FD550A] mt-4" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-start z-10">
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className={`text-xs font-semibold tracking-wide ${
                          leader.darkBg
                            ? "px-3 py-1 bg-[#FD550A] text-white"
                            : "text-[#FD550A]"
                        }`}
                      >
                        {leader.role}
                      </span>
                      <span
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        className={`text-5xl sm:text-6xl font-extrabold select-none ${
                          leader.darkBg ? "text-[#FFFFFF]/20" : "text-[#01286D]/20"
                        }`}
                      >
                        {leader.num}
                      </span>
                    </div>

                    <div className="z-10 mt-6">
                      <h3
                        style={{ fontFamily: "var(--font-source-serif)" }}
                        className={`text-2xl sm:text-3xl font-bold ${
                          leader.darkBg ? "text-white" : "text-[#01286D]"
                        }`}
                      >
                        {index === 0 ? (
                          <>
                            Muhammad Tariq <br />
                            Khan
                          </>
                        ) : (
                          leader.name
                        )}
                      </h3>
                      {leader.darkBg && (
                        <div className="w-16 h-1 bg-[#FD550A] mt-4" />
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 border-l-2 border-[#FD550A] pl-4 py-1"
        >
          <p
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="text-xs sm:text-sm text-[#434343] leading-relaxed max-w-[720px]"
          >
            With an established client base and successful operations under DES,
            we are now expanding our capabilities through DAIS — a new identity
            designed to serve clients while building on enhanced technical
            expertise and our team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}