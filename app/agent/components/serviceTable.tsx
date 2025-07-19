"use client";
import React from "react";
import { serviceData } from "./graph/analyticsGraphSection";

const ServiceTable = () => {
  return (
    <div className="mt-10 px-4 md:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Service Performance Details
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Overview of booking stats and earnings
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600">
              <tr>
                <th className="py-3 px-6">Service</th>
                <th className="py-3 px-6">Bookings</th>
                <th className="py-3 px-6">Total Earnings</th>
                <th className="py-3 px-6">Avg Commission</th>
                <th className="py-3 px-6">Growth</th>
              </tr>
            </thead>
            <tbody>
              {serviceData.map((service, index) => {
                const growth = +(Math.random() * 20 ).toFixed(1); 
                const growthColor =
                  growth >= 0 ? "text-green-600" : "text-red-600";

                return (
                  <tr
                    key={service.name}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition-all`}
                  >
                    <td className="py-4 px-6 font-semibold">{service.name}</td>
                    <td className="py-4 px-6">{service.value}</td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      ${service.earnings.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      ${(service.earnings / service.value).toFixed(2)}
                    </td>
                    <td className={`py-4 px-6 font-medium ${growthColor}`}>
                      {growth >= 0 ? "+" : ""}
                      {growth}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;
