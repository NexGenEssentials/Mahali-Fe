"use client";
import React, { useState } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";

import ListingBulkBooking from "../components/listingBulkBooking";
import BookingSection from "./bookingSection";

 const Tabs = [
  {
    id: "bookings",
    name: "Bookings",
  },
  {
    id: "bulk_bookings",
    name: "Bulk Bookings",
  },
];

function BookingsPage() {
  const [activeTab, setActiveTab] = useState("bookings");
  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-6 min-h-screen px-4 pb-8">
        <div className="flex items-center justify-between">
          <Title name="My Bookings And Trips" icon="material-symbols:book" />

          <div>
            {Tabs.map((tab) => (
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
        </div>
        {activeTab === "bookings" && <BookingSection />}

        {activeTab === "bulk_bookings" && <ListingBulkBooking />}
      </div>
    </ClientPageTemplates>
  );
}

export default BookingsPage;
