"use client";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import React, { useState } from "react";
import car from "@/public/images/car2.jpg";
import { CarDetails } from "@/app/constants/arrays";
import CarCard from "@/app/(landingPage)/components/service/carRental/carCard";
import Link from "next/link";
import { Table } from "antd";
import Image from "next/image";

const CarNav = ["All Cars", "Pricing", "Reviews"];
const Columns = [
  {
    title: "Cars",
    key: "car",
    render: (record: (typeof CarDetails)[0]) => {
      return (
        <Image
          src={record.car}
          alt="car image"
          height={100}
          width={200}
          className="object-contain"
        />
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Period",
    dataIndex: "period",
    key: "period",
  },
  {
    title: "Transmission",
    dataIndex: "transmission",
    key: "transmission",
  },
];

const AllCars = () => {
  const [service, setService] = useState("All Cars");

  return (
    <LandingPage>
      <div>
        <ServicePageHero
          image={car}
          service="All Cars"
          title="Fast & Easy Way To Rent A Car"
          desc="Experience the fastest and easiest way to rent a car. Reliable, affordable, and tailored to your journey—book your ride in just a few clicks!"
        />
        <div className="max-w-[1750px] mx-auto w-full  flex flex-col gap-8 p-8">
          <div className="flex flex-col  items-center justify-center w-full">
            <ul className="w-1/2 flex items-center justify-center gap-8 p-4 border-b">
              {CarNav.map((title, index) => (
                <li
                  onClick={() => setService(title)}
                  key={index}
                  className={` ${
                    service === title ? "text-primaryGreen" : "text-slate-400"
                  } font-semibold text-sm cursor-pointer`}
                >
                  {title}
                </li>
              ))}
            </ul>

            {service === "All Cars" && (
              <div className="w-full flex gap-4 items-center flex-wrap justify-center  my-8 ">
                {CarDetails.map((car, index) => (
                  <div className="w-full md:w-[30%]" key={index}>
                    <CarCard
                      car={car.car}
                      name={car.name}
                      category={car.category}
                      price={car.price}
                      period={car.period}
                      transimission={car.transmission}
                    />
                  </div>
                ))}
              </div>
            )}

            {service === "Pricing" && (
              <div className="w-full   my-8 ">
                <Table dataSource={CarDetails} columns={Columns} />
              </div>
            )}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default AllCars;

// All cars and pricing table and customer review
