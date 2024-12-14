"use client";
import { Space, Select } from "antd";
import React, { useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

const CarRentalForm = () => {
  const [dateSelected, setDateSelected] = useState<Value>(new DateObject());
  return (
    <form
      action={""}
      className="px-4 p-8 flex flex-col gap-4 text-black text-opacity-75 w-full"
    >
      <div className="w-full flex-col gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter full name"
          min={0}
          className="p-3 w-full text-sm  rounded-md outline-none"
        />
      </div>
      <div className="w-full flex-col gap-2">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          min={0}
          className="p-3 w-full text-sm  rounded-md outline-none"
        />
      </div>
      <div className="w-full flex-col gap-2">
        <input
          type="number"
          name=""
          id=""
          placeholder="Enter your phone number"
          min={0}
          className="p-3 w-full text-sm  rounded-md outline-none"
        />
      </div>
      <div>
        <input
          type="number"
          name=""
          id=""
          placeholder="People"
          min={0}
          className="p-3 w-full text-sm  rounded-lg outline-none"
        />
      </div>

      <DatePicker
        value={dateSelected}
        onChange={setDateSelected}
        format="DD/MM/YYYY"
        inputClass="p-3 min-w-48 text-sm rounded-lg outline-none"
      />

      <Space wrap>
        <Select
          defaultValue="Duration"
          size="large"
          options={[
            { value: "1-3 Days" },
            { value: "4-6 Days" },
            { value: "7-8 Days" },
            { value: "9+ Days" },
          ]}
          className="w-full min-w-48"
        />
      </Space>
      <div>
        <textarea
          name=""
          id=""
          placeholder="Your inquiry"
          rows={3}
          cols={6}
          className="p-2 w-full text-sm  rounded-lg outline-none"
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-primaryGreen text-white font-semibold rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default CarRentalForm;
