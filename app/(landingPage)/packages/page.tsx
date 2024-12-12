"use client"
import React from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import gorilla from "@/public/images/burundi.jpg";
import { useSearchParams } from "next/navigation";
import { HeaderSection, SingleHeaderSection } from "../components/headers/header";
import { filterPackages } from "@/app/helpers/filter";
import { PackageList } from "@/app/constants/arrays";
import { Icon } from "@iconify/react/dist/iconify.js";
import Accordion from "../components/headers/accordion";

const PackagesPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") as string;
  const location = searchParams.get("location") as string;
  const packageName = decodeURIComponent(name);
  const packageLocation = decodeURIComponent(location)

const packag= filterPackages(PackageList,{location:packageLocation, packageName,})
  return (
    <LandingPage>
      <div className="">
        <PageHero image={gorilla} title="Packages" />
        <div className="max-w-[1750px] mx-auto p-8 flex-col flex gap-8">
         <div className="w-full lg:w-3/5 flex flex-col gap-4">
        <SingleHeaderSection title="Overview"/>
          <p className="text-black opacity-70">{packag?.desc}</p>
          <span className="text-xl font-semibold text-primaryGreen flex gap-8">
            <span className="flex items-center gap-1">
            <Icon icon="lsicon:time-one-filled" width="24" height="24" className="text-primaryGreen"  />
              <h2 className="text-primaryBlue">Best time to visit:</h2>
              {packag?.period}
            </span>
            <span className="flex items-center gap-1">
            <Icon icon="mdi:calendar-outline" width="24" height="24" className="text-primaryGreen" />
              <h2 className="text-primaryBlue">Duration:</h2>
              {packag?.days} Days
            </span>
          </span>
         </div>
          <HeaderSection subtitle="Day by Day Itinerary" title=""/>
           <Accordion items={packag?.activity}/>
        </div>
      </div>
    </LandingPage>
  );
};

export default PackagesPage;
