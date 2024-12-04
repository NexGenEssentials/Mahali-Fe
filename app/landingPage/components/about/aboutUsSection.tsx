import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="max-w-[1750px] mx-auto p-8 ">
      <div className="flex max-lgflex-wrap gap-4 w-full">
        <div className="flex flex-col gap-4 w-full md:w-3/5">
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
                <h3 className="font-semibold text-sm">Competitive Pricing</h3>{" "}
                <p className="text-xs">
                  Delivering quality at cost-effective rates to attract and
                  retain customers.
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
                  Exceptional support with a focus on customer satisfaction.
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
                  Extensive reach across Africa, offering diverse and unique
                  travel experiences.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center-center gap-4 w-2/5">
          <h1 className="w-full font-semibold text-lg leading-8 tracking-normal text-primaryGreen text-center">
            Gallery
          </h1>
          <div className="relative w-full h-[300px] border p-4 rounded-md">
            <Image src={'/images/nyungwe3.jpg'} alt='nyungwe park' fill={true} className="object-cover rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
