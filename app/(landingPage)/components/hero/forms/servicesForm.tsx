"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import { Select, Space } from "antd";

export const AccomodationForm = () => {
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  return (
    <form
      action="/service"
      className="flex gap-4 items-end flex-wrap text-primaryBlue"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          ARRIVAL - DEPARTURE
        </label>
        <DatePicker
          range
          rangeHover
          dateSeparator=" to "
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="p-2 grow max-md:w-full text-sm rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          ROOM
        </label>
        <input
          type="number"
          value={room}
          onChange={(e) => setRoom(Number(e.target.value))}
          name=""
          id=""
          min={0}
          className="p-2 max-md:w-full text-sm w-28 rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          ADULT
        </label>
        <input
          type="number"
          value={adult}
          onChange={(e) => setAdult(Number(e.target.value))}
          name=""
          id=""
          min={0}
          className="p-2 max-md:w-full text-sm w-28 rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          CHILD
        </label>
        <input
          type="number"
          value={child}
          onChange={(e) => setChild(Number(e.target.value))}
          name=""
          id=""
          min={0}
          className="p-2 max-md:w-full text-sm w-28 rounded-lg outline-none"
        />
      </div>
      <motion.button
        type="submit"
        whileTap={{ scale: 0.8 }}
        className="bg-primaryGreen border-2 border-white px-4 py-2 rounded-md text-white text-sm hover:border-opacity-60 hover:text-opacity-60 font-medium"
      >
        Search now
      </motion.button>
    </form>
  );
};
export const PackagesForm = () => {
  const Destination = [
    { value: "Rwanda" },
    { value: "Tanzania" },
    { value: "Burundi" },
    { value: "Kenya" },
    { value: "Uganda" },
  ];
  return (
    <form
      action="/service"
      className="flex gap-4 items-end flex-wrap text-primaryBlue"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          DESTINATION
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={Destination}
            className="w-full min-w-40"
          />
        </Space>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          PEOPLE
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={[
              { value: "1-5" },
              { value: "6-10" },
              { value: "11-15" },
              { value: "16+" },
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
          PERIOD
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={[
              { value: "1-3 Days" },
              { value: "4-6 Days" },
              { value: "7-8 Days" },
              { value: "9+ Days" },
            ]}
            className="w-full min-w-40"
          />
        </Space>
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.8 }}
        className="bg-primaryGreen border-2 border-white px-4 py-2 rounded-md text-white text-sm hover:border-opacity-60 hover:text-opacity-60 font-medium"
      >
        Search now
      </motion.button>
    </form>
  );
};
export const CarRenTalForm = () => {
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  return (
    <form
      action="/service"
      className="flex gap-4 items-end flex-wrap text-primaryBlue"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          FROM - TO
        </label>
        <DatePicker
          range
          rangeHover
          dateSeparator=" to "
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="p-2 grow max-md:w-full text-sm rounded-lg outline-none"
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
            size="large"
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
          SITS
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={[
              { value: "1-5" },
              { value: "6-10" },
              { value: "11-15" },
              { value: "16+" },
            ]}
            className="w-full min-w-40"
          />
        </Space>
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.8 }}
        className="bg-primaryGreen border-2 border-white px-4 py-2 rounded-md text-white text-sm hover:border-opacity-60 hover:text-opacity-60 font-medium"
      >
        Search now
      </motion.button>
    </form>
  );
};
export const EventsManagementForm = () => {
  const [dateSelected, setDateSelected] = useState<Value>(new DateObject());
  return (
    <form
      action="/service"
      className="flex gap-4 items-end flex-wrap text-primaryBlue"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          EVENT DATE
        </label>
        <DatePicker
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="p-2 grow max-md:w-full text-sm rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="place"
          className="text-xs text-primaryWhite font-medium pl-2"
        >
          CATEGORIES
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={[
              { value: "Wedding Ceremony" },
              { value: "Concert" },
              { value: "Family Gardering" },
              { value: "Expo" },
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
          LOCATION
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={[
              { value: "HOTEL" },
              { value: "BIG TENTE" },
              { value: "OUTSIDE" },
              { value: "RESTAURENT" },
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
          PEOPLE
        </label>
        <Space wrap>
          <Select
            defaultValue="All"
            size="large"
            options={[
              { value: "1-100" },
              { value: "101-200" },
              { value: "201-300" },
              { value: "301+" },
            ]}
            className="w-full min-w-40"
          />
        </Space>
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.8 }}
        className="bg-primaryGreen border-2 border-white px-4 py-2 rounded-md text-white text-sm hover:border-opacity-60 hover:text-opacity-60 font-medium"
      >
        Search now
      </motion.button>
    </form>
  );
};
