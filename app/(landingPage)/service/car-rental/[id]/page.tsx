"use client";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import React, { useEffect, useState } from "react";
import { getCarByName } from "@/app/helpers/filter";
import ThumbsGallery from "@/app/(landingPage)/components/service/carRental/thumbsGallery";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/app/(landingPage)/components/buttons/button";
import { HeaderSection } from "@/app/(landingPage)/components/headers/header";
import CarTypes from "@/app/(landingPage)/components/service/carRental/carTypes";
import { getSingleCar } from "@/app/api/carRental/action";
import { SingleCarType } from "@/app/types";
import { StaticImageData } from "next/image";
import Loading from "@/app/loading";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";
import { useAppContext } from "@/app/context";

const CarDetails = ({ params }: { params: { id: string } }) => {
  const carId = decodeURIComponent(params.id);
  const [carInfo, setCarInfo] = useState<SingleCarType>({
    car: {} as StaticImageData,
    gallery: undefined,
    spec: null,
    id: 0,
    features: [],
    first_image: {} as StaticImageData,
    images: [],
    related_cars: [],
    owner: 0,
    name: "",
    brand: "",
    category: "",
    year: 0,
    mileage: 0,
    fuel_type: "Petrol",
    transmission: "Automatic",
    seats: 0,
    luggage_capacity: 0,
    price_per_day: "0.00",
    is_available: false,
    status: "",
    description: "",
  });
  const [loading, setloading] = useState(true);
 const {setActiveModalId}=useAppContext()

  useEffect(() => {
    getCarByName();
  }, []);

  const getCarByName = async () => {
    setloading(true);
    try {
      const result = await getSingleCar(carId);
      if (carInfo) {
        setCarInfo(result);
      }
    } catch (error) {
      console.log("Something went wrong:", error);
    } finally {
      setloading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <LandingPage>
      <ServicePageHero
        image={carInfo?.car}
        service={carInfo?.name!}
        title="Fast & Easy Way To Rent A Car"
        desc="Experience the fastest and easiest way to rent a car. Reliable, affordable, and tailored to your journey—book your ride in just a few clicks!"
      />
      <div className="max-w-[1750px] mx-auto w-full flex flex-col gap-8 p-8">
        <div className="w-full flex max-md:flex-wrap gap-4 ">
          <div className="w-full md:w-1/2 p-2">
            <ThumbsGallery images={carInfo?.images} />
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 p-2">
            <span className="text-slate-400 text-lg font-semibold uppercase">
              {carInfo?.category}
            </span>
            <span className="text-primaryGreen text-2xl font-semibold">
              {carInfo?.name}
            </span>
            <p className="text-black opacity-70 leading-relaxed text-sm mt-5 text-center">
              {carInfo?.description}
            </p>
            <div
              onClick={() => setActiveModalId("bookCarModel")}
              className="w-full text-white grid place-content-center my-4"
            >
              <Button name="Book Now" />
            </div>
            <div className="flex flex-wrap gap-6  w-full items-center justify-center">
              {/* {carInfo?.spec.map((spec, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center min-w-20  lg:min-w-60"
                >
                  <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                    <Icon
                      icon={spec.icon}
                      width="30"
                      height="30"
                      className="text-primaryGreen"
                    />
                  </span>
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-slate-400 text-sm font-semibold ">
                      {spec.name}
                    </span>
                    <span className="text-slate-900 text-xs font-semibold ">
                      {spec.value}
                    </span>
                  </span>
                </div>
              ))} */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <HeaderSection subtitle="" title="Features" />
          <div className="w-2/3 flex flex-wrap gap-2 ">
            {carInfo?.features?.map((feat, index) => (
              <div
                key={index}
                className={`${
                  feat.available
                    ? "bg-primaryGreen text-white"
                    : "bg-white text-slate-400"
                }  rounded-md text-xs border p-2`}
              >
                {feat.feature}
              </div>
            ))}
          </div>
        </div>
        <div>
          <HeaderSection subtitle="Related Cars" title="Choose Car" />
          <CarTypes />
        </div>
      </div>
    </LandingPage>
  );
};

export default CarDetails;
