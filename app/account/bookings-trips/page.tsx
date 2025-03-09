import React from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import { Icon } from "@iconify/react/dist/iconify.js";

function BookingsPage() {
  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-8 h-[63vh]">
        <Title name="My Bookings And Trips" icon="zondicons:notification" />
        <div className="w-full md:w-1/2 self-center h-full md:h-1/2 border gap-1 flex flex-col items-center justify-center rounded-md">
          <Icon
            icon="arcticons:triple-a"
            width="104"
            height="104"
            className="text-primaryGreen"
          />
          <span className="font-bold text-lg">
            Your Bookings & Trips live here
          </span>
          <span className="text-sm text-slate-500 w-full md:w-1/2 text-center">
            This page displays all your bookings. If you've made a booking but
            don't see it listed here, please check again.
          </span>
        </div>
      </div>
    </ClientPageTemplates>
  );
}

export default BookingsPage;
