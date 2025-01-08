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

  return (
    <div className="lg:w-72 h-fit max-w-sm mx-auto bg-white shadow-md border rounded-lg p-4">
      <div
        className="flex justify-between gap-8 items-start cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base text-nowrap font-semibold text-primaryGreen">Check Availability</h3>

        {isOpen ? (
          <Icon icon="uis:angle-up" width="24" height="24" className="text-primaryGreen"/>
        ) : (
          <Icon icon="uis:angle-up" width="24" height="24" className="text-primaryGreen" rotate={90} />
        )}
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Location */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">Location</label>
            <Input placeholder="Location" className="text-slate-500" />
          </div>

          {/* Check-in & Check-out */}
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
              inputClass="py-2 px-4 w-full text-sm rounded-lg outline-none border text-slate-500"
            />
          </div>

          {/* Number of Rooms */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">Number of Rooms</label>
            <div className="flex items-center space-x-2">
              <Button onClick={() => setRoomCount(Math.max(roomCount - 1, 0))}>
                -
              </Button>
              <Input
                value={roomCount}
                readOnly
                className="text-center w-12 border-none text-slate-500"
              />
              <Button onClick={() => setRoomCount(roomCount + 1)}>+</Button>
            </div>
          </div>

          {/* Adults */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">Adults</label>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setAdultsCount(Math.max(adultsCount - 1, 0))}
              >
                -
              </Button>
              <Input
                value={adultsCount}
                readOnly
                className="text-center w-12 border-none text-slate-500"
              />
              <Button onClick={() => setAdultsCount(adultsCount + 1)}>+</Button>
            </div>
          </div>

          {/* Children */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-primaryBlue">Children</label>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setChildrenCount(Math.max(childrenCount - 1, 0))}
              >
                -
              </Button>
              <Input
                value={childrenCount}
                readOnly
                className="text-center w-12 border-none text-slate-500"
              />
              <Button onClick={() => setChildrenCount(childrenCount + 1)}>
                +
              </Button>
            </div>
          </div>

          {/* Filter Button */}
          <motion.button
           whileTap={{scale:0.9}}
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
