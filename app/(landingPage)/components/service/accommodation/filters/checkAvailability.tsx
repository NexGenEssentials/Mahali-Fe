"use client";
import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/reset.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import { formatDateToISO } from "@/app/helpers/formatDate";

const CheckAvailability = ({
  setLocation,
  from,
  end,
}: {
  setLocation: (location: string) => void;
  from: (startDate: string) => void;
  end: (endDate: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [location, setlocation] = useState("");

  useEffect(() => {
    if (dateSelected.length > 0) {
      from(formatDateToISO(String(dateSelected[0].toDate())));
      end(formatDateToISO(String(dateSelected[1].toDate())));
    }
  }, [dateSelected]);

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
              value={location}
              onChange={(e) => {
                const value = e.target.value;
                setlocation(value);
                setLocation(value);
              }}
              placeholder="Location"
              className="text-slate-500 focus:ring-2 focus:ring-[#667c3e]"
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
              inputClass="py-2 px-4 w-full min-w-[200px] text-sm rounded-lg outline-none border text-slate-500 focus:ring-2 focus:ring-[#667c3e]" // Custom focus ring color
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;
