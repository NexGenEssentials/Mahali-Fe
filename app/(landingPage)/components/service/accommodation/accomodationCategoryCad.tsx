"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "../../buttons/button";
import { AccommodationType } from "@/app/types/accommodation";
import placeHolderimage from "@/public/images/imagePlaceholder.jpg";

// Component for rendering accommodation details
const AccommodationCard = ({
  accomod,
  category,
}: {
  accomod: AccommodationType;
  category: string;
}) => (
  <Link href={`${category}/${accomod.id}`}>
    <div className="group flex max-md:flex-wrap gap-4 border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white cursor-pointer">
      {/* Image Section */}
      <div className="relative flex-shrink-0 max-md:w-full w-72 h-52 overflow-hidden rounded-lg">
        <Image
          src={accomod.first_image || placeHolderimage}
          alt={accomod.name}
          fill={true}
          className="object-cover rounded-md"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col max-md:w-full w-3/5 space-y-4">
        <div className="flex space-x-4 items-center">
          <span className="text-lg font-semibold text-primaryGreen">
            {accomod.name}
          </span>
          <span className="text-sm text-slate-500 font-medium">
            ★ {accomod.rating}
          </span>
        </div>
        <span className="text-sm text-gray-600 line-clamp-2">{accomod.description}</span>
        <span className="text-sm text-gray-500 flex items-center">
          <span className="mr-2 text-primaryGreen font-semibold">
            Location:
          </span>
          {accomod.location}
        </span>
        <ul className="place-content-end lg:w-3/5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500 mt-8">
          {accomod.facilities.slice(0, 5).map((amty) => (
            <li key={amty.id} className="flex items-center">
              <span className="mr-2">✔</span>
              {amty.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      
      <div className="p-4 self-center text-nowrap text-white">
        <Button name="View More" />
      </div>
    </div>
  </Link>
);

export default AccommodationCard;
