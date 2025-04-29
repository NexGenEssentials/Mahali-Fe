"use client";
import React from "react";
import AdminPagesTemplates from "./adminPagesTemplates";
import AdminTourServiceApp from "./components/tour/adminTour";
import AdminCarRentalApp from "./components/car/adminCar";
import { useAppContext } from "../context";
import AdminBookingsPage from "./components/booking/bookingList";
import AdminAccommodationTable from "./components/accommodation/accommodation";

const AdminPage = () => {
  const { adminServiceTab } = useAppContext();
  return (
    <AdminPagesTemplates>
      {adminServiceTab === "Holiday & Tour Packages" && <AdminTourServiceApp />}
      {adminServiceTab === "Car Rentals" && <AdminCarRentalApp />}
      {adminServiceTab === "Bookings" && <AdminBookingsPage />}
      {adminServiceTab === "Accommodation Booking" && (
        <AdminAccommodationTable />
      )}
    </AdminPagesTemplates>
  );
};

export default AdminPage;
