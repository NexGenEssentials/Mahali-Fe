"use client";
import React from "react";
import AgentTemplate from "./agentTemplate";
import DashCard from "./components/cards/dashCard";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
import { bookings } from "../constants/arrays";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import QuickActions from "./components/cards/quickAction";
import ThisMonthStats from "./components/cards/thisMonth";
import Title from "./components/title";

const analysisData = [
  {
    title: "Total Earnings",
    value: "$15,000.00",
    icon: <BsCurrencyDollar className="text-green-600" size={40} />,
    analysis: "+5%",
  },
  {
    title: "Total Bookings",
    value: 120,
    icon: <CiCalendar className="text-red-600" size={40} />,
    analysis: "+10%",
  },
  {
    title: "Commission Rate",
    value: "95%",
    icon: <SlGraph className="text-violet-600" size={40} />,
    analysis: "+2%",
  },
  {
    title: "Total Clients",
    value: 30,
    icon: <IoIosPeople className="text-stone-600" size={40} />,
    analysis: "+15%",
  },
];

const statusStyles: Record<string, string> = {
  confirmed: "bg-green-400 text-gray-800",
  pending: "bg-yellow-400 text-gray-800",
  completed: "bg-stone-400 text-gray-800",
};

const AgentDashboard = () => {
  return (
    <AgentTemplate>
      <div className="space-y-8 px-8 py-4">
        <Title
          title="Dashboard"
          description="Welcome back! Here's your performance overview."
        />
        {/* analytics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {analysisData.map((data, index) => (
            <DashCard
              key={index}
              title={data.title}
              value={data.value}
              icon={data.icon}
              analysis={data.analysis}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* recent bookings */}
          <div className="bg-white p-6 rounded-xl border w-full max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Bookings</h2>
              <button className="border px-4 py-1.5 rounded-md text-sm hover:bg-gray-50">
                <Link href="/agent/bookings">View All</Link>
              </button>
            </div>

            {/* Booking List */}
            <div className="space-y-4">
              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {booking.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{booking.service}</p>
                    <div className="flex items-center space-x-3 mt-2 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-violet-500" />
                        <span>{booking.date}</span>
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          statusStyles[booking.status]
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      ${booking.amount.toFixed(2)}
                    </p>
                    <p className="text-green-600 text-sm">
                      +${booking.commission.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Content */}
          <div className="grid grid-cols-2 lg:grid-cols-1 w-1/3 gap-6">
            <ThisMonthStats />
            <QuickActions />
          </div>
        </div>
      </div>
    </AgentTemplate>
  );
};

export default AgentDashboard;
