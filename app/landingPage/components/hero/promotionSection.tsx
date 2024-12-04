"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const PromotionSection = () => {
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);

  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  return (
    <section className="max-w-[1750px] mx-auto relative w-full md:px-8 flex items-center max-md:my-4 justify-center md:mb-40 z-40">
      <div className="md:absolute flex flex-col gap-4 w-full md:w-[90%] bg-primaryGreen md:shadow-md md:shadow-slate-500 text-primaryWhite p-8 rounded-md ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            2025 Great Migration Season is Here!
          </h1>
          <p className="text-xs w-full md:3/4 lg:w-1/2 font-extralight leading-relaxed tracking-wide">
            Book top Mahali Africa holiday and tours package now at special
            discounted rates – only available for paid reservations made by
            December 15, 2024.
          </p>
        </div>
        <div>
          <form
            action=""
            className="flex gap-4 items-end flex-wrap text-primaryBlue"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="place"
                className="text-xs text-primaryWhite font-medium pl-2"
              >
                PLACE
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Place ..."
                className="p-2 max-md:w-full text-sm rounded-lg outline-none"
              />
            </div>
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
              className="bg-primaryBlue px-6 py-3 rounded-md text-primaryWhite text-sm hover:text-opacity-60 font-semibold"
            >
              Book Now
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
