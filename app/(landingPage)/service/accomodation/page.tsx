"use client";
import React from "react";
import LandingPage from "../../landingPageTamplates";
import ServicePageHero from "../../components/service/serviceHeroSection";
import accom from "@/public/images/accom1.jpg";
import accom1 from "@/public/images/accom2.webp";
import { AccomodationForm } from "../../components/hero/forms/servicesForm";
import Search, { SearchProps } from "antd/es/input/Search";
import { HeaderSection } from "../../components/headers/header";
import { motion } from "motion/react";
import AccomGalleryCard from "../../components/service/accomodation/accomGalleryCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accommodations } from "@/app/constants/arrays";
import { getPopularAccommodations } from "@/app/helpers/filter";
import Link from "next/link";

const AccomodationService = () => {
  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  const PopulaArray = getPopularAccommodations();
  return (
    <LandingPage>
      <ServicePageHero
        image={accom}
        service="Accomodation"
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />
      <div className="max-w-[1750px] mx-auto flex flex-col w-full gap-8">
        <section className=" relative w-full md:px-8 flex items-center max-md:my-4 justify-center md:mb-40 z-40">
          <div className="md:absolute flex flex-col gap-4 w-full md:w-[90%] bg-primaryGreen md:shadow-md md:shadow-slate-500 text-primaryWhite p-8 rounded-md ">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">
                2025 Great Migration Season is Here!
              </h1>
              <p className="text-xs w-full md:3/4 lg:w-1/2 font-extralight leading-relaxed tracking-wide">
                Book top Mahali Africa holiday and tours package now at special
                discounted rates – only available for paid reservations made by
                December 29, 2024.
              </p>
            </div>
            <div className="w-full flex items-end max-md:flex-wrap gap-4">
              <div className="flex flex-col gap-1">
                <Search
                  placeholder="search by location..."
                  allowClear
                  size="large"
                  onSearch={onSearch}
                />
              </div>
              <AccomodationForm />
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col">
          <HeaderSection
            title="Accomodation"
            subtitle="Choose a category of your choice"
          />
          <div className=" bg-slate-50 p-8 rounded-md flex gap-4 flex-wrap items-center justify-center">
            {Accommodations.map((category, index) => (
              <Link href={`/service/accomodation/${category.category}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className="cursor-pointer w-fit px-8 py-4 relative text-primaryWhite font-semibold text-base flex gap-2 bg-primaryGreen rounded-md"
              >
                <span className="text-nowrap">{category.category}</span>
                <span className="bg-white text-xs text-primaryGreen w-5 h-5 flex items-center justify-center rounded-full absolute top-2 right-2">
                  {category.details.length}
                </span>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">
          <HeaderSection
            title="Make A Reservation"
            subtitle="Most Popular Stays"
            description="Explore the top accommodations our guests rave about and book your favorite stay today!"
          />
          <div className="p-8 flex gap-6 flex-wrap items-start justify-center">
            {PopulaArray.map((accomodation, index) => (
              <div
                key={index}
                className="md:w-[25%] w-full flex flex-col gap-2"
              >
                <AccomGalleryCard
                  Gallery={accomodation.gallery}
                />
                <div className="flex flex-col gap-2 text-sm cursor-pointer">
                  <div className="flex justify-between items-center gap-2 ">
                    <span className="font-bold hover:text-opacity-70 hover:duration-500 uppercase text-base text-primaryGreen">
                      {accomodation.name}
                    </span>
                    <span className="flex ">
                      <Icon
                        icon="material-symbols-light:star-rounded"
                        width="20"
                        height="20"
                        className="text-primaryGreen"
                      />
                      {accomodation.rating}({accomodation.reviews})
                    </span>
                  </div>
                  <span className="text-primaryBlue">
                    {accomodation.location}
                  </span>
                  <span className="text-slate-500 font-light text-xs">
                    {accomodation.description}
                  </span>
                  <div className="w-full ">
                    <span className="text-base text-primaryGreen font-semibold">
                      {accomodation.price}
                    </span>{" "}
                    Night
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default AccomodationService;
