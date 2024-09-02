import React from "react";
import Hero from "../components/home/Hero";
import WhyUsSection from "@/components/home/WhyUsSection";
import CallToAction from "@/components/home/CallToAction";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyUsSection />
      <CallToAction />
    </>
  );
};

export default Home;
