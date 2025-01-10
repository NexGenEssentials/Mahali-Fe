"use client";
import { SingleHeaderSection } from "@/app/(landingPage)/components/headers/header";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import { findAccommodationByName } from "@/app/helpers/filter";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useState } from "react";

const navBar = [
  "Overview",
  "Facilities",
  "Info & Prices",
  "House Rules",
  "Guest Reviews",
];
const accommodationName = async ({ params }: { params: { name: string } }) => {
  const name = decodeURIComponent(params.name);
  const AccomDetails = findAccommodationByName(name);
  const [selectedSection, setSelectedSection] = useState("Overview");
  const [like, setLike] = useState(false);
  return (
    <LandingPage>
      <ServicePageHero
        image={AccomDetails?.gallery[0]!}
        service={`${name}`}
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />
      <div className="max-w-[1750px] mx-auto flex flex-col w-full items-center gap-8 p-8">
        {/* navbar */}
        <div className="w-3/4 flex items-center justify-between gap-4 border-b mx-auto">
          {navBar.map((item, index) => (
            <a href={`#${item}`} key={index}>
              <div
                onClick={() => setSelectedSection(item)}
                className={`${
                  selectedSection === item
                    ? "border-b-2 border-b-primaryGreen font-bold"
                    : ""
                } text-sm px-8 pb-4 cursor-pointer `}
              >
                {item}
              </div>
            </a>
          ))}
        </div>
        <div className="w-full flex flex-col space-y-4">
          {/* title */}
          <div className="flex items-center justify-between gap-4 py-2">
            <span className="flex flex-col">
              <h1 className="text-lg font-semibold uppercase text-primaryGreen mb-0">
                {AccomDetails?.name}
              </h1>
              <h3 className="text-xs text-slate-500 inline-flex items-end space-x-2">
                <Icon
                  icon="mdi:location"
                  width="16"
                  height="16"
                  onClick={() => setLike(true)}
                  className="cursor-pointer"
                />
                {AccomDetails?.address}, {AccomDetails?.location}
              </h3>
            </span>
            <span className="flex items-center gap-3 text-primaryGreen">
              {like ? (
                <Icon
                  icon="weui:like-filled"
                  width="24"
                  height="24"
                  className="text-primaryGreen cursor-pointer"
                  onClick={() => setLike(false)}
                />
              ) : (
                <Icon
                  icon="weui:like-outlined"
                  width="24"
                  height="24"
                  onClick={() => setLike(true)}
                  className="cursor-pointer"
                />
              )}
              <Icon icon="ri:share-line" width="24" height="24" />
              <button className="p-2 bg-primaryGreen rounded-md text-sm text-white font-medium">
                {" "}
                Reserve
              </button>
            </span>
          </div>
          {/* Gallery */}
          <div className="w-full h-96  flex gap-2 overflow-hidden justify-between rounded-lg cursor-pointer">
            <div className=" w-full md:w-1/2 h-full  overflow-hidden">
              <Image
                src={AccomDetails?.gallery[0]!}
                alt={AccomDetails?.name!}
                className="object-cover w-full h-full hover:scale-110 hover:duration-700 "
              />
            </div>
            <div className="relative max-md:hidden w-1/2 h-full grid grid-cols-2 gap-2 overflow-hidden">
              {AccomDetails?.gallery.map((image, index) => (
                <div key={index} className="w-full h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={AccomDetails?.name!}
                    className="object-cover w-full h-full hover:scale-110 hover:duration-700"
                  />
                </div>
              ))}
              <div className="absolute flex items-center gap-1 bg-primaryGreen text-white font-semibold p-2 bottom-3 right-5 text-sm rounded-md hover:scale-90 hover:duration-300 cursor-pointer">
                <Icon icon="line-md:grid-3-filled" width="16" height="16" />{" "}
                Show All photos
              </div>
            </div>
          </div>
          {/* Description */}
          <div id="Overview" className="w-3/4 flex flex-col gap-1 ">
            <SingleHeaderSection title="Description" />
            <p className="text-slate-600 text-sm">
              {" "}
              {AccomDetails?.moreDescription}
            </p>
          </div>
          <div id="Facilities" className="w-3/4 flex flex-col gap-1 ">
            <SingleHeaderSection title="Most popular facilities" />
            <ul className="place-content-end lg:w-3/5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500">
              {AccomDetails?.amenality.map((amty, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✔</span>
                  {amty}
                </li>
              ))}
            </ul>
          </div>
          {/* availability */}
          <div id="Info & Prices" className="w-3/4 flex flex-col">
            <SingleHeaderSection title="Check The Availability" />
            <p className="text-xs text-slate-500 inline-flex items-end gap-1">
            <Icon icon="si:warning-line" width="16" height="16" />
              Select dates to see this property's availability and prices</p>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default accommodationName;
