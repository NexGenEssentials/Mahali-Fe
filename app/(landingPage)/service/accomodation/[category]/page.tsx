"use client";
import Button from "@/app/(landingPage)/components/buttons/button";
import CheckAvailability from "@/app/(landingPage)/components/service/accomodation/filters/checkAvailability";
import PriceFilter from "@/app/(landingPage)/components/service/accomodation/filters/price";
import RoomAmenities from "@/app/(landingPage)/components/service/accomodation/filters/roomAmenties";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import { filterByCategory } from "@/app/helpers/filter";
import accom1 from "@/public/images/accom3.jpg";
import Search, { SearchProps } from "antd/es/input/Search";
import Image from "next/image";
import React from "react";

const AccomodationCategory = async ({
  params,
}: {
  params: { category: string };
}) => {
  const category = decodeURIComponent(params.category);
  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };
  const Accommodations = filterByCategory(category);
  return (
    <LandingPage>
      <ServicePageHero
        image={accom1}
        service={`Accomodation/${category}`}
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />
      <div className="max-w-[1750px] mx-auto flex flex-col w-full items-center gap-8">
        <div className="flex flex-col gap-1 my-8 w-3/4">
          <Search
            placeholder="search by location..."
            allowClear
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="w-full flex gap-4 items-start max-lg:flex-wrap justify-center px-4 mb-8">
          {/* filters */}
          <div className="flex lg:flex-col gap-2">
            <CheckAvailability />
            <PriceFilter />
            <RoomAmenities />
          </div>
          {/* rooms */}
          <div className=" flex flex-col space-y-4">
            {Accommodations.map((accomod, index) => (
              <div
                key={index}
                className="group flex max-md:flex-wrap gap-4 border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white cursor-pointer"
              >
                {/* Image Section */}
                <div className="flex-shrink-0 max-md:w-full w-72 h-52 overflow-hidden  rounded-lg">
                  <Image
                    src={accomod.gallery[0]}
                    alt={accomod.name}
                    className="object-cover w-full h-full group-hover:scale-110 group-hover:duration-700 grayscale group-hover:grayscale-0"
                  />
                 
                </div>

                {/* Details Section */}
                <div className="flex flex-col max-md:w-full w-3/5 space-y-4">
                  <div className="flex space-x-4 items-center">
                    <span className="text-lg font-semibold text-primaryGreen">
                      {accomod.name}
                    </span>
                    <span className="text-sm text-yellow-700 font-medium">
                      ★ {accomod.rating} ({accomod.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {accomod.description}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center ">
                  <span className="mr-2 text-primaryGreen font-semibold">Location:</span>{accomod.location}
                  </span>
                  <ul className="place-content-end lg:w-3/5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500 mt-8">
                    {accomod.amenality.map((amty, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">✔</span>
                        {amty}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section */}
                <div className="p-4 self-center text-nowrap text-white">
                  <Button name="View More" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default AccomodationCategory;
