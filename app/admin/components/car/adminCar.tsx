"use client";
import React, { useEffect, useState } from "react";
import CarRentalTable from "./carRentalTable";
import { motion } from "motion/react";
import { SquarePen } from "lucide-react";
import { CarResponse } from "@/app/types";
import { getAllCars } from "@/app/api/carRental/action";
import Loader from "@/app/(landingPage)/components/skeleton/loader";

function AdminCarRentalApp() {
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

  const [loading, setLoading] = useState(true);
  const [carList, setCarList] = useState<CarResponse>({
    status: "",
    data: [],
    message: "",
    description: "",
  });

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

  const handleDelete = (id: number) => {
    console.log("Delete car with id:", id);
  };

  const handleUpdate = (car: any) => {
    console.log("Update car:", car);
  };

  const handleView = (car: any) => {
    console.log("View car:", car);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );

  return (
    <div className=" bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-4 w-full px-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 ">
            Car Rental Fleet
          </h1>
          <motion.span
            whileHover={{ scale: 0.9 }}
            className="p-3 rounded-md text-white hover:bg-primaryGreen bg-primaryGreen/70 cursor-pointer font-bold flex gap-2"
          >
            Add New Car <SquarePen />
          </motion.span>
        </div>
        <CarRentalTable
          data={carList}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onView={handleView}
        />
      </div>
    </div>
  );
}

export default AdminCarRentalApp;
