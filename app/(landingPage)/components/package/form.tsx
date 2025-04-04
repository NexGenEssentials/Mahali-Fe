"use client";

import { useAppContext } from "@/app/context";
import { Space, Select } from "antd";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import { TourPackageType } from "@/app/types/tour";
import { CreateBooking } from "@/app/api/booking/action";

const contentId = process.env.NEXT_PUBLIC_TOUR_PACKAGE_ID;

const InquiryForm = ({ tour }: { tour: TourPackageType | null }) => {
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [people, setPeople] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    people: "",
    dateRange: "",
    inquiry: "",
  });
  const [inquiry, setInquiry] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  const { isLogin } = useAppContext();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { people: "", dateRange: "", inquiry: "" };

    if (people < 1) {
      newErrors.people = "Number of people must be at least 1.";
      isValid = false;
    }

    if (
      !dateSelected ||
      (Array.isArray(dateSelected) && dateSelected.length !== 2)
    ) {
      newErrors.dateRange = "Please select a valid date range.";
      isValid = false;
    }

    if (!inquiry.trim()) {
      newErrors.inquiry = "Inquiry field cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBooking = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isLogin) {
        const bookingData = {
          content_type: Number(contentId),
          object_id: Number(tour?.id),
          start_date: Array.isArray(dateSelected)
            ? dateSelected[0].format("YYYY-MM-DD")
            : "",
          end_date: Array.isArray(dateSelected)
            ? dateSelected[1].format("YYYY-MM-DD")
            : "",
          guests: people,
          total_price: people, // Replace with actual price calculation
          inquiry: inquiry.trim(),
        };

        const result = await CreateBooking(bookingData);
        if (result) router.push("/account/bookings-trips");
      } else {
        router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      }
    } catch (error) {
      console.error("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleBooking();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 p-8 flex flex-col gap-4 text-black text-opacity-75 w-full"
    >
      <div>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          min={1}
          className="p-3 w-full text-sm rounded-lg outline-none"
          placeholder="Number of People"
        />
        {errors.people && (
          <p className="text-red-500 text-sm">{errors.people}</p>
        )}
      </div>

      <div>
        <DatePicker
          range
          rangeHover
          dateSeparator=" to "
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="p-2 grow w-full text-sm rounded-lg outline-none text-nowrap"
        />
        {errors.dateRange && (
          <p className="text-red-500 text-sm">{errors.dateRange}</p>
        )}
      </div>

      <Space wrap>
        <Select
          defaultValue="Duration"
          size="large"
          options={[
            { value: "1-3 Days", label: "1-3 Days" },
            { value: "4-6 Days", label: "4-6 Days" },
            { value: "7-8 Days", label: "7-8 Days" },
            { value: "9+ Days", label: "9+ Days" },
          ]}
          className="w-full min-w-48"
        />
      </Space>

      <div>
        <textarea
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          placeholder="Your inquiry"
          rows={3}
          className="p-2 w-full text-sm rounded-lg outline-none"
        />
        {errors.inquiry && (
          <p className="text-red-500 text-sm">{errors.inquiry}</p>
        )}
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        type="submit"
        className="p-3 bg-primaryGreen text-white font-semibold rounded-md"
      >
        {loading ? "Sending..." : "Send"}
      </motion.button>
    </form>
  );
};

export default InquiryForm;
