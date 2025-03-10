"use client";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import React, { useEffect, useState } from "react";
import car from "@/public/images/car2.jpg";
import CarCard from "@/app/(landingPage)/components/service/carRental/carCard";
import {
  Button,
  Flex,
  GetProps,
  Input,
  Select,
  Space,
  Spin,
  Table,
  TableProps,
} from "antd";
import Image from "next/image";
import { motion } from "motion/react";
import { getAllCars } from "@/app/api/carRental/action";
import { CarData, CarResponse } from "@/app/types";
import ZoomableImage from "@/app/(landingPage)/components/images/zoomImage";
import { Eye } from "lucide-react";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";
import Link from "next/link";
import Loader from "@/app/(landingPage)/components/skeleton/loader";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const CarNav = ["All Cars", "Pricing", "Reviews"];

const Columns: TableProps<CarData>["columns"] = [
  {
    title: () => <span className="whitespace-nowrap">Cars</span>,
    key: "car",
    render: (record: CarData) => {
      return (
        <div className=" relative w-44 h-32 overflow-hidden">
          <Image
            src={record.first_image || ImagePlaceholder}
            fill
            alt={`${record.brand} ${record.name}`}
            className="object-cover"
          />
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
  const [carName, setCarName] = useState("");
  const [carCategory, setCategory] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [searchParams, setSearchParams] = useState<{
    brand?: string;
    fuelType?: string;
    transmission?: string;
    seats?: string;
    availability?: boolean;
    carName?: string;
    ordering?: string;
  }>({
    carName: "",
    brand: "",
    seats: "",
  });

  const onSearch: SearchProps["onSearch"] = async (value) => {
    value.length > 0 && setShow(true);
    setCarName(value);
    setSearchParams({
      carName: value,
      brand: carCategory,
      seats: carPrice,
    });
  };

  useEffect(() => {
    getAllCarList();
  }, [searchParams]);

  const getAllCarList = async () => {
    setLoading(true);
    try {
      const cars = await getAllCars(searchParams);
      setCarList(cars);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong", { error });
    }
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
                  <div
                    key={refresh}
                    className="flex gap-4 items-end flex-wrap text-primaryBlue"
                  >
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
                            value && setShow(true);
                            setCategory(value);

                            setSearchParams({
                              carName: carName,
                              brand: value,
                              seats: carPrice,
                            });
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
                        Seats
                      </label>
                      <Space wrap>
                        <Select
                          defaultValue="All"
                          allowClear
                          onChange={(value) => {
                            value && setShow(true);
                            setCarPrice(value);

                            setSearchParams({
                              carName: carName,
                              brand: carCategory,
                              seats: value,
                            });
                          }}
                          size="large"
                          options={[
                            { value: "4" },
                            { value: "5" },
                            { value: "6" },
                            { value: "7" },
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
                          setRefresh(Math.random());
                          setSearchParams({
                            carName: carName,
                            brand: carCategory,
                            seats: carPrice,
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
                <div className="w-full flex gap-4 items-center flex-wrap justify-center   ">
                  {loading ? (
                    <Loader/>
                  ) : (
                    carList?.data?.map((car, index) => (
                      <div className="w-full md:w-[30%]" key={index}>
                        <CarCard
                          id={car.id}
                          car={car.first_image || ImagePlaceholder}
                          year={car.year}
                          name={car.name}
                          category={car.category}
                          price={car.price_per_day}
                          period={"Day"}
                          transimission={car.transmission}
                        />
                      </div>
                    ))
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
