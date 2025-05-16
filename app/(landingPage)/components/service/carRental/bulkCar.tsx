"use client";
import React, { useState } from "react";
import { DatePicker, Input, Radio, Button } from "antd";
import dayjs from "dayjs";
import type { RadioChangeEvent } from "antd";
import BookingConfirmation, { BookingSummary } from "./bookingSummary";
import { useAppContext } from "@/app/context";
import { usePathname, useRouter } from "next/navigation";
import CarSelector from "./selectCarType";
import { Car } from "lucide-react";
import { BulkCarDetail } from "@/app/types";
import { CreateBulkBooking } from "@/app/api/booking/action";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CarBookingForm = () => {
  const [formData, setFormData] = useState({
    dateRange: [],
    carType: "",
    numberOfPeople: 1,
    driverOption: "self_drive",
    tripLocation: "in_kigali",
    pickupLocation: "",
    additionalNotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formattedSummary, setFormattedSummary] = useState<BookingSummary>({
    tripDates: "",
    carType: [],
    driverOption: "",
    numberOfPeople: 0,
    tripLocation: "",
    pickupLocation: "",
    additionalNotes: "",
  });
  const [selectedCars, setSelectedCars] = useState<BulkCarDetail[]>([]);

  const { isLogin } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const [start, end] = formData.dateRange;
    const tripDates = `${dayjs(start).format("MMM D, YYYY")} - ${dayjs(
      end
    ).format("MMM D, YYYY")}`;

    setFormattedSummary({
      tripDates,
      carType: selectedCars,
      driverOption: formData.driverOption,
      numberOfPeople: Number(formData.numberOfPeople),
      tripLocation: formData.tripLocation,
      pickupLocation: formData.pickupLocation,
      additionalNotes: formData.additionalNotes,
    });
    const bulkData = {
      start_date: dayjs(start).format("YYYY-MM-DD"),
      end_date: dayjs(end).format("YYYY-MM-DD"),
      pickup_location: formData.pickupLocation,
      trip_location: formData.tripLocation,
      driver_option: formData.driverOption,
      note: formData.additionalNotes,
      car_details: selectedCars,
      guests: Number(formData.numberOfPeople),
    };
    setIsLoading(true);

    try {
      if (isLogin) {
        const result = await CreateBulkBooking(bulkData);
        if (result.status === "success") {
          setIsLoading(false);
          setIsSubmitted(true);
        } else setIsLoading(false);
      } else {
        router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      }
    } catch (error) {}
  };

  return (
    <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto mt-5 bg-white rounded-lg shadow-md">
      {!isSubmitted ? (
        <>
          <div className="text-center p-6 border-b">
            <h2 className="text-2xl font-bold">Book Your Ride</h2>
            <p className="text-gray-600 mt-1">
              Fill out the form below to reserve your vehicle
            </p>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block font-medium mb-1">Trip Dates</label>
              <RangePicker
                className="custom-ant-input"
                onChange={(dates) => handleChange("dateRange", dates)}
              />
              <p className="text-sm text-gray-500 mt-1">
                Select the start and end dates for your trip.
              </p>
            </div>

            <CarSelector
              selectedCars={selectedCars}
              setSelectedCars={setSelectedCars}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Number of People
                </label>
                <Input
                  type="number"
                  min={1}
                  className="custom-ant-input"
                  value={formData.numberOfPeople}
                  onChange={(e) =>
                    handleChange("numberOfPeople", e.target.value)
                  }
                />
                <p className="text-sm text-gray-500 mt-1">
                  How many passengers will be traveling?
                </p>
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Pickup Location
                </label>
                <Input
                  className="custom-ant-input"
                  placeholder="Enter your pickup address"
                  value={formData.pickupLocation}
                  onChange={(e) =>
                    handleChange("pickupLocation", e.target.value)
                  }
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please provide the exact address for vehicle pickup.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Driver Option</label>
                <Radio.Group
                  onChange={(e: RadioChangeEvent) =>
                    handleChange("driverOption", e.target.value)
                  }
                  value={formData.driverOption}
                  className="custom-ant-radio"
                >
                  <div className="flex flex-col space-y-2">
                    <Radio value="self_drive">Self Drive</Radio>
                    <Radio value="driver_needed">Driver Needed</Radio>
                  </div>
                </Radio.Group>
              </div>
              <div>
                <label className="block font-medium mb-1">Trip Location</label>
                <Radio.Group
                  onChange={(e: RadioChangeEvent) =>
                    handleChange("tripLocation", e.target.value)
                  }
                  value={formData.tripLocation}
                  className="custom-ant-radio"
                >
                  <div className="flex flex-col space-y-2">
                    <Radio value="in_kigali">In Kigali</Radio>
                    <Radio value="out_of_kigali">Out of Kigali</Radio>
                  </div>
                </Radio.Group>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Additional Notes</label>
              <TextArea
                rows={4}
                className="custom-ant-input"
                placeholder="Any special requests or information we should know"
                value={formData.additionalNotes}
                onChange={(e) =>
                  handleChange("additionalNotes", e.target.value)
                }
              />
              <p className="text-sm text-gray-500 mt-1">
                Optional: Add any special requests or additional information.
              </p>
            </div>

            <Button
              disabled={
                !formData.dateRange ||
                formData.carType.length > 0 ||
                !formData.pickupLocation ||
                !formData.numberOfPeople ||
                !formData.driverOption ||
                !formData.tripLocation
              }
              loading={isLoading}
              size="large"
              type="primary"
              className={`${
                !formData.dateRange ||
                formData.carType.length > 0 ||
                !formData.pickupLocation ||
                !formData.numberOfPeople ||
                !formData.driverOption ||
                !formData.tripLocation
                  ? "!bg-gray-300 hover:!bg-gray-300/70"
                  : "!bg-primaryGreen hover:!bg-primaryGreen/70"
              }  w-full !p-4  border-none`}
              onClick={handleSubmit}
            >
              Submit Booking Request
            </Button>
          </div>
        </>
      ) : (
        <BookingConfirmation
          setIsSubmitted={setIsSubmitted}
          summaryData={formattedSummary}
        />
      )}
    </div>
  );
};

export default CarBookingForm;
