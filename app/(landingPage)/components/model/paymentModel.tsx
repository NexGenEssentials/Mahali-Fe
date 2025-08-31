"use client";
import {
  CreatePaymentMethod,
  StatusPaymentMethod,
} from "@/app/api/booking/action";
import { useAppContext } from "@/app/context";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import mtn from "@/public/images/mtn-momo.png";
import airtel from "@/public/images/airtel-momo.png";

type PaymentMethod = "card" | "mobile";

type Props = {};

const PaymentMethodModel: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<PaymentMethod>("card");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { bookingData, setActiveModalId } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({
    initiated: false,
    is_paid: false,
    status: "",
    refid: "",
  });

  const handleClose = () => {
    setActiveModalId(null);
  };

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await StatusPaymentMethod(paymentStatus.refid);
       
        if (
          response.data.payment_status.toLocaleLowerCase() === "completed" ||
          response.data.payment_status.toLocaleLowerCase() === "failed"
        ) {
          setPaymentStatus({
            initiated: true,
            is_paid: true,
            status: response.data.payment_status,
            refid: response.data.refid,
          });
          setLoading(false);
        } else {
          setTimeout(() => {
            checkPaymentStatus();
          }, 10000);
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    checkPaymentStatus();
  }, [paymentStatus.initiated === true]);

  const handleSelect = async () => {
    let method;
    if (activeTab === "mobile" && phoneNumber.trim() !== "") {
      method = "momo";
    }
    if (activeTab === "card") {
      method = "cc";
    }

    const formData = {
      booking_id: bookingData?.id || bookingData.booking_id,
      pmethod: method,
      amount: Number(bookingData?.total_price),
      redirect_url: "https://mahaliafrica.com/account/bookings-trips",
      phone: activeTab === "mobile" ? `+25${phoneNumber}` : "",
    };

    try {
      setLoading(true);
      const result = await CreatePaymentMethod(formData);
      if (result.url) {
        router.push(`${result.url}`);
      }
      
     
      if (activeTab === "mobile" && result.success === 0) {
        setPaymentStatus({
          initiated: false,
          is_paid: true,
          status: "failed",
          refid: result.refid,
        });
      }
      else if(activeTab === "mobile" ) {
        setPaymentStatus({
          initiated: true,
          is_paid: false,
          status: "pending",
          refid: result.refid,
        });
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
      {paymentStatus.is_paid ? (
        <>
          {paymentStatus.status.toLowerCase() === "completed" ? (
            <div className="w-full gap-2 flex flex-col text-center items-center justify-center">
              <Icon
                icon="icon-park-solid:check-one"
                className="text-green-600"
                width="80"
                height="80"
              />

              <h1 className="text-2xl text-gray-500 font-semibold">
                Your Payment Was Successful!
              </h1>
              <p className="text-gray-400 mt-2">
                Thank you for your payment. You can access your bookings below.
              </p>
              <a
                href="/account/bookings-trips"
                onClick={handleClose}
                className="w-full bg-green-200 text-slate-700 py-3 font-bold duration-300 rounded-lg hover:bg-green-300 transition"
              >
                View My Bookings
              </a>
            </div>
          ) : paymentStatus.status.toLowerCase() === "failed" ? (
            <div className="w-full gap-2 flex flex-col items-center justify-center text-center">
              <Icon
                icon="icon-park-solid:close-one"
                className="text-red-600"
                width="80"
                height="80"
              />
              <h1 className="text-2xl text-red-600 font-semibold">
                Payment Failed
              </h1>
              <p className="text-gray-400">
                Unfortunately, your payment did not go through. Please try again
                or contact support. <span className="font-semibold text-primaryGreen">+250793898790</span>
              </p>
              <a
                onClick={handleClose}
                href="/contact-us"
                className=" w-full px-6 py-3 text-slate-700 font-bold bg-green-200 hover:bg-green-300 rounded-lg transition duration-300"
              >
                Contact Support
              </a>
            </div>
          ) : null}
        </>
      ) : (
        <>
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
                <div className="flex justify-center items-center mb-4">
                  <Image
                    src={mtn}
                    alt="MTN Mobile Money"
                    width={100}
                    height={50}
                    className="w-24 h-12 object-contain"
                  />
                  or
                  <Image
                    src={airtel}
                    alt="Airtel Money"
                    width={100}
                    height={50}
                    className="w-24 h-12 object-contain"
                  />
                </div>
                <label className="block text-sm text-gray-600">
                  Enter Mobile Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  title="Please enter a valid 10-digit mobile number"
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
            {loading ? "Initiating payment..." : "Continue"}
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentMethodModel;
