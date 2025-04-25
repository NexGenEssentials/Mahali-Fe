"use client";
import { CreatePaymentMethod } from "@/app/api/booking/action";
import { useAppContext } from "@/app/context";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type PaymentMethod = "card" | "mobile";

type Props = {};

const PaymentMethodModel: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<PaymentMethod>("card");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { bookingData } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handleSelect = async () => {
    let method;
    if (activeTab === "mobile" && phoneNumber.trim() === "") {
      method = "mm";
    }
    if (activeTab === "card") {
      method = "cc";
    }

    const formData = {
      booking_id: bookingData?.id || bookingData.booking_id,
      pmethod: method,
      amount: Number(bookingData?.total_price),
      redirect_url: "http://localhost:3000/account/bookings-trips",
    };
 
    try {
      setLoading(true);
      const result = await CreatePaymentMethod(formData);

      if (result.url) {
        router.push(`${result.url}`);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-full max-w-lg min-w-[400px] mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

      <div className="flex border-b mb-4">
        <button
          onClick={() => setActiveTab("card")}
          className={`px-4 py-2 font-medium ${
            activeTab === "card"
              ? "border-b-2 border-primaryGreen text-primaryGreen"
              : "text-gray-500"
          }`}
        >
          Payment Card
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-4 py-2 font-medium ${
            activeTab === "mobile"
              ? "border-b-2 border-primaryGreen text-primaryGreen"
              : "text-gray-500"
          }`}
        >
          Mobile Money
        </button>
      </div>

      <div>
        {activeTab === "card" && (
          <div className="text-gray-600">
            <p>You'll be redirected to enter your card details.</p>
            <span className="flex gap-2 items-center">
              <Icon
                icon="brandico:visa"
                width="80"
                height="60"
                className="text-blue-500"
              />
              <Icon icon="logos:mastercard" width="80" height="50" />
            </span>
          </div>
        )}

        {activeTab === "mobile" && (
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Mobile Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter mobile money number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      <button
        onClick={handleSelect}
        className="mt-6 w-full bg-blue-200 text-slate-700 py-3 font-bold duration-300 rounded-lg hover:bg-blue-300 transition"
      >
        {loading ? "Creating..." : "Continue"}
      </button>
    </div>
  );
};

export default PaymentMethodModel;
