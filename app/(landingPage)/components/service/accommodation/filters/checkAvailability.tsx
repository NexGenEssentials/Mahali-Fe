"use client";
import { useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/reset.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const CheckAvailability: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [roomCount, setRoomCount] = useState<number>(0);
  const [adultsCount, setAdultsCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  const handleCountChange = (
    type: string,
    action: "increment" | "decrement"
  ) => {
    if (action === "increment") {
      if (type === "room") setRoomCount(roomCount + 1);
      if (type === "adult") setAdultsCount(adultsCount + 1);
      if (type === "child") setChildrenCount(childrenCount + 1);
    } else if (action === "decrement") {
      if (type === "room") setRoomCount(Math.max(roomCount - 1, 0));
      if (type === "adult") setAdultsCount(Math.max(adultsCount - 1, 0));
      if (type === "child") setChildrenCount(Math.max(childrenCount - 1, 0));
    }
  };

  return (
    <div className="lg:w-72 h-fit max-w-sm mx-auto bg-white shadow-md border rounded-lg p-4">
      <div
        className="flex justify-between gap-8 items-start cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="availability-section"
      >
        <h3 className="text-base text-nowrap font-semibold text-primaryGreen">
          Check Availability
        </h3>
        <Icon
          icon="uis:angle-up"
          width="24"
          height="24"
          className={`text-primaryGreen ${isOpen ? "" : "rotate-90"}`}
        />
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4" id="availability-section">
          {/* Location */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">
              Location
            </label>
            <Input
              placeholder="Location"
              className="text-slate-500 focus:ring-2 focus:ring-[#667c3e]" // Custom focus ring color
              aria-label="Location"
            />
          </div>

          {/* Date Picker */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">
              Check-in - Check-out
            </label>
            <DatePicker
              range
              rangeHover
              dateSeparator=" to "
              value={dateSelected}
              onChange={setDateSelected}
              format="DD/MM/YYYY"
              inputClass="py-2 px-4 w-full text-sm rounded-lg outline-none border text-slate-500 focus:ring-2 focus:ring-[#667c3e]" // Custom focus ring color
            />
          </div>

          {/* Number of Rooms */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">
              Number of Rooms
            </label>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => handleCountChange("room", "decrement")}
                aria-label="Decrease Room Count"
              >
                -
              </Button>
              <Input
                value={roomCount}
                readOnly
                className="text-center w-12 border-none text-slate-500 focus:ring-2 focus:ring-[#667c3e]" // Custom focus ring color
                aria-label="Room Count"
              />
              <Button
                onClick={() => handleCountChange("room", "increment")}
                aria-label="Increase Room Count"
              >
                +
              </Button>
            </div>
          </div>

          {/* Adults Count */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">
              Adults
            </label>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => handleCountChange("adult", "decrement")}
                aria-label="Decrease Adult Count"
              >
                -
              </Button>
              <Input
                value={adultsCount}
                readOnly
                className="text-center w-12 border-none text-slate-500 focus:ring-2 focus:ring-[#667c3e]" // Custom focus ring color
                aria-label="Adults Count"
              />
              <Button
                onClick={() => handleCountChange("adult", "increment")}
                aria-label="Increase Adult Count"
              >
                +
              </Button>
            </div>
          </div>

          {/* Children Count */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">
              Children
            </label>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => handleCountChange("child", "decrement")}
                aria-label="Decrease Children Count"
              >
                -
              </Button>
              <Input
                value={childrenCount}
                readOnly
                className="text-center w-12 border-none text-slate-500 focus:ring-2 focus:ring-[#667c3e]" // Custom focus ring color
                aria-label="Children Count"
              />
              <Button
                onClick={() => handleCountChange("child", "increment")}
                aria-label="Increase Children Count"
              >
                +
              </Button>
            </div>
          </div>

          {/* Filter Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-primaryGreen text-white font-semibold w-full p-2 rounded-lg text-sm"
          >
            Filter Facilities
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;
