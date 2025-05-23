"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";
import { PromotionContentMap, ServiceOptions } from "@/app/constants/arrays";
import {
  AccommodationForm,
  CarRenTalForm,
  EventsManagementForm,
  PackagesForm,
} from "./forms/servicesForm";
import { useAppContext } from "@/app/context";
import { usePathname, useRouter } from "next/navigation";
import ButtonComponent from "../buttons/buttonIcon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const PromotionSection = () => {
  const [selectedService, setSelectedService] = useState(
    "Holiday & Tour Packages"
  );
  const { isLogin, setActiveModalId, activeModalId } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    setSelectedService(value);
  };

  const handleCreatePackage = async () => {
    if (isLogin) {
      setActiveModalId("Custom Package");
    } else {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  };

  const handleExploreMore = () => {
    router.push("/service");
  };

  const servicesWithForms = [
    "Holiday & Tour Packages",
    "Gorilla & Chimpanzee Trekking",
    "Accommodation Booking",
    "Car Rentals",
    "Events Management",
    "Custom Package",
  ];

  return (
    <section className="max-sm:hidden max-w-[1750px] mx-auto relative w-full md:px-8 flex items-center max-md:my-4 justify-center lg:mb-40 z-40">
      <div className="lg:absolute flex flex-col gap-4 w-full md:w-[90%] bg-primaryGreen md:shadow-md md:shadow-slate-500 text-primaryWhite p-8 rounded-md ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            {PromotionContentMap[selectedService]?.title}
          </h1>
          <p className="text-sm w-full md:3/4 lg:w-2/3 font-extralight leading-relaxed tracking-wide">
            {PromotionContentMap[selectedService]?.description}
          </p>
        </div>
        <div
          className={`${
            selectedService === "Custom Package" ? "items-end" : "items-start"
          } flex max-md:flex-wrap gap-4`}
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="place"
              className="text-xs text-primaryWhite font-medium pl-2"
            >
              SERVICES
            </label>
            <Space wrap>
              <Select
                defaultValue="Holiday & Tour Packages"
                size="large"
                onChange={handleChange}
                options={ServiceOptions}
                className="w-full min-w-60"
              />
            </Space>
          </div>
          {selectedService === "Custom Package" && (
            <span onClick={handleCreatePackage}>
              <ButtonComponent
                title={"Create Custom Packages"}
                color="#667c3e"
                icon={<Icon icon="ic:round-add" width="24" height="24" />}
                iconPosition="right"
              />
            </span>
          )}
          {selectedService === "Accommodation Booking" && <AccommodationForm />}
          {selectedService === "Holiday & Tour Packages" && <PackagesForm />}
          {selectedService === "Gorilla & Chimpanzee Trekking" && (
            <PackagesForm />
          )}
          {selectedService === "Car Rentals" && <CarRenTalForm />}
          {selectedService === "Events Management" && <EventsManagementForm />}
          {!servicesWithForms.includes(selectedService) && (
            <motion.button
              onClick={handleExploreMore}
              type="button"
              whileTap={{ scale: 0.95 }}
              className="bg-white px-4 py-2 rounded-md text-primaryGreen self-end text-sm font-medium border border-white hover:bg-opacity-90 transition"
            >
              Explore More
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
