"use client";
import React from "react";
import LandingPage from "../../landingPageTamplates";
import ServicePageHero from "../../components/service/serviceHeroSection";
import car from "@/public/images/car2.jpg";
import { CarHero, CarService } from "@/app/constants/arrays";
import CarRentalForm from "../../components/service/carRental/carForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../components/buttons/button";
import { HeaderSection } from "../../components/headers/header";
import Image from "next/image";
import aboutImage from "@/public/images/carService1.jpg";
import CarTypes from "../../components/service/carRental/carTypes";
import Link from "next/link";
const CarRental = () => {
  return (
    <LandingPage>
      <div>
        <ServicePageHero
          image={car}
          service="car-rental"
          title="Fast & Easy Way To Rent A Car"
          desc="Experience the fastest and easiest way to rent a car. Reliable, affordable, and tailored to your journey—book your ride in just a few clicks!"
        />
        <div className="relative max-w-[1750px] mx-auto w-full">
          <div className="relative -top-20 left-0 flex max-lg:flex-col w-full items-center justify-center">
            <div className="bg-slate-100 max-lg:w-3/4 w-1/4 rounded-lg">
              <h1 className="bg-primaryGreen text-white rounded-t-lg p-4 w-full text-center font-bold text-lg">
                Make your trip
              </h1>
              <CarRentalForm />
            </div>
            <div className="bg-white p-8 drop-shadow-lg max-lg:w-3/4 max-lg:rounded-lg w-1/2 flex-col flex gap-4 rounded-r-lg">
              <h1 className="text-primaryBlue font-semibold text-2xl">
                Better Way to Rent Your Perfect Cars
              </h1>
              <div className="flex items-center justify-center gap-4">
                {CarHero.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-20 h-20 p-2 rounded-full border flex items-center justify-center">
                      <Icon
                        icon={item.icon}
                        width="40"
                        height="40"
                        className="text-defaultGreen"
                      />
                    </div>
                    <div className="text-primaryBlue font-semibold text-center ">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-white">
                <Button name="Reserver Your Perfect Car" />
              </div>
            </div>
          </div>
        </div>

        {/* about and service section */}
        <div className="max-w-[1750px] mx-auto w-full flex flex-col gap-10">
          {/* about us on car rental */}
          <div className="w-full bg-opacity-50 flex items-stretch">
            <div className="max-md:hidden relative w-[40%] bg-white p-8">
              <Image
                src={aboutImage}
                alt="about car rental image"
                className="relative h-full left-20 object-cover"
              />
            </div>
            <div className="max-md:w-full w-[50%] bg-primaryGreen text-white p-8 md:px-20 md:py-16 flex flex-col gap-2">
              <h1 className="font-semibold text-xl capitalize">
                About car rental service
              </h1>
              <h2 className="font-semibold text-3xl capitalize">
                Welcome to Mahali Africa Car Rental{" "}
              </h2>
              <p className="text-sm text-slate-200">
                Welcome to Mahali Africa Car Rental, your trusted partner for
                seamless and reliable car rental services across Africa. Whether
                you're planning a business trip, a family vacation, or an
                adventure to explore breathtaking landscapes, we provide a wide
                range of well-maintained vehicles to suit your every need.{" "}
                <br /> With competitive rates, flexible rental options, and
                exceptional customer service, we ensure your journey is safe,
                comfortable, and stress-free. At Mahali Africa, we pride
                ourselves on delivering excellence and convenience, making your
                travel experience memorable and hassle-free. <br /> Book with us
                today and drive with confidence wherever your journey takes you!
              </p>
              <div className="text-white border rounded-md w-fit mt-4">
                <Button name="Choose a Vehicle" />
              </div>
            </div>
          </div>
          {/* service us on car rental */}
          <div>
            <HeaderSection
              title={"Services"}
              subtitle={"Our Latest Services"}
            />
            <div className="flex items-center justify-evenly p-8 flex-wrap">
              {CarService.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 hover:duration-300 hover:border hover:border-primaryGreen hover:rounded-lg p-4"
                >
                  <div className=" bg-primaryGreen w-20 h-20 p-2 rounded-full border flex items-center justify-center">
                    <Icon
                      icon={item.icon}
                      width="40"
                      height="40"
                      className="text-white"
                    />
                  </div>
                  <div className="text-primaryBlue font-semibold text-center ">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Feeatured Vehicles*/}
          <div className="bg-slate-100 bg-opacity-20 p-8">
            <HeaderSection
              title={"What we offer"}
              subtitle={"Featured Vehicles"}
            />
            <CarTypes />
            <div className="w-full text-white flex items-center justify-center">
              <Link href={"/service/car-rental/all"}>
                <Button name={"View All Our Cars"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default CarRental;


// All cars and pricing table and customer review
// single car with its details
