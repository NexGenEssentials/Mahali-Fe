"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import React from "react";
import GalerrySection from "./gallery";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="max-w-[1750px] mx-auto p-2 md:p-8 ">
      <div className="flex max-lg max-lg:flex-wrap gap-4 w-full overflow-hidden">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full lg:w-1/2"
        >
          <div className="text-defaultGreen flex items-center gap-2">
            <h2 className="font-semibold text-lg leading-8 tracking-normal">
              ABOUT US
            </h2>
            <span className="h-[2px] w-12 block bg-defaultGreen"></span>
          </div>
          <h2 className="text-4xl font-bold text-primaryBlue font-sans">
            Welcome to{" "}
            <span className="text-primaryGreen tracking-tight font-sans">
              MAHALI AFRICA
            </span>
          </h2>
          <p className="text-sm relative">
            <span className="text-primaryGreen text-3xl font-serif absolute -left-2 -top-2 ">
              <Icon icon="ri:single-quotes-l" width="24" height="24" />
            </span>
            <span className="pl-4">
              A tour and travel agency based in Rwanda, stands out for its
              expertise in crafting personalized adventures, including safaris
              and cultural exploration. With a team deeply rooted in Africa,
              they provide unique insights and take travelers off the beaten
              path. Safety is paramount, with experienced guides and strict
              standards. Their focus is on creating unforgettable experiences,
              such as witnessing the Big Five on safari and exploring vibrant
              marketplaces, making them a top choice for African travel.
            </span>
            <span className="w-full grid place-content-center">
             <Link href={'/about'}> <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="p-2 my-2 text-center hover:bg-primaryGreen hover:text-primaryWhite mx-auto rounded-md border border-defaultGreen text-xs font-medium"
              >
                Read More ...
              </motion.button>
              </Link>
            </span>
          </p>
          <div className="flex items-start gap-4 max-lg:flex-wrap">
            <div className="flex gap-2 items-start ">
              <span className="bg-defaultGreen p-4 w-16 h-16">
                <Icon
                  icon="fa-solid:money-check-alt"
                  width="35"
                  height="25"
                  className="text-white"
                />
              </span>
              <span>
                <h3 className="font-semibold text-sm">Affordability</h3>{" "}
                <p className="text-xs">
                  Providing excellence at affordable prices.
                </p>
              </span>
            </div>
            <div className="flex gap-2 items-start ">
              <span className="bg-defaultGreen p-4 w-16 h-16">
                <Icon
                  icon="fa6-solid:award"
                  width="35"
                  height="35"
                  className="text-white"
                />
              </span>
              <span>
                <h3 className="font-semibold text-sm">Best Services</h3>{" "}
                <p className="text-xs">
                  Superior assistance with a commitment to customer delight.
                </p>
              </span>
            </div>
            <div className="flex gap-2 items-start ">
              <span className="bg-defaultGreen p-4 w-16 h-16">
                <Icon
                  icon="game-icons:africa"
                  width="35"
                  height="35"
                  className="text-white"
                />
              </span>
              <span>
                <h3 className="font-semibold text-sm">Africa Coverage</h3>{" "}
                <p className="text-xs">
                  Extensive African reach with unique travel experiences.
                </p>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center-center gap-4 w-full lg:w-1/2"
        >
          <h1 className="w-full font-semibold text-lg leading-8 tracking-normal text-primaryGreen text-center">
            Our Gallery
          </h1>
          <GalerrySection />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
