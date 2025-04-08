"use client";
import { CreateBooking } from "@/app/api/booking/action";
import { useAppContext } from "@/app/context";
import { CustomPackageData } from "@/app/types/tour";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { CalendarDaysIcon } from "lucide-react";
import { motion } from "framer-motion";

export type CreateBookingPayload = {
  content_type: number;
  object_id: number;
  guests: number;
  total_price: number;
  note?: string;
};

const BookingAction: React.FC<CreateBookingPayload> = ({
  content_type,
  object_id,
  guests,
  total_price,
  note,
}) => {
  const { setActiveModalId } = useAppContext();
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState({ dateRange: "" });
  const [expand, setExpand] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { dateRange: "" };

    if (
      !dateSelected ||
      (Array.isArray(dateSelected) && dateSelected.length !== 2)
    ) {
      newErrors.dateRange = "Please select a valid start and end date.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBooking = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      const bookingData = {
        content_type: content_type,
        object_id: object_id,
        start_date: dateSelected[0].format("YYYY-MM-DD"),
        end_date: dateSelected[1].format("YYYY-MM-DD"),
        guests: guests,
        total_price: total_price,
        note,
      };


      const result = await CreateBooking(bookingData);
  

      if (result) router.push("/account/bookings-trips");
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setLoading(false);
      setActiveModalId(null);
    }
  };

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        handleBooking();
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`${
        expand ? "min-h-[50vh]" : ""
      }  w-full max-w-2xl h-fit  bg-white p-8 rounded-2xl flex flex-col gap-6 justify-start`}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        🧳 Book Your Adventure
      </h2>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-gray-600 text-sm">Choose your travel dates</p>
        <div className="flex items-center gap-2 ">
          <CalendarDaysIcon className="text-primaryGreen w-5 h-5" />
          <DatePicker
            range
            rangeHover
            dateSeparator=" to "
            value={dateSelected}
            onOpen={() => setExpand(true)}
            onClose={() => setExpand(false)}
            onChange={setDateSelected}
            format="DD/MM/YYYY"
            inputClass="border rounded-lg px-4 py-2 text-sm text-center shadow-sm w-64"
          />
        </div>
        {errors.dateRange && (
          <span className="text-sm text-red-500">{errors.dateRange}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-300
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primaryGreen hover:bg-green-700"
          }`}
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </motion.form>
  );
};

export default BookingAction;
