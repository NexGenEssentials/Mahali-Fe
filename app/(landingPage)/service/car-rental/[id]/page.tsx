"use client";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import React, { useEffect, useState } from "react";
import ThumbsGallery from "@/app/(landingPage)/components/service/carRental/thumbsGallery";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/app/(landingPage)/components/buttons/button";
import { HeaderSection } from "@/app/(landingPage)/components/headers/header";
import CarTypes from "@/app/(landingPage)/components/service/carRental/carTypes";
import { getCarFeatures, getSingleCar } from "@/app/api/carRental/action";
import { AllFeature, SingleCarType } from "@/app/types";
import { StaticImageData } from "next/image";
import Loading from "@/app/loading";
import { useAppContext } from "@/app/context";
import CarRentalForm from "@/app/(landingPage)/components/service/carRental/carForm";
import CenterModal from "@/app/(landingPage)/components/model/centerModel";
import { usePathname, useRouter } from "next/navigation";
import UserCarBookingInfoForm from "@/app/(landingPage)/components/service/carRental/bookACar";

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
  const [feature, setFeature] = useState<AllFeature[]>([]);
  const { setActiveModalId, showZoom, isLogin } = useAppContext();
  const [checkAvailability, setCheckAvailability] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    getCarByName();
    getCarAllFeatures();
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

  const getCarAllFeatures = async () => {
    try {
      const result = await getCarFeatures();
      if (result) setFeature(result);
    } catch (error) {
      alert("Something went wrong");
    }
  };
  const handleBooking = () => {
    if (isLogin) {
      setActiveModalId("bookCarModel");
    } else {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  };

  if (loading) return <Loading />;

  return (
    <LandingPage>
      <ServicePageHero
        image={carInfo?.first_image}
        service={carInfo?.name}
        title="Fast & Easy Way To Rent A Car"
        desc="Experience the fastest and easiest way to rent a car. Reliable, affordable, and tailored to your journey—book your ride in just a few clicks!"
      />
      <div className="absolute bottom-36 md:top-[275px] right-20 z-40 ">
        <div className="bg-slate-100 w-full rounded-lg">
          <h1 className="bg-primaryGreen text-white rounded-t-lg p-4 w-full text-center font-bold md:text-lg">
            Check Availability
          </h1>
          <CarRentalForm id={carInfo.id} available={setCheckAvailability} />
        </div>
      </div>
      <div className="max-w-[1750px] mx-auto w-full flex flex-col gap-8 p-3 sm:p-8">
        <div className="w-full flex max-md:flex-wrap gap-4 ">
          <div className="w-full md:w-1/2 p-2">
            <ThumbsGallery images={carInfo?.images} />
          </div>
          <div className="flex flex-col sm:items-center w-full md:w-1/2 p-2">
            <div className="flex sm:justify-center items-end md:w-3/5 gap-4">
              <div className="flex flex-col">
                <span className="text-slate-400 text-lg font-semibold uppercase">
                  {carInfo?.category}
                </span>
                <span className="text-primaryGreen text-2xl font-semibold">
                  {carInfo?.name}
                </span>
              </div>
              <span className="inline-flex">
                <strong className="text-primaryGreen text-xl">
                  $<span className="">{carInfo.price_per_day}</span>/{"day"}
                </strong>
              </span>
            </div>
            <p className="text-black opacity-70 leading-relaxed text-sm mt-5 sm:text-center">
              {/* {carInfo?.description} */}
              "The Mercedes-Benz E-Class is a symbol of luxury, performance, and
              innovation. Renowned for its sophisticated design, this premium
              sedan combines cutting-edge technology with unparalleled comfort
              and advanced safety features. Whether for business or pleasure,
              the E-Class offers a prestigious driving experience.",
            </p>

            {checkAvailability ? (
              <div
                onClick={handleBooking}
                className="w-full text-white grid place-content-center my-4"
              >
                <Button name="Book Now" />
              </div>
            ) : (
              <button className="cursor-not-allowed border rounded-md border-slate-300 text-slate-300 py-3 px-6 my-4">
                Book Now
              </button>
            )}

            <div className="grid max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-2 items-center min-w-20">
                <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                  <Icon
                    icon={"bi:speedometer2"}
                    width="30"
                    height="30"
                    className="text-primaryGreen"
                  />
                </span>
                <span className="flex flex-col justify-center items-center">
                  <span className="text-slate-400 text-sm font-semibold ">
                    Mileage
                  </span>
                  <span className="text-slate-900 text-xs font-semibold ">
                    {carInfo.mileage.toLocaleString()}
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-20">
                <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                  <Icon
                    icon={"icon-park-twotone:manual-gear"}
                    width="30"
                    height="30"
                    className="text-primaryGreen"
                  />
                </span>
                <span className="flex flex-col justify-center items-center">
                  <span className="text-slate-400 text-sm font-semibold ">
                    Transmission
                  </span>
                  <span className="text-slate-900 text-xs font-semibold ">
                    {carInfo.transmission}
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-20">
                <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                  <Icon
                    icon={"icon-park-twotone:baby-car-seat"}
                    width="30"
                    height="30"
                    className="text-primaryGreen"
                  />
                </span>
                <span className="flex flex-col justify-center items-center">
                  <span className="text-slate-400 text-sm font-semibold ">
                    Seats
                  </span>
                  <span className="text-slate-900 text-xs font-semibold ">
                    {carInfo.seats}
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-20">
                <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                  <Icon
                    icon={"fluent-emoji-high-contrast:fuel-pump"}
                    width="30"
                    height="30"
                    className="text-primaryGreen"
                  />
                </span>
                <span className="flex flex-col justify-center items-center">
                  <span className="text-slate-400 text-sm font-semibold ">
                    Fuel
                  </span>
                  <span className="text-slate-900 text-xs font-semibold ">
                    {carInfo.fuel_type}
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-20">
                <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                  <Icon
                    icon={"bi:luggage-fill"}
                    width="30"
                    height="30"
                    className="text-primaryGreen"
                  />
                </span>
                <span className="flex flex-col justify-center items-center">
                  <span className="text-slate-400 text-sm font-semibold ">
                    Luggage
                  </span>
                  <span className="text-slate-900 text-xs font-semibold ">
                    {carInfo.luggage_capacity}
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-20">
                <span className="h-16 w-16 rounded-full border p-2 flex items-center justify-center">
                  <Icon
                    icon={"carbon:hybrid-networking"}
                    width="30"
                    height="30"
                    className="text-primaryGreen"
                  />
                </span>
                <span className="flex flex-col justify-center items-center">
                  <span className="text-slate-400 text-sm font-semibold ">
                    Hybrid
                  </span>
                  <span className="text-slate-900 text-xs font-semibold ">
                    {carInfo.fuel_type === "Hybrid" ? "Yes" : "No"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <HeaderSection subtitle="" title="Features" />
          <div className=" w-full lg:w-2/3 flex flex-wrap gap-2">
            {feature?.map((feat) => {
              const isCarFeature = carInfo?.features.some(
                (carfeat) => carfeat.id === feat.id
              );
              return (
                <div
                  key={feat.id}
                  className={`${
                    isCarFeature
                      ? "bg-primaryGreen text-white"
                      : "bg-white text-slate-400"
                  } rounded-md text-xs border p-2`}
                >
                  {feat.name}
                </div>
              );
            })}
          </div>
        </div>
        {carInfo.related_cars.length > 0 && (
          <div>
            <HeaderSection subtitle="Related Cars" title="Choose Car" />
            <CarTypes featuredCar={carInfo.related_cars} />
          </div>
        )}
      </div>
      <CenterModal
        children={
          <UserCarBookingInfoForm
            price={Number(carInfo.price_per_day)}
            carId={carInfo.id}
          />
        }
        id={"bookCarModel"}
      />
    </LandingPage>
  );
};

export default CarDetails;
