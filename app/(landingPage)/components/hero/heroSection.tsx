"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../buttons/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[750px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/Mahali.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to improve text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        className="absolute top-1/3 xl:left-1/4 p-4 lg:px-8 lg:py-4 text-white flex flex-col items-center justify-center  w-full xl:w-[40%] max-w-[1750px]"
      >
        <h1 className="max-sm:hidden text-4xl font-bold">Explore Nature with Us</h1>
        <p className="text-sm italic">
          &quot; Discover the beauty of untouched landscapes and breathtaking
          views. &quot;
        </p>
        <Link href={"/service"}>
          <Button name="Explore More" />
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
