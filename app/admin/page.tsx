"use client";
import React from "react";
import AdminPagesTemplates from "./adminPagesTemplates";
import AdminTourServiceApp from "./components/tour/adminTour";
import AdminCarRentalApp from "./components/car/adminCar";
import { useAppContext } from "../context";
import AdminBookingsPage from "./components/booking/bookingList";

const AdminPage = () => {
  const { adminServiceTab } = useAppContext();
  return (
    <AdminPagesTemplates>
      {adminServiceTab === "Holiday & Tour Packages" && <AdminTourServiceApp />}
      {adminServiceTab === "Car Rentals" && <AdminCarRentalApp />}
      {adminServiceTab === "Bookings" && <AdminBookingsPage />}
    </AdminPagesTemplates>
  );
};

export default AdminPage;
