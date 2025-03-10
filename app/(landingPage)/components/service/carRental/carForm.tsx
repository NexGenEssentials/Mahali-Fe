"use client";
import { Space, Select } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

const CarRentalForm = () => {
    const [dateSelected, setDateSelected] = useState<DateObject[]>([
        new DateObject(),
        new DateObject().add(1, "days"),
      ]);
  return (
    <form
      action={"/service/car-rental/all"}
      className="px-4 p-8 flex flex-col gap-4 text-black text-opacity-75 w-full"
    >
      <div className="w-full flex-col gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Pick-up location"
          min={0}
          className="p-3 w-full text-sm  rounded-md outline-none"
        />
      </div>
      <div className="w-full flex-col gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Drop-off location"
          min={0}
          className="p-3 w-full text-sm  rounded-md outline-none"
        />
      </div>
      <DatePicker
          range
          rangeHover
          dateSeparator=" to "
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="p-2 w-full max-w-60 text-sm rounded-lg outline-none"
        />
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
            className="w-full min-w-60"
          />
        </Space>
        <div className="w-full flex-col gap-2">
        <input
          type="time"
          name=""
          id=""
          placeholder='Time'
          min={0}
          className="p-3 w-full text-sm max-w-60 rounded-md outline-none"
        />
      </div>
      <Link href={'/service/car-rental/all'}>
      <button
        type="submit"
        className="p-3 bg-primaryGreen text-white font-semibold rounded-md"
      >
        Check now
      </button>
      </Link>
    </form>
  );
};

export default CarRentalForm;
