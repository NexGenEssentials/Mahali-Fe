"use client";
import { CreateBooking } from "@/app/api/booking/action";
import { useAppContext } from "@/app/context";
import { notification } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

interface FormData {
  pickupDate: DateObject;
  pickupTime: string;
  dropDate: DateObject;
  dropTime: string;
}

const UserInfoForm = ({ carId, price }: { carId: number; price: number }) => {
  const [formData, setFormData] = useState<FormData>({
    pickupDate: new DateObject(),
    pickupTime: "12:00",
    dropDate: new DateObject().add(1, "days"),
    dropTime: "12:00",
  });
  const { setActiveModalId } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    setLoading(true);
    try {
      const pickup = new Date(
        formData.pickupDate.format("YYYY-MM-DD") + "T" + formData.pickupTime
      );
      const drop = new Date(
        formData.dropDate.format("YYYY-MM-DD") + "T" + formData.dropTime
      );

      if (pickup >= drop) {
        alert("Drop-off time must be after pickup time");
        return;
      }
      const bookingData = {
        content_type: Number(process.env.CAR_RENTAL_ID),
        object_id: carId,
        start_date: pickup,
        end_date: drop,
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
        notification.success({
          message: "Booking created successfully",
          description: "You can track the status of your booking",
          placement: "topRight",
        });
        router.push("/bookings-trips");
        setActiveModalId(null);
      }
    } catch (error) {
      console.error("Error processing dates:", error);
      alert("Please check your dates and times");
    } finally {
      setLoading(false);
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
            value={formData.pickupDate}
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
            value={formData.dropDate}
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
          type="submit"
          className="w-2/4 mx-auto px-2 py-3 border border-primaryGreen hover:text-white hover:bg-primaryGreen duration-300 text-primaryGreen font-semibold rounded-lg"
        >
          {loading ? "loading..." : "Book a car"}
        </button>
      </div>
    </form>
  );
};

export default UserInfoForm;
