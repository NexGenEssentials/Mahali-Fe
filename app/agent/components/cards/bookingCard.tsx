import { title } from "process";
import React, { FC } from "react";

interface BookingCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const BookingCard: FC<BookingCardProps> = ({ title, value, icon }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div>{icon}</div>
      <div className="flex flex-col items-start">
        <h1 className="text-gray-500">{title}</h1>
        <span className="text-black text-2xl font-bold">{value}</span>
      </div>
    </div>
  );
};

export default BookingCard;
