"use client";
import React, { useState } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AccountSettingsMenu } from "@/app/constants/arrays";
import Link from "next/link";

function AccountPage() {
  const name: string = "John Doe";
  const [showStatus, setShowStatus] = useState(true);

  return (
    <ClientPageTemplates>
      <div className="pt-10 px-8 flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          {!name ? (
            <Icon
              icon="codicon:account"
              width="40"
              height="40"
              className="text-slate-300"
            />
          ) : (
            <span className="uppercase text-3xl border-2 border-primaryGreen text-primaryGreen h-12 w-12 rounded-full flex items-center justify-center p-4 font-bold">
              {name.charAt(0)}
            </span>
          )}

          <span className="text-sm">
            <h3 className="text-lg font-bold text-primaryGreen">
              Hi, {name} 👋
            </h3>
            <h3>Thank you for choosing Mahali Africa</h3>
          </span>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {/* status bar */}
          {showStatus && (
            <div className="border px-8 py-4 w-full lg:w-3/4 text-primaryBlue flex flex-col gap-4 rounded-md">
              <span className="font-semibold">Complete your profile</span>
              <span className="text-sm text-opacity-40">
                Complete your profile and use this information for your next
                booking
              </span>
              <span className="flex gap-2 text-sm font-semibold text-nowrap">
                <span className="p-3 text-white bg-primaryGreen border border-primaryGreen rounded-md cursor-pointer ">
                  Complete Now
                </span>
                <span
                  onClick={() => setShowStatus(false)}
                  className="p-3 text-primaryGreen cursor-pointer hover:border hover:border-primaryGreen hover:duration-300 rounded-md"
                >
                  Not now
                </span>
              </span>
            </div>
          )}

          {/* card for use information */}
          <div className="flex gap-4 w-full flex-wrap items-stretch">
            {AccountSettingsMenu.map((item) => (
              <Link
                href={item.items[0].link}
                key={item.category}
                className="w-[400px] self-stretch border text-primaryBlue rounded-md shadow-sm shadow-slate-200 flex flex-col gap-4 p-6"
              >
                <h2 className="font-bold text-lg ">{item.category}</h2>
                <div className="flex flex-col w-full">
                  {item.items.map((item, index) => (
                    <Link
                    href={item.link}
                      key={index}
                      className="text-sm hover:text-primaryGreen hover:duration-300 flex items-center justify-between gap-4 w-full hover:bg-slate-200 py-2 px-4 rounded-md"
                    >
                      <span className="flex gap-4 items-end text-nowrap">
                        <Icon icon={item.icon} width="24" height="24" />
                        <span>{item.name}</span>
                      </span>
                      <Icon icon="weui:arrow-outlined" width="16" height="30" />
                    </Link>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ClientPageTemplates>
  );
}

export default AccountPage;
