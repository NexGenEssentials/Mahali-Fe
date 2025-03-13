"use client";
import { getCarAvailabilty } from "@/app/api/carRental/action";
import { useAppContext } from "@/app/context";
import { notification } from "antd";
import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const CarRentalForm = ({
  id,
  available,
}: {
  id: number;
  available: (available: boolean) => void;
}) => {
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [loading, setLoading] = useState(false);
  const { setbookDate } = useAppContext();

  const handleCheckAvailability = async () => {
    setLoading(true);
    try {
      const startDate = dateSelected[0]?.format("YYYY-MM-DD");
      const endDate = dateSelected[1]?.format("YYYY-MM-DD");
      setbookDate(dateSelected);
      if (!startDate || !endDate) {
        notification.error({
          message: "Invalid date range selected",
          description: "Please select pickup date and drop date",
          placement: "topRight",
        });
        setLoading(false);
        return;
      }

      const result = await getCarAvailabilty(id, startDate, endDate);
      if (result.available) {
        available(result.available);
        notification.success({
          message: "Car Availability",
          description: "You can book this by clicking book now button",
          placement: "topRight",
        });
      } else {
        notification.error({
          message: "Car Availability",
          description: "Car is not available select other dates",
          placement: "topRight",
        });
      }
    } catch (error) {
      console.log("Error occurred", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 p-8 flex flex-col gap-4 text-black text-opacity-75 w-full">
      <DatePicker
        range
        rangeHover
        dateSeparator=" to "
        value={dateSelected}
        onChange={setDateSelected}
        format="DD/MM/YYYY"
        inputClass="p-2 w-full max-w-60 text-sm rounded-lg outline-none"
      />

      <button
        onClick={handleCheckAvailability}
        type="submit"
        className="p-3 min-w-52 bg-primaryGreen text-white font-semibold rounded-md"
      >
        {loading ? "loading..." : "Check now"}
      </button>
    </section>
  );
};

export default CarRentalForm;
