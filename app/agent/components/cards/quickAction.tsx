import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlus, FaChartLine } from "react-icons/fa";

const QuickActions = () => {
  const actions = [
    {
      label: "View Analytics",
      icon: <FaChartLine />,
      link: "/agent/analytics",
    },

    {
      label: "Profile Settings",
      icon: <CgProfile />,
      link: "/agent/profile",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border space-y-4">
      <h2 className="text-xl font-semibold">Quick Actions</h2>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            className={`w-full  cursor-pointer rounded-lg text-sm font-medium bg-white border hover:bg-gray-200`}
          >
            <Link
              key={index}
              href={action.link}
              className="w-full flex items-center space-x-3 px-4 py-2"
            >
              {action.icon}
              <span>{action.label}</span>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
