"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import gorilla from "@/public/images/Gorilla2.jpg";
import { HeaderSection } from "../components/headers/header";
import SingleDestination from "../components/destination/singleDestination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CountryType } from "@/app/types/tour";
import { getAllCountry } from "@/app/api/tour/action";
import { useAppContext } from "@/app/context";

const Destination = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const [active, setActive] = useState<string>(location ? location : "Rwanda");
  const [navnarArr, setNavnarArr] = useState<CountryType[]>([]);
  const [activeId, setActiveId] = useState(6);
  const pathname = usePathname();
  const router = useRouter();
  const { setActiveModalId, isLogin } = useAppContext();

  useEffect(() => {
    getAllCountryDestination();
  }, []);

  const getAllCountryDestination = async () => {
    try {
      const result = await getAllCountry();
      if (result.success) setNavnarArr(result.data);
    } catch (error) {
      console.log(error);
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
    <LandingPage>
      <div className="">
        {/* Page Header Section */}
        <PageHero image={gorilla} title="Destination" />
        <div className="max-w-[1750px] mx-auto w-full bg-slate-100 bg-opacity-20 p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <HeaderSection
              title="Our Destinations"
              subtitle="Explore Top Destinations"
            />
            <p className=" w-full md:w-3/4 mx-auto flex items-center justify-center text-sm text-slate-400">
              Discover Africa’s wonders with our expertly crafted tours.
              Experience captivating landscapes and vibrant cultures on
              unforgettable journeys.
            </p>
          </div>

          {/* Navigation Bar for Destinations */}
          <ul className="w-full lg:w-3/4 mx-auto flex gap-2 sm:gap-8 items-center justify-evenly sm:justify-center overflow-x-scroll max-md:bg-slate-100 max-md:rounded-full hide-scrollbar p-2">
            <li
              onClick={() => {
                setActive("Custom Package");
                handleCreatePackage();
              }}
              className={`${
                active === "Custom Package"
                  ? "bg-primaryGreen text-white duration-500 "
                  : "text-primaryBlue"
              } p-2 cursor-pointer text-sm text-nowrap font-medium max-md:rounded-full rounded hover:bg-primaryGreen hover:text-white duration-500`}
              key={"custome"}
            >
              {"Custom Packages"}
            </li>
            {navnarArr.map((location, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(location.name);
                  setActiveId(location.id);
                }}
                className={`${
                  active === location.name
                    ? "bg-primaryGreen text-white duration-500"
                    : "text-primaryBlue"
                } p-2 cursor-pointer text-sm font-medium max-md:rounded-full rounded hover:bg-primaryGreen hover:text-white duration-500`}
              >
                {location.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Content for Selected Destination */}
        <div className="max-w-[1750px] mx-auto w-full p-8">
          <SingleDestination country={active} countryId={activeId} />
        </div>
      </div>
    </LandingPage>
  );
};

export default Destination;
