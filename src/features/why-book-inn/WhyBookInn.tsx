import React from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { VisionSection } from "./components/VisionSection";
import { CTASection } from "./components/CTASection";

const WhyBookInn = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <VisionSection />
      <CTASection />
    </div>
  );
};

export default WhyBookInn;
