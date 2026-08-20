"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "WHY CHOOSE US", href: "/why-choose-us" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/services") {
      return pathname === "/services" || pathname.startsWith("/services/");
    }
    return pathname === href;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white shadow-sm relative z-50 backdrop-blur-md bg-white/95"
    >
      {/* Top Info Bar */}
      <div
        style={{ backgroundColor: "#01286D" }}
        className="w-full text-white text-xs py-2"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-5 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          <div className="hidden sm:flex items-center space-x-2 text-white font-medium">
            <span>
              Inspection <span className="text-[#FD550A]">|</span>
            </span>
            <span>
              Calibration <span className="text-[#FD550A]">|</span>
            </span>
            <span>
              Testing <span className="text-[#FD550A]">|</span>
            </span>
            <span>Training</span>
          </div>

          <div className="flex sm:hidden items-center text-[#FD550A] font-medium text-[10px] text-center">
            <span>Inspection | Calibration | Testing | Training</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-white flex-wrap justify-center">
            <div className="flex items-center space-x-0.5">
              <Image
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                width={14}
                height={14}
              />
              <span className="tracking-wide hidden md:inline">WHATSAPP</span>
            </div>
            <div className="flex items-center space-x-0.5">
              <Image
                src="/images/phone.svg"
                alt="Phone"
                width={14}
                height={14}
              />
              <span className="inline">+92 300 6624494</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5">
              <Image
                src="/images/email.svg"
                alt="Email"
                width={14}
                height={14}
              />
              <span>info@dolphinais.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Logo & Nav Bar */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-5 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="flex items-center shrink-0"
        >
          <Image
            src="/images/dais_logo.svg"
            alt="DAIS Logo"
            width={200}
            height={48}
            priority
            className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
          />
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-5 text-xs font-semibold tracking-wide text-[#434343]">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                style={isActive ? { color: "#FD550A" } : undefined}
                className={`relative py-1 ${!isActive ? "hover:text-[#FD550A] transition" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Request a Quote Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #FF6221 0%, #D9480D 100%)",
                fontFamily: "var(--font-inter)",
              }}
              className="text-white text-xs font-inter tracking-wider px-5 py-3 rounded-[9px] shadow-lg flex items-center space-x-2 cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <Image
                src="/images/arrow.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="w-3 h-3 object-contain"
              />
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#01286D] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-white border-t border-gray-100 shadow-md overflow-hidden"
          >
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-2">
              {navLinks.map((link, index) => {
                const isActive = isLinkActive(link.href);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={isActive ? { color: "#FD550A" } : undefined}
                      className={`block text-xs font-bold tracking-wide py-2.5 px-2 border-b border-gray-50 ${
                        !isActive ? "text-[#434343] hover:text-[#FD550A]" : ""
                      } transition`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-2">
                {/* Mobile Request a Quote Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background:
                        "linear-gradient(135deg, #FF6221 0%, #D9480D 100%)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                    className="text-white text-xs font-semibold tracking-wider px-5 py-3 rounded-[5px] shadow-lg flex items-center space-x-2 cursor-pointer"
                  >
                    <span>REQUEST A QUOTE</span>
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow"
                      width={12}
                      height={12}
                      className="w-3 h-3 object-contain"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
