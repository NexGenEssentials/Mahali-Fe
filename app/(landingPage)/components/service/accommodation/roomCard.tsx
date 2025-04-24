"use client";

import React, { useState } from "react";
import { Badge } from "antd";
import { BedDouble, Users, Ruler, DollarSign } from "lucide-react";
import Image from "next/image";
import { RoomType } from "@/app/types/accommodation";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";

type RoomCardProps = {
  room?: RoomType;
};

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [loadingpay, setLoadingpay] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="rounded-2xl p-4 transition-all bg-white w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800 ">{room?.name}</h3>
        {room?.is_available ? (
          <Badge
            status="success"
            text="Available"
            style={{ color: "green", fontWeight: "bold" }}
          />
        ) : (
          <Badge
            status="error"
            text="Unavailable"
            style={{ color: "red", fontWeight: "bold" }}
          />
        )}
      </div>

      <p className="text-gray-600 text-base mb-4">{room?.description}</p>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 font-semibold mt-2">
        <div className="flex items-center gap-1">
          <DollarSign size={16} />
          <span>{room?.price_per_night} / night</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>
            {room?.max_guests} {room?.max_guests! > 1 ? "adults" : "adult"} and{" "}
            {room?.max_children}{" "}
            {room?.max_children! > 1 ? "children" : "child"} per Room
          </span>
        </div>
        <div className="flex items-center gap-1">
          <BedDouble size={16} />
          <span>
            {room?.total_units} {room?.total_units! > 1 ? "Rooms" : "Room"} left
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <Ruler className="w-4 h-4" />
          <span>
            Size: {room?.size} M<span className="align-super text-sm">²</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <BedDouble size={16} />
          <span>{room?.bed_type}</span>
        </div>
      </div>

      {room?.includes && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-800">Includes:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {room?.includes.split(",").map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="relative max-md:hidden w-full h-full grid grid-cols-2 gap-2 overflow-hidden">
        {room?.images.map((image, index) => (
          <div key={index} className="w-full h-48 overflow-hidden">
            <Image
              src={image || ImagePlaceholder}
              alt={room.name}
              width={800}
              height={600}
              className="object-cover w-full h-full hover:scale-110 hover:duration-700 transition-all"
            />
          </div>
        ))}
      </div>

      <div className="w-full p-8 flex flex-col gap-4 items-center justify-center">
        <button
          //   onClick={() => }
          className="mt-6 border w-1/2  border-primaryGreen text-defaultGreen hover:bg-primaryGreen hover:text-white font-bold py-3 rounded-xl transition-all duration-300"
        >
          {loading ? "Sending..." : "Equip Room"}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
