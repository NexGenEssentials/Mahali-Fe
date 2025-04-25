import { useAppContext } from "@/app/context";
import { Logout } from "@/app/helpers/isUserLogedIn";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const myAccountMenu = [
  { name: "Home", link: "/", icon: "fluent:home-20-filled" },
  { name: "My account", link: "/account", icon: "mdi:account" },
  { name: "Notification", link: "/account/notification", icon: "mdi:account" },
  {
    name: "Bookings & Trips",
    link: "/account/bookings-trips",
    icon: "zondicons:travel",
  },
  {
    name: "My Rooms",
    link: "#",
    icon: "emojione-monotone:bed",
  },
  {
    name: "Custome Packages",
    link: "/account/my-packages",
    icon: "zondicons:travel",
  },
  { name: "Sign out", link: "/", icon: "ri:logout-circle-line" },
];

const UserProfile = ({ visible = true }: { visible?: boolean }) => {
  const [show, setShow] = useState(false);
  const { setIsLogin, setActiveModalId, isLogin } = useAppContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

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

  const handleLogout = () => {
    Logout();
    setIsLogin(false);
  };

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
          className={`absolute border right-0 bg-white drop-shadow-lg z-50 mt-2 rounded-md overflow-hidden w-64 transition-all duration-300 ${
            show
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {myAccountMenu.map((item) => (
            <Link href={item.link} key={item.name}>
              <div
                onClick={() => {
                  item.name === "Sign out" && handleLogout();
                  if (isLogin) {
                    if (item.name === "My Rooms") {
                      setActiveModalId("my-rooms");
                      setShow(false);
                    }
                  } else {
                    router.push(
                      `/login?callbackUrl=${encodeURIComponent(pathname)}`
                    );
                  }
                }}
                className="p-4 flex gap-4 items-center hover:bg-gray-200  hover:duration-300 cursor-pointer"
              >
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
