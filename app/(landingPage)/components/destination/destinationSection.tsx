"use client";
import { Destination } from "@/app/constants/arrays";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const DestinationSection = () => {
  const router = useRouter();
  const handleNavigation = (location: string) => {
    router.push(`/destination?location=${location}`);
  };
  return (
    <section className="max-sm:hidden max-w-[1750px] mx-auto p-8 w-full">
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="text-defaultGreen flex items-center gap-2">
          <span className="h-[2px] w-12 block bg-defaultGreen"></span>
          <h2 className="font-semibold text-lg leading-8 tracking-normal">
            Our Destination
          </h2>
          <span className="h-[2px] w-12 block bg-defaultGreen"></span>
        </div>
        <h1 className="text-4xl font-bold ">Explore Top Destination</h1>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center py-8">
        {Destination?.map((location, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(location?.location || "Unknown")}
            className="group relative w-[300px] h-[200px] overflow-hidden cursor-pointer flex items-center justify-center"
          >
            <Image
              src={location?.image || "/placeholder.jpg"} // Provide a fallback image
              alt={location?.location || "Destination"}
              fill={true}
              className="object-cover group-hover:scale-125 group-hover:duration-500 bg-white"
            />
            <div className="absolute bg-black bg-opacity-40 group-hover:bg-opacity-60 group-hover:duration-500 m-4 py-14 px-[80px] text-primaryWhite flex flex-col items-center justify-center">
              <span className="text-sm font-semibold">
                {location?.location || "Unknown"}
              </span>
              <span className="text-xs">{location?.park || "0"} Places</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
