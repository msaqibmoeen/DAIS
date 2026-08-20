"use client";

import React from "react";
import Header from "@/components/landing/Header";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurEvolution from "@/components/about/OurEvolution";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import IndustriesWeServe from "@/components/about/IndustriesWeServe";
import SublimeFamily from "@/components/about/SublimeFamily";

export default function AboutPage() {
  return (
    <div className="w-full bg-white overflow-hidden flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <AboutHero />
        <WhoWeAre />
        <OurEvolution />
        <MissionVision />
        <CoreValues />
        <Leadership />
        <IndustriesWeServe />
        <SublimeFamily />
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
