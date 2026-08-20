"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceRequired: "Inspection & Integrity Assessment",
    scopeDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white text-[#0F2D5D] overflow-x-hidden flex flex-col justify-between">
      <div>
        <Header />

        <section className="relative w-full h-[370px] sm:h-[400px] md:h-[490px] flex items-center overflow-hidden">
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
                className="object-cover object-center"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#01286D]/90 via-[#01286D]/70 to-[#01286D]/70" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-left"
            >
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[#FD550A] text-xs sm:text-sm font-semibold tracking-wider block mb-2"
              >
                Contact Us
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-white text-3xl sm:text-4xl md:text-[44px] font-bold mb-3 tracking-tight leading-tight"
              >
                Talk To Our Engineers
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
                className="text-white text-xs sm:text-sm leading-relaxed max-w-150"
              >
                Share your inspection, calibration, testing or training
                requirement and <br className="hidden sm:inline" />
                our technical team will respond with a suitable scope of work.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 text-left"
            >
              <span
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-[#FD550A] text-xs font-semibold uppercase tracking-wider block mb-1.5"
              >
                Head Office
              </span>
              <h2
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-3xl sm:text-4xl font-bold text-[#01286D] mb-4 tracking-tight"
              >
                Reach DAIS
              </h2>
              <div className="w-12 h-0.5 bg-[#FD550A] mb-6" />
              <p
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="text-s sm:text-[11px] text-[#434343] mb-8 leading-relaxed"
              >
                Each domain has its own dedicated page covering scope,
                methodology and the specific services we deliver.
              </p>

              <div
                className="space-y-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="pb-6 border-b border-[#666666]/40 cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-[#01286D] text-xs font-semibold mb-1">
                    <span className="w-4 h-4 relative flex items-center justify-center">
                      <Image
                        src="/images/map.svg"
                        alt="Location"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <span>Head Office</span>
                  </div>
                  <p className="text-s sm:text-[12px] text-[#434343] leading-relaxed">
                    First Floor, Plaza No. 29 Broadway, Paragon Housing Society,
                    Barki Road, Lahore, Pakistan.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="pb-6 border-b border-[#666666]/40 cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-[#01286D] text-xs font-semibold mb-1">
                    <span className="w-4 h-4 relative flex items-center justify-center">
                      <Image
                        src="/images/phone.svg"
                        alt="Phone"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <span>Landline</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#434343]">
                    +92 4235305335
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="pb-6 border-b border-[#666666]/40 cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-[#01286D] text-xs font-semibold mb-1">
                    <span className="w-4 h-4 relative flex items-center justify-center">
                      <Image
                        src="/images/whatsapp.svg"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <span>WHATSAPP</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#434343]">
                    +92 300 6624494
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="pb-6 border-b border-[#666666]/40 cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-[#01286D] text-xs font-semibold mb-1">
                    <span className="w-4 h-4 relative flex items-center justify-center">
                      <Image
                        src="/images/email.svg"
                        alt="Email"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <span>EMAIL</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#434343]">
                    info@dolphinais.com
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-[#01286D] text-xs font-semibold mb-1">
                    <span className="w-4 h-4 relative flex items-center justify-center">
                      <Image
                        src="/images/website.svg"
                        alt="Website"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <span>WEBSITE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#434343]">
                    dolphinais.com
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#E9F3FF]/80 p-6 sm:p-8 shadow-sm text-left"
            >
              <h3
                style={{ fontFamily: "var(--font-source-serif)" }}
                className="text-2xl sm:text-3xl font-bold text-[#01286D] mb-2"
              >
                Request a Quote
              </h3>
              <div className="w-12 h-0.5 bg-[#FD550A] mb-6" />

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <div>
                  <label className="block text-[12px] text-[#434343] tracking-wider mb-1.5 uppercase">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-[#666666]/30 text-xs text-[#0F2D5D] focus:outline-none focus:border-[#0F2D5D] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[12px] text-[#434343] tracking-wider mb-1.5 uppercase">
                    Company
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-[#666666]/30 text-xs text-[#0F2D5D] focus:outline-none focus:border-[#0F2D5D] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] text-[#434343] tracking-wider mb-1.5 uppercase">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-[#666666]/30 text-xs text-[#0F2D5D] focus:outline-none focus:border-[#0F2D5D] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-[#434343] tracking-wider mb-1.5 uppercase">
                      Phone
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-[#666666]/30 text-xs text-[#0F2D5D] focus:outline-none focus:border-[#0F2D5D] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] text-[#434343] tracking-wider mb-1.5 uppercase">
                    Service Required
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-[#666666]/30 text-xs text-[#888888]/60 focus:outline-none focus:border-[#0F2D5D] transition-all"
                  >
                    <option value="Inspection & Integrity Assessment">
                      Inspection & Integrity Assessment
                    </option>
                    <option value="Calibration Services">
                      Calibration Services
                    </option>
                    <option value="Testing Services">Testing Services</option>
                    <option value="Training Services">Training Services</option>
                  </motion.select>
                </div>

                <div>
                  <label className="block text-[12px] text-[#434343] tracking-wider mb-1.5 uppercase">
                    Scope Details
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    name="scopeDetails"
                    rows={3}
                    value={formData.scopeDetails}
                    onChange={handleChange}
                    placeholder="Equipment, site location, standards and timeline"
                    className="w-full px-4 py-2 bg-white border border-[#666666]/30 text-xs text-[#888888] focus:outline-none focus:border-[#0F2D5D] resize-none transition-all"
                  ></motion.textarea>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 5px 15px rgba(1, 40, 109, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-3 bg-[#01286D] text-white text-xs font-semibold rounded-md shadow-md hover:bg-[#0F2D5D] transition-colors"
                >
                  SUBMIT ENQUIRY
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        <CtaBanner />
      </div>

      <Footer />
    </div>
  );
}