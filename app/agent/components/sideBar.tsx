"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaThLarge, FaCalendarAlt, FaChartBar, FaUser } from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaThLarge />,
    link: "/agent",
  },
  {
    name: "Analytics",
    icon: <FaChartBar />,
    link: "/agent/analytics",
  },
  {
    name: "Bookings",
    icon: <FaCalendarAlt />,
    link: "/agent/bookings",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    link: "/agent/profile",
  },
];

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <div className="sticky top-0 w-64 h-screen bg-white border-r flex flex-col py-6 px-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-10 px-2">
        <div className="bg-primaryGreen p-2 rounded-xl">
          <FaChartBar className="text-white text-xl" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">AgentHub</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col space-y-3">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <button
              key={index}
              onClick={() => handleNavigation(item.link)}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg font-semibold transition ${
                isActive
                  ? "text-primaryGreen bg-blue-50"
                  : "text-gray-600 hover:text-primaryGreen hover:bg-blue-50"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
