import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const myAccountMenu = [
  { name: "My account", link: "/account", icon: "mdi:account" },
  { name: "Notification", link: "/notification", icon: "mdi:account" },
  {
    name: "Bookings & Trips",
    link: "/bookings-trips",
    icon: "zondicons:travel",
  },
  {
    name: "Reviews",
    link: "/review",
    icon: "material-symbols-light:reviews-rounded",
  },
  { name: "Saved", link: "/saved", icon: "wpf:like" },
  { name: "Sign out", link: "/", icon: "ri:logout-circle-line" },
];

const UserProfile = ({ visible = true }: { visible?: boolean }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {/* Toggle button */}
        <div
          className={`${
            visible ? "border border-slate-50 border-opacity-25" : ""
          } flex gap-2 shadow rounded-lg ml-8 px-4 py-2 items-center cursor-pointer`}
          onClick={() => setShow(!show)}
        >
          <Icon icon="codicon:account" width="30" height="30" />
          <Icon icon="eva:arrow-down-fill" width="24" height="24" />
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute border right-0 bg-white drop-shadow-lg z-30 mt-2 rounded-md overflow-hidden w-64 transition-all duration-300 ${
            show
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {myAccountMenu.map((item) => (
            <Link href={item.link} key={item.name}>
              <div className="p-4 flex gap-4 items-center hover:bg-gray-200  hover:duration-300 cursor-pointer">
                <Icon
                  icon={item.icon}
                  width="24"
                  height="24"
                  className="text-primaryGreen"
                />
                <span className="text-sm font-semibold text-slate-600">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
