"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "../../landingPageTamplates";
import PageHero from "../../components/hero/pageHero";
import gorilla from "@/public/images/burundi.jpg";
import {
  HeaderSection,
  SingleHeaderSection,
} from "../../components/headers/header";
import { Icon } from "@iconify/react/dist/iconify.js";
import Accordion from "../../components/headers/accordion";
import PackageCard from "../../components/package/packageCard";
import Image from "next/image";
import InquiryForm from "../../components/package/form";
import { TourPackageType } from "@/app/types/tour";
import { getSingleTour } from "@/app/api/tour/action";
import { ExternalServices, PackageList } from "@/app/constants/arrays";

const PackagesPage = ({ params }: { params: { id: string } }) => {
  const [packag, setPackag] = useState<TourPackageType | null>(null);

  useEffect(() => {
    getPackageData();
  }, []);

  const getPackageData = async () => {
    try {
      const result = await getSingleTour(params.id);
      if (result.success) setPackag(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LandingPage>
      <div className="">
        <PageHero image={gorilla} title="Packages" />
        <div className="max-w-[1750px] mx-auto p-4 sm:px-16 sm:py-8 flex-col flex gap-8">
          <div className="w-full flex flex-col gap-4">
            <SingleHeaderSection title="Overview" />
            <div className="text-sm flex items-start max-lg:flex-wrap justify-center gap-2 sm:gap-8">
              <p className="w-full lg:w-1/3 text-black opacity-70 ">
                {packag?.description}
              </p>
              <div className="w-full lg:w-2/3 flex flex-wrap items-start gap-4 font-semibold">
                <span className="text-sm  text-primaryGreen flex flex-col gap-3 ">
                  <span className="flex items-start gap-2">
                    <Icon
                      icon="lsicon:time-one-filled"
                      width="20"
                      height="20"
                      className="text-primaryGreen"
                    />
                    <h2 className="text-primaryBlue text-nowrap">
                      Best time to visit:
                    </h2>
                    {packag?.best_time_to_visit}
                  </span>
                  <span className="flex items-start gap-2">
                    <Icon
                      icon="mdi:calendar-outline"
                      width="20"
                      height="20"
                      className="text-primaryGreen"
                    />
                    <h2 className="text-primaryBlue">Duration:</h2>
                    {packag?.min_people} Days {packag?.duration_nights} Nights
                  </span>
                  <span className="flex items-start gap-2">
                    <Icon
                      icon="material-symbols:hotel-class-outline"
                      width="20"
                      height="20"
                      className="text-primaryGreen"
                    />
                    <h2 className="text-primaryBlue">Rates:</h2>
                    <div className="flex gap-1">
                      {Array(Math.round(Number(packag?.rating || 0)))
                        .fill(null)
                        .map((_, index) => (
                          <Icon
                            key={index}
                            icon="material-symbols-light:star"
                            width="20"
                            height="20"
                            className="text-primaryGreen"
                          />
                        ))}
                    </div>
                  </span>
                </span>
                <span className="text-sm  text-primaryGreen flex flex-col gap-3 ">
                  <span className="flex items-start gap-2">
                    <Icon
                      icon="mdi:account-group"
                      width="20"
                      height="20"
                      className="text-primaryGreen"
                    />
                    <h2 className="text-primaryBlue">People:</h2>
                    {packag?.min_people}- {packag?.max_people}
                  </span>
                  <span className="flex items-start gap-2">
                    <Icon
                      icon="solar:route-outline"
                      width="20"
                      height="20"
                      className="text-primaryGreen"
                    />
                    <h2 className="text-primaryBlue">Location:</h2>
                    {packag?.location}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-stretch justify-center max-lg:flex-wrap gap-8">
            <div className="w-full lg:w-2/3 max-lg:flex-wrap flex flex-col gap-4">
              <SingleHeaderSection title="Tour Plan" />
              <Accordion items={packag?.tour_plans} />
              {/* <div>
                {packag?.gallery?.length! > 0 && (
                  <div className="flex flex-col gap-8">
                    <SingleHeaderSection title="Tour Gallery" />
                    <div className="flex w-full flex-wrap items-stretch gap-2">
                      {packag?.gallery &&
                        packag?.gallery?.map((img, idx) => (
                          <div
                            key={idx}
                            className=" w-full md:w-[250px] h-[200px]  bg-primaryGreen overflow-hidden rounded-md grayscale hover:grayscale-0"
                          >
                            <Image
                              src={img.src}
                              alt={packag?.name}
                              fill
                              className="rounded-md w-full h-full hover:scale-110 hover:duration-500 object-cover"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div> */}

              <div className="flex items-start flex-wrap text-sm font-medium mt-6 gap-4">
                <ul className="flex flex-col ">
                  <div className="mb-4">
                    <SingleHeaderSection title="Inclusion" />
                  </div>
                  {ExternalServices?.inclusion?.map((inclu, index) => (
                    <li
                      key={index}
                      className="flex items-end gap-1 text-black opacity-70"
                    >
                      <Icon
                        icon="mynaui:check-solid"
                        width="20"
                        height="20"
                        className="text-primaryGreen"
                      />
                      {inclu}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col">
                  <div className="mb-4">
                    <SingleHeaderSection title="Exclusion" />
                  </div>
                  {ExternalServices?.exclusion?.map((exclu, index) => (
                    <li
                      key={index}
                      className="flex items-end gap-1 text-black opacity-70"
                    >
                      <Icon
                        icon="iconoir:cancel"
                        width="20"
                        height="20"
                        className="text-red-500"
                      />
                      {exclu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 gap-8  flex flex-col">
              <SingleHeaderSection title="Tour Inquiry" />
              <div className="bg-slate-100 flex flex-col">
                <h2 className="text-white font-semibold p-4 bg-primaryGreen text-center w-full">
                  Book Now
                </h2>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1750px] mx-auto p-8 flex-col flex gap-4">
          <HeaderSection title="Suggestions" subtitle="Related Tour" />
          {/* <div className="flex flex-wrap gap-8 items-start  justify-center py-6 ">
            {PackageList.map((item, index) => (
              <div
                key={index}
                className={`${
                  location === item.location
                    ? "flex flex-wrap gap-8 items-stretch  justify-center py-6 "
                    : "hidden"
                } `}
              >
                {location === item.location &&
                  item.package.map((pack, index) => (
                    <PackageCard
                      key={index}
                      location={location}
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
          </div> */}
        </div>
      </div>
    </LandingPage>
  );
};

export default PackagesPage;
