"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

interface packageType {
  id: number;
  image: StaticImageData | string;
  days: string;
  people: string;
  rate: number;
  name: string;
  route: string;
  location?: string;
  price:string;
}
const PackageCard = ({
  id,
  days,
  image,
  name,
  people,
  rate,
  route,
  location,
  price
}: packageType) => {
  const router = useRouter();

  const handleNavigation = (name: string) => {
    router.push(`/packages/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      onClick={() => handleNavigation(name)}
      className="group w-[400px] max-w-md min-w-[300px] cursor-pointer h-auto drop-shadow-md border border-opacity-25 bg-gray-100 bg-opacity-20"
    >
      <div className="relative h-[200px] w-full flex items-end justify-center ">
        <Image src={image} alt={name} fill={true} className="object-cover" />
        <div className="absolute text-sm -bottom-5 grow w-full lg:w-[90%] drop-shadow-md bg-white p-4 flex justify-evenly items-center gap-2">
          <span className="flex items-center gap-1 ">
            {" "}
            <Icon
              icon="bx:calendar"
              width="16"
              height="16"
              className="text-primaryGreen"
            />{" "}
            {days} days
          </span>
          <span className="flex items-center gap-1 ">
            {" "}
            <Icon
              icon="formkit:people"
              width="16"
              height="16"
              className="text-primaryGreen"
            />{" "}
            {people} People
          </span>
          <span className="flex items-center gap-1 ">
            {" "}
            <Icon
              icon="mdi:location"
              width="16"
              height="16"
              className="text-primaryGreen"
            />{" "}
            {location}
          </span>
        </div>
      </div>
      <div className="p-6 mt-4 flex flex-col gap-2 ">
        <div className="flex items-stretch justify-between">
          <div className="flex gap-1">
            {Array(Math.floor(rate))
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
          <span className="flex items-start gap-1 font-semibold text-slate-600 text-sm">
            <Icon
              icon="solar:dollar-bold"
              width="20"
              height="20"
              className="text-primaryGreen"
            />
            {Number(price).toLocaleString() || 0}
          </span>
        </div>

        <span
          onClick={() => handleNavigation(name)}
          className="text-xl font-semibold group-hover:text-primaryGreen cursor-pointer"
        >
          {name}
        </span>
        <span className="flex items-center gap-1 text-sm text-black text-opacity-50">
          {" "}
          <Icon
            icon="solar:flag-bold"
            width="24"
            height="24"
            className="text-primaryGreen"
          />
          {route}
        </span>
      </div>
    </motion.div>
  );
};

export default PackageCard;
