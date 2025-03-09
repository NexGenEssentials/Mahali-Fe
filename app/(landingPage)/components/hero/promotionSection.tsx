"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";
import { ServiceOptions } from "@/app/constants/arrays";
import {
  AccommodationForm,
  CarRenTalForm,
  EventsManagementForm,
  PackagesForm,
} from "./forms/servicesForm";

const PromotionSection = () => {
  const [selectedService, setSelectedService] = useState(
    "Holiday & Tour Packages"
  );
  const handleChange = (value: string) => {
    setSelectedService(value);
  };
  return (
    <section className="max-w-[1750px] mx-auto relative w-full md:px-8 flex items-center max-md:my-4 justify-center md:mb-40 z-40">
      <div className="md:absolute flex flex-col gap-4 w-full md:w-[90%] bg-primaryGreen md:shadow-md md:shadow-slate-500 text-primaryWhite p-8 rounded-md ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            2025 Great Migration Season is Here!
          </h1>
          <p className="text-xs w-full md:3/4 lg:w-1/2 font-extralight leading-relaxed tracking-wide">
            Book top Mahali Africa holiday and tours package now at special
            discounted rates – only available for paid reservations made by
            February 05, 2025.
          </p>
        </div>
        <div className=" flex items-start max-md:flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="place"
              className="text-xs text-primaryWhite font-medium pl-2"
            >
              SERVICE
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
          {selectedService === "Accommodation Booking" && <AccommodationForm />}
          {selectedService === "Holiday & Tour Packages" && <PackagesForm />}
          {selectedService === "Gorilla & Chimpanzee Trekking" && (
            <PackagesForm />
          )}
          {selectedService === "Car Rentals" && <CarRenTalForm />}
          {selectedService === "Events Management" && <EventsManagementForm />}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
