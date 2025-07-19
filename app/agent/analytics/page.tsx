'use client'
import React from "react";
import AgentTemplate from "../agentTemplate";
import Title from "../components/title";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
import AnalyticCard from "../components/cards/analyticCard";
import { AnalyticsGraphSection } from "../components/graph/analyticsGraphSection";
import ServiceTable from "../components/serviceTable";

const analysisData = [
  {
    title: "Growth Rate",
    value: "+23.5%",
    icon: <SlGraph className="text-green-600" size={40} />,
    analysis: "5%",
  },
  {
    title: "Avg Commission",
    value: "$97.50",
    icon: <CiCalendar className="text-red-600" size={40} />,
    analysis: "10%",
  },
  {
    title: "Booking Rate",
    value: "89%",
    icon: <BsCurrencyDollar className="text-violet-600" size={40} />,
    analysis: "2%",
  },
  {
    title: "Client Retention",
    value: 30,
    icon: <IoIosPeople className="text-stone-600" size={40} />,
    analysis: "15%",
  },
];
const AgentAnalytics = () => {
  return (
    <AgentTemplate>
      <div className="space-y-8 px-8 py-4">
        <Title
          title="Analytics"
          description="Detailed insights into your performance and earnings"
        />
        {/* analytics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {analysisData.map((data, index) => (
            <AnalyticCard
              key={index}
              title={data.title}
              value={data.value}
              icon={data.icon}
              analysis={data.analysis}
            />
          ))}
        </div>
        {/* graph section */}
        <AnalyticsGraphSection />
        {/* service table */}
        <ServiceTable />
      </div>
    </AgentTemplate>
  );
};

export default AgentAnalytics;
