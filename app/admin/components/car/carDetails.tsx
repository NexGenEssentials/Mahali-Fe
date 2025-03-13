import React from "react";
import Image from "next/image";
import { CarData } from "@/app/types";
import imagePlacholder from "@/public/images/imagePlaceholder.jpg";

const CarDetails = ({ car }: { car?: CarData }) => {
  return (
    <div className="p-6 lg:min-w-[700px] mx-auto max-h-[70vh] overflow-y-scroll">
      {/* Car Main Image */}
      <div className="p-4 rounded-lg shadow-md">
        <Image
          src={car?.first_image || imagePlacholder}
          alt={`${car?.name}`}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mt-4">{car?.name}</h2>
        <p className="text-gray-500">
          {car?.brand} - {car?.year}
        </p>
      </div>

      {/* Features */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Features</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {car?.features.map((feature) => (
            <div
              key={feature.id}
              className="text-white p-2 rounded-md bg-primaryGreen/80"
            >
              {feature.name}
            </div>
          ))}
        </div>
      </div>

      {/* Car Details */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <p>
          <strong>Category:</strong> {car?.category}
        </p>
        <p>
          <strong>Transmission:</strong> {car?.transmission}
        </p>
        <p>
          <strong>Fuel Type:</strong> {car?.fuel_type}
        </p>
        <p>
          <strong>Seats:</strong> {car?.seats}
        </p>
        <p>
          <strong>Mileage:</strong> {car?.mileage} km
        </p>
        <p>
          <strong>Luggage Capacity:</strong> {car?.luggage_capacity} L
        </p>
        <p>
          <strong>Price per day:</strong> ${car?.price_per_day}
        </p>
        <p>
          <strong>Availability:</strong>{" "}
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              car?.is_available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {car?.is_available ? "Available" : "Not Available"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CarDetails;
