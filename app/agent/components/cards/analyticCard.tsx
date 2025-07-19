import React, { FC } from "react";
interface AnalCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  analysis: string;
}
const AnalyticCard: FC<AnalCardProps> = ({ title, value, icon, analysis }) => {
  return (
    <div className="flex items-center gap-4 text-gray-500 border bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className=" flex items-center justify-center">{icon}</div>
      <div className="space-y-2">
        <h1 className="">{title}</h1>
        <div className="flex items-center gap-3 justify-between">
          <h2 className="text-3xl font-bold text-black">{value}</h2>
        </div>
        <div>
          <span className="text-green-600 pr-2 font-semibold">{analysis}</span>
          from last month
        </div>
      </div>
    </div>
  );
};

export default AnalyticCard;
