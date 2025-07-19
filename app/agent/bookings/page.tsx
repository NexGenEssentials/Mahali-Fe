"use client";
import React, { useState } from "react";
import AgentTemplate from "../agentTemplate";
import Title from "../components/title";
import BookingCard from "../components/cards/bookingCard";
import { CiCalendar } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { MdPending } from "react-icons/md";
import BookingSection from "@/app/account/bookings-trips/bookingSection";
import ListingBulkBooking from "@/app/account/components/listingBulkBooking";

const bookingData = [
  {
    title: "Total Bookings",
    value: 50,
    icon: <CiCalendar className="text-red-600" size={40} />,
  },
  {
    title: "Total Commission",
    value: "$138.40",
    icon: <BsCurrencyDollar className="text-green-600" size={40} />,
  },
  {
    title: "Confirmed",
    value: "30",
    icon: <GiConfirmed className="text-green-600" size={30} />,
  },
  {
    title: "Pending",
    value: "20",
    icon: <MdPending className="text-yellow-600" size={30} />,
  },
];
const TabData = [
  {
    id: "bookings",
    name: "Bookings",
  },
  {
    id: "bulk_bookings",
    name: "Bulk Bookings",
  },
];

const AgentBookings = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  return (
    <AgentTemplate>
      <div className="space-y-8 px-8 py-4">
        <Title
          title="Bookings"
          description="Manage and track all your client bookings"
        />
        {/* analytics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {bookingData.map((data, index) => (
            <BookingCard
              key={index}
              title={data.title}
              value={data.value}
              icon={data.icon}
            />
          ))}
        </div>
        {/* <BookingsPage /> */}
        <div className="py-8">
          <div className=" w-full flex items-center justify-end">
            {TabData.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-primaryGreen text-white"
                    : "text-gray-700"
                } mr-4 p-2 rounded-lg font-semibold text-sm`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {activeTab === "bookings" && <BookingSection />}

          {activeTab === "bulk_bookings" && <ListingBulkBooking />}
        </div>
      </div>
    </AgentTemplate>
  );
};

export default AgentBookings;
