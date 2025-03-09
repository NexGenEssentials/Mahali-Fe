"use client";
import React, { useState } from "react";
import PackageCard from "./packageCard";
import { PackageList } from "@/app/constants/arrays";
import Button from "../buttons/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeaderSection } from "../headers/header";

export const navnarArr = ["Rwanda", "Tanzania", "Kenya", "Uganda", "Burundi", "DRC"];
const PackageSection = () => {
  const [active, setActive] = useState("Rwanda");
  const router = useRouter();
  const handleNavigation = (location: string) => {
    router.push(`/destination?location=${location}`);
  };
  return (
    <div
      id="package"
      className="max-w-[1750px] mx-auto p-8 w-full bg-slate-100 bg-opacity-20 flex flex-col gap-8"
    >
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <HeaderSection subtitle="Pefect Tour Packages" title="Special Offers" description="Discover Africa’s wonders with our expertly crafted tours. Experience
          captivating landscapes and vibrant cultures on unforgettable journeys."/>
        <ul className="flex max-md:space-y-2 md:gap-8 items-end flex-wrap justify-evenly ">
          {navnarArr.map((location, index) => (
            <li
              onClick={() => setActive(location)}
              className={`${
                active === location
                  ? "bg-primaryGreen text-white duration-500 "
                  : "text-primaryBlue"
              } p-2 cursor-pointer text-sm font-medium rounded hover:bg-primaryGreen hover:text-white duration-500`}
              key={index}
            >
              {location}
            </li>
          ))}
        </ul>
      </div>
      {PackageList.map((item, index) => (
        <div
          key={index}
          className={`${
            active === item.location
              ? "flex flex-wrap gap-8 items-stretch  justify-center py-6 "
              : "hidden"
          } `}
        >
          {active === item.location &&
            item.package.map((pack, index) => (
              <PackageCard
                key={index}
                location={active}
                days={pack.days}
                image={pack.image}
                people={pack.people}
                rate={pack.rate}
                name={pack.name}
                route={pack.route}
              />
            ))}
        </div>
      ))}
      <div className="text-white w-full flex items-center justify-center">
        <div onClick={() => handleNavigation(active)}>
          <Button name={"View All Tours"} />
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
