"use client";
import { CreateBooking } from "@/app/api/booking/action";
import { useAppContext } from "@/app/context";
import { BookingData } from "@/app/types";
import { notification } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

interface FormData {
  pickupDate: DateObject;
  pickupTime: string;
  dropDate: DateObject;
  dropTime: string;
}
const contentId = process.env.NEXT_PUBLIC_CAR_RENTAL_ID;

const UserCarBookingInfoForm = ({
  carId,
  price,
}: {
  carId: number;
  price: number;
}) => {
  const { setActiveModalId, bookDate, setBookingData } = useAppContext();
  const [formData, setFormData] = useState<FormData>({
    pickupDate: bookDate[0],
    pickupTime: "12:00",
    dropDate: bookDate[1],
    dropTime: "12:00",
  });
  const [loading, setLoading] = useState(false);
  const [loadingpay, setLoadingpay] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [outPrice, setOutPrice] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [buttonType, setButtontype] = useState("booking");
  const [isOutOfKigali, setIsOutOfKigali] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const startDate = formData.pickupDate.toDate();
    const endDate = formData.dropDate.toDate();

    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const newTotalDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    const calculatedDays = newTotalDays > 0 ? newTotalDays : 1;

    setTotalDays(calculatedDays);
    setTotalPrice(price * calculatedDays);
    setOutPrice(price * calculatedDays);
  }, [formData]);

  const handleDateChange = (date: Value, type: "pickupDate" | "dropDate") => {
    if (date instanceof DateObject) {
      setFormData((prev) => {
        let newPickupDate = prev.pickupDate;
        let newDropDate = prev.dropDate;

        if (type === "pickupDate") {
          newPickupDate = date;
          if (date > prev.dropDate) {
            newDropDate = new DateObject(date).add(1, "days");
          }
        } else if (type === "dropDate") {
          newDropDate = date;
          if (date < prev.pickupDate) {
            newPickupDate = new DateObject(date).subtract(1, "days");
          }
        }
        const startDate = newPickupDate.toDate();
        const endDate = newDropDate.toDate();

        const diffInMilliseconds = endDate.getTime() - startDate.getTime();
        const newTotalDays = Math.ceil(
          diffInMilliseconds / (1000 * 60 * 60 * 24)
        );

        const calculatedDays = newTotalDays > 0 ? newTotalDays : 1;

        setTotalDays(calculatedDays);
        setTotalPrice(price * calculatedDays);

        return {
          ...prev,
          pickupDate: newPickupDate,
          dropDate: newDropDate,
        };
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (buttonType === "booking") {
      setLoading(true);
    } else {
      setLoadingpay(true);
    }
    try {
      const pickup = new Date(
        formData.pickupDate.format("YYYY-MM-DD") + "T" + formData.pickupTime
      );
      const drop = new Date(
        formData.dropDate.format("YYYY-MM-DD") + "T" + formData.dropTime
      );

      if (pickup >= drop) {
        notification.error({
          message: "Drop-off time must be after pickup time",
          placement: "topRight",
        });
        return;
      } else {
        const bookingData = {
          content_type: Number(contentId),
          object_id: carId,
          start_date: String(pickup.toISOString().split("T")[0]),
          end_date: String(drop.toISOString().split("T")[0]),
          guests: 0,
          total_price: totalPrice,
        };

        const result = await CreateBooking(bookingData);

        if (result.status === "Unauthorized") {
          notification.error({
            message: "Unauthorized",
            description: "Please Login first",
            placement: "topRight",
          });

          router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
        } else {
          setBookingData(result);
          notification.success({
            message: "Booking created successfully",
            description: "You can track the status of your booking",
            placement: "topRight",
          });
          if (buttonType === "booking") {
            router.push("/account/bookings-trips");
            setActiveModalId(null);
          } else if (buttonType === "pay") {
            setActiveModalId("pay");
          }
        }
      }
    } catch (error) {
      console.error("Error processing dates:", error);
      notification.error({
        message: "Please check your dates and times",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
      setLoadingpay(false);
    }
  };
 
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:min-w-[512px] max-w-2xl bg-white p-6 rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">
        Booking Details
      </h2>

      {/* Pickup Date & Time */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Pickup Date & Time
        </label>
        <div className="flex gap-2">
          <DatePicker
            value={bookDate[0]}
            onChange={(date) => handleDateChange(date, "pickupDate")}
            format="DD/MM/YYYY"
            inputClass="p-2 w-full border rounded-lg outline-none"
            minDate={new DateObject()}
          />
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="p-2 border rounded-lg outline-none"
          />
        </div>
      </div>

      {/* Drop Date & Time */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Drop Date & Time
        </label>
        <div className="flex gap-2">
          <DatePicker
            value={bookDate[1]}
            onChange={(date) => handleDateChange(date, "dropDate")}
            format="DD/MM/YYYY"
            inputClass="p-2 w-full border rounded-lg outline-none"
            minDate={formData.pickupDate}
          />
          <input
            type="time"
            name="dropTime"
            value={formData.dropTime}
            onChange={handleChange}
            className="p-2 border rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="location"
            value="inkigali"
            onClick={() => {
                setIsOutOfKigali(false);
                setTotalPrice(outPrice);
              }
            }
          />
          In Kigali
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="location"
            value="outkigali"
            onClick={() => {
              if (!isOutOfKigali) {
                setIsOutOfKigali(true);
                setTotalPrice((prev) => prev + price * 0.1);
              }
            }}
          />
          Out of Kigali
        </label>
      </div>
      <div className="flex flex-col gap-3 py-6 text-sm">
        <span className="flex justify-between pr-2">
          <span className="font-semibold">Unit Price:</span> ${price}/Day
        </span>
        <span className="flex justify-between border-b border-slate-800 pb-2 pr-2">
          <span className="font-semibold ">Total Days:</span>
          {totalDays}Days
        </span>
        <span className="flex justify-between pr-2">
          <span className="font-semibold">Total Price:</span>${totalPrice}
        </span>
      </div>
      {/* Submit Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => setButtontype("booking")}
          type="submit"
          className="w-2/4 mx-auto px-2 py-3 border border-primaryGreen hover:text-white hover:bg-primaryGreen duration-300 text-primaryGreen font-semibold rounded-lg"
        >
          {loading ? "loading..." : "Book a car"}
        </button>
      </div>
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

export default UserCarBookingInfoForm;
