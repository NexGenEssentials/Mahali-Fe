"use client";
import {
  CheckCircleFilled,
  CalendarOutlined,
  CarOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { CarType } from "./bulkCar";

export type BookingSummary = {
  tripDates: string;
  carType: CarType[];
  driverOption: string;
  numberOfPeople: number;
  tripLocation: string;
  pickupLocation: string;
  additionalNotes?: string;
};
const BookingConfirmation = ({
  summaryData,
  setIsSubmitted,
}: {
  summaryData: BookingSummary;
  setIsSubmitted: (value: boolean) => void;
}) => {
  const router = useRouter();

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Success Message */}
      <div className="flex flex-col items-center text-center mb-6">
        <CheckCircleFilled className="text-green-500 text-4xl mb-2" />
        <h2 className="text-xl font-bold">Booking Request Submitted!</h2>
        <p className="text-gray-600">
          Your booking request has been received. We'll contact you shortly to
          confirm the details.
        </p>
      </div>

      {/* Booking Summary */}
      <div className="border rounded-md p-5 ">
        <h3 className="text-lg font-bold">Booking Summary</h3>

        {/* Trip Dates */}
        <div className="flex items-start gap-3">
          <CalendarOutlined className="text-xl mt-1 text-gray-500" />
          <div>
            <p className="font-semibold">Trip Dates</p>
            <p className="text-gray-600">{summaryData?.tripDates}</p>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="flex flex-col items-start mb-4">
          <div className="flex items-start gap-3">
            <CarOutlined className="text-xl mt-1 text-gray-500" />
            <p className="font-semibold">Vehicle Details</p>
          </div>
          <p className="text-gray-600 pl-8">• {summaryData?.driverOption}</p>

          {summaryData.carType.length > 0 && (
            <div className="overflow-x-auto rounded-lg shadow-sm pl-8">
              <table className="min-w-full table-auto border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="px-4 py-2 border-b">#</th>
                    <th className="px-4 py-2 border-b">Car Type</th>
                    <th className="px-4 py-2 border-b">Model</th>
                    <th className="px-4 py-2 border-b text-center">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryData.carType.map((car, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition text-slate-500 text-sm"
                    >
                      <td className="px-4 py-2 border-b">{index + 1}</td>
                      <td className="px-4 py-2 border-b">{car.carType}</td>
                      <td className="px-4 py-2 border-b">{car.model}</td>
                      <td className="px-4 py-2 border-b text-center">
                        {car.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className="flex items-start gap-3">
          <TeamOutlined className="text-xl mt-1 text-gray-500" />
          <div>
            <p className="font-semibold">Passengers</p>
            <p className="text-gray-600">
              {summaryData?.numberOfPeople} person
              {summaryData?.numberOfPeople > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Trip Location */}
        <div className="flex items-start gap-3">
          <EnvironmentOutlined className="text-xl mt-1 text-gray-500" />
          <div>
            <p className="font-semibold">Trip Location</p>
            <p className="text-gray-600">
              • {summaryData?.tripLocation} <br />• Pickup at:{" "}
              {summaryData?.pickupLocation}
            </p>
          </div>
        </div>

        {/* Additional Notes */}
        {summaryData?.additionalNotes && (
          <div className="flex items-start gap-3">
            <FileTextOutlined className="text-xl mt-1 text-gray-500" />
            <div>
              <p className="font-semibold">Additional Notes</p>
              <p className="text-gray-600">{summaryData?.additionalNotes}</p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-primaryGreen text-white py-2 rounded-md w-full hover:bg-primaryGreen/70 transition"
        >
          Book Other Vehicles
        </button>
        <button
          onClick={() => router.push("/account/bookings-trips")}
          className="border border-gray-300 py-2 rounded-md w-full hover:bg-gray-100 transition"
        >
          View My Bookings
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
