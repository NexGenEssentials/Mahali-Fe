"use client";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import React, { useState } from "react";
import car from "@/public/images/car2.jpg";
import { CarDetails } from "@/app/constants/arrays";
import CarCard from "@/app/(landingPage)/components/service/carRental/carCard";
import { GetProps, Input, Select, Space, Table } from "antd";
import Image from "next/image";
import { searchCarDetails } from "@/app/helpers/filter";
import { motion } from "motion/react";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

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
  const [carList, setCarList] = useState(CarDetails);
  const [carName, setCarName] = useState("");
  const [carCategory, setCategory] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const onSearch: SearchProps["onSearch"] = (value) => {
    value.length > 0 && setShow(true);
    setCarName(value);
    setCarList(
      searchCarDetails({
        name: value,
        category: carCategory,
        price: carPrice,
      })
    );
  };

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
            <ul className=" w-full md:w-1/2 flex items-center justify-center gap-8 p-4 border-b">
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
              <div className="my-8 w-full flex flex-col gap-8 justify-center ">
                <div className="bg-primaryGreen p-8 w-full flex items-center justify-center rounded-lg ">
                  <div key={refresh} className="flex gap-4 items-end flex-wrap text-primaryBlue">
                    <div className="flex flex-col gap-1">
                      <Search
                        placeholder="search by car name"
                        allowClear
                        size="large"
                        onSearch={onSearch}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="place"
                        className="text-xs text-primaryWhite font-medium pl-2"
                      >
                        TYPE
                      </label>
                      <Space wrap>
                        <Select
                          defaultValue="All"
                          allowClear
                          size="large"
                          onChange={(value) => {
                            console.log({ value });
                            value && setShow(true);
                            setCategory(value);
                            setCarList(
                              searchCarDetails({
                                name: carName,
                                category: value,
                                price: carPrice,
                              })
                            );
                          }}
                          options={[
                            { value: "Sedan" },
                            { value: "Hatchback" },
                            { value: "SUV" },
                            { value: "Mini Van" },
                            { value: " Van" },
                            { value: "Wagon" },
                            { value: "Coupe" },
                            { value: "Bus" },
                            { value: "Mini Bus" },
                            { value: "Convertible" },
                            { value: "Others" },
                          ]}
                          className="w-full min-w-40"
                        />
                      </Space>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="place"
                        className="text-xs text-primaryWhite font-medium pl-2"
                      >
                        PRICES
                      </label>
                      <Space wrap>
                        <Select
                          defaultValue="All"
                          allowClear
                          onChange={(value) => {
                            value && setShow(true);
                            setCarPrice(value);
                            setCarList(
                              searchCarDetails({
                                name: carName,
                                category: carCategory,
                                price: value,
                              })
                            );
                          }}
                          size="large"
                          options={[
                            { value: "$0-50" },
                            { value: "$51-100" },
                            { value: "$101-151" },
                            { value: "$200" },
                          ]}
                          className="w-full min-w-40"
                        />
                      </Space>
                    </div>
                    {show && (
                      <motion.button
                        onClick={() => {
                          setCarName("");
                          setCarPrice("");
                          setCategory("");
                          setShow(false);
                          setRefresh(Math.random())
                          setCarList(
                            searchCarDetails({
                              name: "",
                              category: "",
                              price: "",
                            })
                          );
                        }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-primaryGreen border-2 border-white px-4 py-2 rounded-md text-white text-sm hover:border-opacity-60 hover:text-opacity-60 font-medium"
                      >
                        Clear Filters X
                      </motion.button>
                    )}
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center flex-wrap justify-center   ">
                  {carList.map((car, index) => (
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
              </div>
            )}

            {service === "Pricing" && (
              <div className="w-full my-8 overflow-x-scroll ">
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
