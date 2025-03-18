"use client";
import React, { useState } from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import gorilla from "@/public/images/Gorilla2.jpg";
import {HeaderSection} from "../components/headers/header";
import { navnarArr } from "../components/package/packageSection";
import SingleDestination from "../components/destination/singleDestination";
import { useSearchParams } from "next/navigation";

const Destination = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const [active, setActive] = useState<string>(location ? location : "Rwanda");
  return (
    <LandingPage>
      <div className="">
        {/* Page Header Section */}
        <PageHero image={gorilla} title="Destination" />
        <div className="max-w-[1750px] mx-auto w-full bg-slate-100 bg-opacity-20 p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <HeaderSection
              title="Our Destination"
              subtitle="Explore Top Destination"
            />
            <p className=" w-full md:w-3/4 mx-auto flex items-center justify-center text-sm text-slate-400">
              Discover Africa’s wonders with our expertly crafted tours.
              Experience captivating landscapes and vibrant cultures on
              unforgettable journeys.
            </p>
          </div>

          {/* Navigation Bar for Destinations */}
          <ul className="w-full sm:w-3/4 mx-auto flex gap-2 sm:gap-8 items-center justify-start sm:justify-center overflow-x-scroll ">
            {navnarArr.map((location, index) => (
              <li
                key={index}
                onClick={() => setActive(location)}
                className={`${
                  active === location
                    ? "bg-primaryGreen text-white duration-500"
                    : "text-primaryBlue"
                } p-2 cursor-pointer text-sm font-medium rounded hover:bg-primaryGreen hover:text-white duration-500`}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>

        {/* Content for Selected Destination */}
        <div className="max-w-[1750px] mx-auto w-full p-8">
          <SingleDestination country={active} />
        </div>
      </div>
    </LandingPage>
  );
};

export default Destination;
