"use client";
import React, { ReactNode, useState } from "react";
import Footer from "../(landingPage)/components/footer/footer";
import AccountNav from "../account/components/navbar/accountNav";
import { ServiceList } from "../constants/arrays";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppContext } from "../context";

function AdminPagesTemplates({ children }: { children: ReactNode }) {
  const { adminServiceTab, setAdminServiceTab } = useAppContext();
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <AccountNav />
      <div className="w-full flex  pt-28 pb-5 px-8 max-w-[1750px] mx-auto">
        <aside className={`${show ? "min-w-[300px]" : "px-6"} relative `}>
          {show && (
            <ul className=" w-full border-2 rounded-lg shadow-md p-4 bg-white">
              {ServiceList.slice(0, 3).map((service, index) => (
                <li
                  key={index}
                  onClick={() => setAdminServiceTab(service.title)}
                  className={`cursor-pointer flex items-center gap-4 p-3 rounded-md transition-all duration-300 ${
                    adminServiceTab === service.title
                      ? "bg-primaryGreen text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon icon={service.icon} width="20" height="20" />
                  <span className="text-sm font-semibold">{service.title}</span>
                </li>
              ))}
              <li
                onClick={() => setAdminServiceTab("Bookings")}
                className={`cursor-pointer flex items-center gap-4 p-3 rounded-md transition-all duration-300 ${
                  adminServiceTab === "Bookings"
                    ? "bg-primaryGreen text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon icon="material-symbols:book" width="20" height="20" />
                <span className="text-sm font-semibold">{"Bookings"}</span>
              </li>
            </ul>
          )}
          <span
            onClick={() => setShow(!show)}
            className="absolute right-0 top-24 font-semibold rounded-l-full py-2 text-sm text-white bg-primaryGreen shadow-xl px-2 cursor-pointer"
          >
            {show ? "Hide" : "Show sidebar"}
          </span>
        </aside>
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPagesTemplates;
