"use client";
import { useAppContext } from "@/app/context";
import { useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  idOrPassport: string;
  location: string;
  pickupDate: DateObject;
  pickupTime: string;
  dropDate: DateObject;
  dropTime: string;
}

const UserInfoForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    idOrPassport: "",
    location: "",
    pickupDate: new DateObject(),
    pickupTime: "12:00",
    dropDate: new DateObject().add(1, "days"),
    dropTime: "12:00",
  });

  const { setActiveModalId } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Value, type: "pickupDate" | "dropDate") => {
    if (date instanceof DateObject) {
      setFormData((prev) => ({
        ...prev,
        [type]: date,
        // If pickup date changes and is after drop date, update drop date
        ...(type === "pickupDate" && date > prev.dropDate
          ? { dropDate: new DateObject(date).add(1, "days") }
          : {}),
        // If drop date changes and is before pickup date, update pickup date
        ...(type === "dropDate" && date < prev.pickupDate
          ? { pickupDate: new DateObject(date).subtract(1, "days") }
          : {}),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Validate dates
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

      console.log("Form submitted:", {
        ...formData,
        pickupDate: pickup.toISOString(),
        dropDate: drop.toISOString(),
      });

      setActiveModalId(null);
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
      className="w-full md:min-w-[512px] max-w-2xl bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-700 font-medium mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:border-primaryGreen"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:border-primaryGreen"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:border-primaryGreen"
        />
      </div>

      {/* ID or Passport */}
      <div className="mb-4">
        <label
          htmlFor="idOrPassport"
          className="block text-gray-700 font-medium mb-1"
        >
          ID or Passport
        </label>
        <input
          type="text"
          id="idOrPassport"
          name="idOrPassport"
          value={formData.idOrPassport}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:border-primaryGreen"
        />
      </div>

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

      {/* Location */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700 font-medium mb-1"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:border-primaryGreen"
        />
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
