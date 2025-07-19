import React from "react";

const stats = {
  bookings: 24,
  commission: 2340,
  averageCommission: 97.5,
};

const ThisMonthStats = () => {
  return (
    <div className="bg-white p-6 rounded-xl border space-y-4">
      <h2 className="text-xl font-semibold">This Month</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center text-gray-700">
          <span>Bookings</span>
          <span className="text-black text-lg font-semibold">
            {stats.bookings}
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span>Commission</span>
          <span className="text-green-600 text-lg font-semibold">
            ${stats.commission.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span>Avg. Commission</span>
          <span className="text-black text-lg font-semibold">
            ${stats.averageCommission.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThisMonthStats;
