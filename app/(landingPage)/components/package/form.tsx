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
  const { isLogin, setActiveModalId, setBookingData } = useAppContext();
  const [loadingpay, setLoadingpay] = useState(false);
  const [buttonType, setButtontype] = useState("booking");

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
    if (buttonType === "booking") {
      setLoading(true);
    } else {
      setLoadingpay(true);
    }

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
          total_price: Number(tour?.price),
          note: inquiry.trim(),
        };

        const result = await CreateBooking(bookingData);
        if (result.object_id) {
          if (buttonType === "booking") {
            router.push("/account/bookings-trips");
          } else if (buttonType === "pay") {
            setBookingData(result);
            setActiveModalId("pay");
          }
        }
      } else {
        router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      }
    } catch (error) {
      console.error("ERROR", error);
    } finally {
      setLoading(false);
      setLoadingpay(false);
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
        <h1 className="text-slate-400 text-sm pl-2">Number of People</h1>
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
        <h1 className="text-slate-400 text-sm pl-2">
          Choose starting and ending Date
        </h1>
        <DatePicker
          range
          rangeHover
          dateSeparator=" to "
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="p-2 grow w-full min-w-[200px] text-sm rounded-lg outline-none text-nowrap"
        />
        {errors.dateRange && (
          <p className="text-red-500 text-sm">{errors.dateRange}</p>
        )}
      </div>

      <div>
        <textarea
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          placeholder="Your tour inquiry"
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
        onClick={() => setButtontype("booking")}
        className="p-3 w-2/4 mx-auto bg-primaryGreen text-white font-semibold rounded-md"
      >
        {loading ? "Sending..." : "Book Tour"}
      </motion.button>

      <div className="w-full flex justify-center">
        <button
          onClick={() => setButtontype("pay")}
          type="submit"
          className="w-2/4 mx-auto px-2 py-3 border mt-4 bg-blue-200 text-slate-800 border-blue-400 hover:bg-blue-300 duration-300  font-semibold rounded-lg"
        >
          {loadingpay ? "loading..." : "Pay Now"}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
