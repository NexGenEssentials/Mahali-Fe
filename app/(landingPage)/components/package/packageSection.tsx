"use client";
import React, { useEffect, useState } from "react";
import PackageCard from "./packageCard";
import Button from "../buttons/button";
import { usePathname, useRouter } from "next/navigation";
import { HeaderSection } from "../headers/header";
import { getAllCountry, getAllTours } from "@/app/api/tour/action";
import { CountryType, TourDataType } from "@/app/types/tour";
import Loader from "../skeleton/loader";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";
import ButtonComponent from "../buttons/buttonIcon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppContext } from "@/app/context";


const PackageSection = () => {
  const [active, setActive] = useState("Rwanda");
  const [navnarArr, setNavnarArr] = useState<CountryType[]>([]);
  const [packageList, setPackageList] = useState<TourDataType>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { setActiveModalId, isLogin } = useAppContext();

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

  const handleCreatePackage = async () => {
    if (isLogin) {
      setActiveModalId("Custom Package");
    } else {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  };

  return (
    <>
      <div
        id="package"
        className="max-w-[1750px] mx-auto p-4 md:p-8 w-full bg-slate-100 bg-opacity-20 flex flex-col gap-8"
      >
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <HeaderSection
            subtitle="Perfect Tour Packages"
            title="Special Offers"
            description="Discover Africa’s wonders with our expertly crafted tours. Experience
          captivating landscapes and vibrant cultures on unforgettable journeys."
          />

          <ul className="w-full mx-auto flex gap-2 p-2 sm:gap-8 items-center justify-evenly sm:justify-center overflow-x-scroll max-md:bg-slate-100 max-md:rounded-full hide-scrollbar">
            <li
              onClick={() => setActive("Custom Packages")}
              className={`${
                active === "Custom Packages"
                  ? "bg-primaryGreen text-white duration-500 "
                  : "text-primaryBlue"
              } p-2 cursor-pointer text-nowrap text-sm font-medium max-md:rounded-full rounded hover:bg-primaryGreen hover:text-white duration-500`}
              key={"custome"}
            >
              {"Custom Packages"}
            </li>
            {navnarArr?.map((location) => (
              <li
                onClick={() => setActive(location.name)}
                className={`${
                  active === location.name
                    ? "bg-primaryGreen text-white duration-500 "
                    : "text-primaryBlue"
                } p-2 cursor-pointer text-sm font-medium max-md:rounded-full rounded hover:bg-primaryGreen hover:text-white duration-500`}
                key={location.id}
              >
                {location.name}
              </li>
            ))}
          </ul>
        </div>
        {loading ? (
          <Loader />
        ) : active === "Custom Packages" ? (
          <div className="h-[400px] w-full max-w-6xl mx-auto bg-gray-50 rounded-lg flex items-center justify-center">
            <span onClick={handleCreatePackage}>
              <ButtonComponent
                title={"Create Custom Packages"}
                color="#667c3e"
                icon={<Icon icon="ic:round-add" width="24" height="24" />}
                iconPosition="right"
              />
            </span>
          </div>
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
                location={active}
                days={item.duration_days}
                image={item?.main_image || ImagePlaceholder}
                people={`${item.min_people}-${item.max_people}`}
                rate={item.rating}
                name={item.title}
                route={item.location}
                price={item.price}
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
    </>
  );
};

export default PackageSection;
