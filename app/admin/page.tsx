"use client";
import React from "react";
import AdminPagesTemplates from "./adminPagesTemplates";
import AdminTourServiceApp from "./components/tour/adminTour";
import AdminCarRentalApp from "./components/car/adminCar";
import { useAppContext } from "../context";

const AdminPage = () => {
  const { adminServiceTab } = useAppContext();
  return (
    <AdminPagesTemplates>
      {adminServiceTab === "Holiday & Tour Packages" && <AdminTourServiceApp />}
      {adminServiceTab === "Car Rentals" && <AdminCarRentalApp />}
    </AdminPagesTemplates>
  );
};

export default AdminPage;
