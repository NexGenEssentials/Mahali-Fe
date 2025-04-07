"use client";
import { CreateBooking } from "@/app/api/booking/action";
import { useAppContext } from "@/app/context";
import { CustomPackageData } from "@/app/types/tour";
import { notification } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

interface FormData {
  pickupDate: DateObject;
  dropDate: DateObject;
}

// rebook, delete, book custom package

const contentId = process.env.NEXT_PUBLIC_CUSTOM_PACKAGE_ID;

const BookingAction = ({
  pack,
  serviceType,
}: {
  pack?: CustomPackageData;
  serviceType: string;
}) => {
  const { setActiveModalId } = useAppContext();
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [errors, setErrors] = useState({
    dateRange: "",
  });

  const handleBooking = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const bookingData = {
        content_type: Number(contentId),
        object_id: Number(pack?.id),
        start_date: Array.isArray(dateSelected)
          ? dateSelected[0].format("YYYY-MM-DD")
          : "",
        end_date: Array.isArray(dateSelected)
          ? dateSelected[1].format("YYYY-MM-DD")
          : "",
        guests: 1,
        total_price: Number(pack?.total_price),
      };

      const result = await CreateBooking(bookingData);
      if (result) router.push("/account/bookings-trips");
    } catch (error) {
      console.error("ERROR", error);
    } finally {
      setLoading(false);
      setActiveModalId(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleBooking();
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { dateRange: "" };

    if (
      !dateSelected ||
      (Array.isArray(dateSelected) && dateSelected.length !== 2)
    ) {
      newErrors.dateRange = "Please select a valid date range.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:min-w-[512px] min-h-96 max-w-2xl bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-8"
    >
      <h2 className="text-xl font-semibold text-center">
        Booking Details
      </h2>

      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-sm text-slate-600">Select starting date and ending date</h1>
        <DatePicker
          range
          rangeHover
          dateSeparator=" to "
          value={dateSelected}
          onChange={setDateSelected}
          format="DD/MM/YYYY"
          inputClass="py-2 w-fit min-w-[200px] text-center text-sm rounded-lg outline-none text-nowrap border p-3"
        />
        {errors.dateRange && (
          <p className="text-red-500 text-sm">{errors.dateRange}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-2/4 mx-auto px-2 py-3 border border-primaryGreen hover:text-white hover:bg-primaryGreen duration-300 text-primaryGreen font-semibold rounded-lg"
        >
          {loading ? "loading..." : "Book Tour"}
        </button>
      </div>
    </form>
  );
};

export default BookingAction;
