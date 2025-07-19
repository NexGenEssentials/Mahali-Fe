import React, { FC } from "react";

interface DashCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  analysis: string;
}
const DashCard: FC<DashCardProps> = ({ title, value, icon, analysis }) => {
  return (
    <div className="flex flex-col gap-2 text-gray-500 border justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h1 className="">{title}</h1>
      <div className="flex items-center gap-3 justify-between">
        <h2 className="text-3xl font-bold text-black">{value}</h2>
        <span className="w-12 h-12 p-3 rounded-full flex items-center justify-center bg-gray-100">{icon}</span>
      </div>
      <div>
        <span className="text-green-600 pr-2 font-semibold">{analysis}</span>
        from last month
      </div>
    </div>
  );
};

export default DashCard;
