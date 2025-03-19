"use client";
import React, { useEffect, useState } from "react";
import PackageCard from "./packageCard";
import Button from "../buttons/button";
import { useRouter } from "next/navigation";
import { HeaderSection } from "../headers/header";
import { getAllCountry, getAllTours } from "@/app/api/tour/action";
import { CountryType, TourDataType } from "@/app/types/tour";
import Loader from "../skeleton/loader";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";

const PackageSection = () => {
  const [active, setActive] = useState("Rwanda");
  const [navnarArr, setNavnarArr] = useState<CountryType[]>([]);
  const [packageList, setPackageList] = useState<TourDataType>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleNavigation = (location: string) => {
    router.push(`/destination?location=${location}`);
  };

  useEffect(() => {
    getAllCountryDestination();
    getAllTourPackages();
  }, []);

  const getAllCountryDestination = async () => {
    try {
      const result = await getAllCountry();
      if (result.success) setNavnarArr(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllTourPackages = async () => {
    setLoading(true);
    try {
      const result = await getAllTours();
      if (result.success) setPackageList(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Data", packageList[`${active}`]);
  return (
    <div
      id="package"
      className="max-w-[1750px] mx-auto p-8 w-full bg-slate-100 bg-opacity-20 flex flex-col gap-8"
    >
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <HeaderSection
          subtitle="Pefect Tour Packages"
          title="Special Offers"
          description="Discover Africa’s wonders with our expertly crafted tours. Experience
          captivating landscapes and vibrant cultures on unforgettable journeys."
        />

        <ul className="flex max-md:space-y-2 md:gap-8 items-end flex-wrap justify-evenly ">
          {navnarArr?.map((location) => (
            <li
              onClick={() => setActive(location.name)}
              className={`${
                active === location.name
                  ? "bg-primaryGreen text-white duration-500 "
                  : "text-primaryBlue"
              } p-2 cursor-pointer text-sm font-medium rounded hover:bg-primaryGreen hover:text-white duration-500`}
              key={location.id}
            >
              {location.name}
            </li>
          ))}
        </ul>
      </div>
      {loading ? (
        <Loader />
      ) : !packageList[`${active}`] ? (
        <div className="flex text-3xl font-bold text-primaryGreen gap-4 items-center min-h-[200px] w-full justify-center">
          Packages Not Available
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 items-stretch w-full justify-center">
          {packageList[`${active}`]?.map((item) => (
            <PackageCard
              key={item.id}
              id={item.id}
              location={item.location}
              days={item.duration_days}
              image={item.main_image || ImagePlaceholder}
              people={`${item.min_people}-${item.max_people}`}
              rate={item.rating}
              name={item.title}
              route={item.location}
            />
          ))}
          <div className="text-white w-full flex items-center justify-center">
            <div onClick={() => handleNavigation(active)}>
              <Button name={"View All Tours"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageSection;
