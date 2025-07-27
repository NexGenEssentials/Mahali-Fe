"use client";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import React, { useEffect, useState } from "react";
import car from "@/public/images/car2.jpg";
import CarCard from "@/app/(landingPage)/components/service/carRental/carCard";
import { Button, Select, Space, Table, TableProps } from "antd";
import Image from "next/image";
import { motion } from "motion/react";
import { getAllCars } from "@/app/api/carRental/action";
import { CarData, CarResponse } from "@/app/types";
import { Eye } from "lucide-react";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";
import Link from "next/link";
import Loader from "@/app/(landingPage)/components/skeleton/loader";
import { getCarByName } from "@/app/helpers/filter";
import { Icon } from "@iconify/react/dist/iconify.js";
import CarBookingForm from "@/app/(landingPage)/components/service/carRental/bulkCar";

const CarNav = ["All Cars", "Pricing", "Book In Bulk"];

const Columns: TableProps<CarData>["columns"] = [
  {
    title: () => <span className="whitespace-nowrap">Cars</span>,
    key: "car",
    render: (record: CarData) => {
      return (
        <div className=" relative w-44 h-32 overflow-hidden">
          <img
            src={record.first_image || ""}
            alt={`${record.brand} ${record.name}`}
            className="object-cover"
          />
          {/* <Image
            src={record.first_image || ImagePlaceholder}
            fill
            alt={`${record.brand} ${record.name}`}
            className="object-cover"
          /> */}
        </div>
      );
    },
  },
  {
    title: () => <span className="whitespace-nowrap">Name</span>,
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: () => <span className="whitespace-nowrap">Category</span>,
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
  },
  {
    title: () => <span className="whitespace-nowrap">Mileage</span>,
    dataIndex: "mileage",
    key: "mileage",
    sorter: (a, b) => a.mileage - b.mileage,
    render: (mileage) => `${mileage.toLocaleString()} mi`,
  },
  {
    title: () => <span className="whitespace-nowrap">Price of Rent</span>,
    dataIndex: "price_per_day",
    key: "price_per_day",
    sorter: (a, b) => {
      const aPrice = parseFloat(a.price_per_day.replace("$", ""));
      const bPrice = parseFloat(b.price_per_day.replace("$", ""));
      return aPrice - bPrice;
    },
  },
  {
    title: () => <span className="whitespace-nowrap">Number of Seats</span>,
    dataIndex: "seats",
    key: "seats",
    sorter: (a, b) => a.seats - b.seats,
  },
  {
    title: () => <span className="whitespace-nowrap">Year</span>,
    dataIndex: "year",
    key: "year",
    sorter: (a, b) => a.year - b.year,
  },
  {
    title: () => <span className="whitespace-nowrap">Fuel Type</span>,
    dataIndex: "fuel_type",
    key: "fuel_type",
    sorter: (a, b) => a.fuel_type.localeCompare(b.fuel_type),
  },
  {
    title: () => <span className="whitespace-nowrap">Transmission</span>,
    dataIndex: "transmission",
    key: "transmission",
    sorter: (a, b) => a.transmission.localeCompare(b.transmission),
  },
  {
    title: () => <span className="whitespace-nowrap">Luggage Capacity</span>,
    dataIndex: "luggage_capacity",
    key: "luggage_capacity",
    sorter: (a, b) => a.luggage_capacity - b.luggage_capacity,
  },
  {
    title: () => <span className="whitespace-nowrap">Actions</span>,
    key: "actions",
    render: (_, record) => (
      <Link href={`/service/car-rental/${record.id}`}>
        <Button
          icon={<Eye size={16} />}
          className="flex items-center !bg-primaryGreen !py-6 !text-white"
        >
          View Details
        </Button>
      </Link>
    ),
  },
];

const AllCars = () => {
  const [service, setService] = useState("All Cars");
  const [carList, setCarList] = useState<CarResponse>({
    status: "",
    data: [],
    message: "",
    description: "",
  });
  const [carParamsList, setParmsCarList] = useState<CarData[] | undefined>([]);
  const [fuelType, setfuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [searchParams, setSearchParams] = useState<{
    fuelType?: string;
    transmission?: string;
  }>({});

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 1) {
      setShow(true);
    } else {
      setShow(false);
    }
    const result = getCarByName(value, carList.data);
    setParmsCarList(result);
    setSearchItem(value);
    setShow(true);
  };

  useEffect(() => {
    getAllCarList();
  }, [searchParams]);

  const getAllCarList = async () => {
    setLoading(true);
    try {
      const cars = await getAllCars(searchParams);
      setCarList(cars);
      setParmsCarList(cars.data);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong", { error });
    }
  };

  return (
    <LandingPage>
      <div>
        <ServicePageHero
          image={car.src as string}
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
              <div className=" my-3 sm:my-8 w-full flex flex-col gap-8 justify-center">
                <div className="bg-primaryGreen p-3 sm:p-8 w-full flex items-center justify-center rounded-lg ">
                  <div
                    key={refresh}
                    className="flex gap-4 items-end flex-wrap text-primaryBlue"
                  >
                    <div className="flex justify-between px-3 gap-1 bg-white rounded-full overflow-hidden items-center">
                      <input
                        type="text"
                        placeholder="search by car name"
                        value={searchItem}
                        onChange={(e) => handleSearch(e)}
                        className="px-2 py-3 focus-within:outline-none focus:outline-none border-r-2"
                      />
                      <Icon icon="ix:search" width="24" height="24" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="place"
                        className="text-xs text-primaryWhite font-medium pl-2"
                      >
                        Fuel Type
                      </label>
                      <Space wrap>
                        <Select
                          defaultValue="Select"
                          allowClear
                          size="large"
                          onChange={(value) => {
                            value && setShow(true);
                            setfuelType(value);
                            setSearchParams({
                              fuelType: value,
                              transmission: transmission,
                            });
                          }}
                          options={[
                            { value: "Petrol" },
                            { value: "Diesel" },
                            { value: "Electric" },
                          ]}
                          className="w-full min-w-32 sm:min-w-40"
                        />
                      </Space>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="place"
                        className="text-xs text-primaryWhite font-medium pl-2"
                      >
                        Transimission
                      </label>
                      <Space wrap>
                        <Select
                          defaultValue="Select"
                          allowClear
                          onChange={(value) => {
                            value && setShow(true);
                            setTransmission(value);
                            setSearchParams({
                              fuelType: fuelType,
                              transmission: value,
                            });
                          }}
                          size="large"
                          options={[
                            { value: "Automatic" },
                            { value: "Manual" },
                          ]}
                          className="w-full min-w-32 sm:min-w-40"
                        />
                      </Space>
                    </div>
                    {show && (
                      <motion.button
                        onClick={() => {
                          setTransmission("");
                          setfuelType("");
                          setShow(false);
                          setRefresh(Math.random());
                          setSearchItem("");
                          setSearchParams({
                            fuelType: "",
                            transmission: "",
                          });
                        }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-primaryGreen border-2 border-white px-4 py-2 rounded-md text-white text-sm hover:border-opacity-60 hover:text-opacity-60 font-medium"
                      >
                        Clear Filters X
                      </motion.button>
                    )}
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center flex-wrap justify-center  ">
                  {loading ? (
                    <Loader />
                  ) : carParamsList && carParamsList?.length > 0 ? (
                    carParamsList?.map((car) => (
                      <div
                        className="w-full md:w-[20%] max-lg:min-w-[300px]"
                        key={car.id}
                      >
                        <CarCard
                          id={car.id}
                          car={car.first_image}
                          year={car.year}
                          name={car.name}
                          category={car.category}
                          price={car.price_per_day}
                          period={"Day"}
                          transimission={car.transmission}
                          location={car.location}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="my-8 w-full h-[200px] flex flex-col gap-8 justify-center text-center">
                      <h1 className="text-primaryGreen font-bold text-2xl p-4">
                        Car is not available
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            )}

            {service === "Pricing" && (
              <div className="w-full my-8 overflow-x-auto">
                <Table
                  dataSource={carList.data}
                  columns={Columns}
                  rowKey="id"
                  pagination={{
                    pageSize: 5,
                    showTotal: (total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`,
                  }}
                />
              </div>
            )}

            {service === "Book In Bulk" && <CarBookingForm />}

            {service === "Reviews" && (
              <div className="my-8 w-full flex flex-col gap-8 justify-center text-center">
                <h1 className="text-primaryGreen font-bold text-2xl p-4">
                  Reviews are not available
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default AllCars;
