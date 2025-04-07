"use client";
import { CustomPackageData } from "@/app/types/tour";
import React from "react";

type Props = {
  customPackage: CustomPackageData;
  onBook: (id: number) => void;
};

const CustomPackageCard: React.FC<Props> = ({ customPackage, onBook }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-between min-h-[350px] w-full max-w-sm border border-gray-100">
      <div>
        <h2 className="text-2xl font-bold text-primaryGreen mb-2">
          {customPackage.name}
        </h2>
        <p className="text-gray-500 mb-4">
          Total Price:{" "}
          <span className="font-semibold text-defaultGreen">
            ${customPackage.total_price}
          </span>
        </p>

        {customPackage.package_activities.length > 0 && (
          <div className="space-y-2 overflow-y-scroll max-h-[300px] p-2 rounded-lg bg-slate-100">
            {customPackage.package_activities.map((activity, index) => (
              <div
                key={activity.id}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200"
              >
                <p className="text-sm font-semibold text-gray-800">
                  {index + 1}. {activity.activity.name}
                </p>
                <p className="text-xs text-gray-500">
                  Location: {activity.activity.location}
                </p>
                <p className="text-xs text-gray-500">
                  Days: {activity.number_of_days} | Subtotal: $
                  {activity.sub_total_price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => onBook(customPackage.id)}
        className="mt-6 border border-primaryGreen text-defaultGreen hover:bg-primaryGreen hover:text-white font-bold py-3 rounded-xl transition-all duration-300"
      >
        Book Now
      </button>
    </div>
  );
};

export default CustomPackageCard;
