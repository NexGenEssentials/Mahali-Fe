"use client";
import React, { useEffect, useState } from "react";
import ClientPageTemplates from "./clientPageTemplates";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AccountSettingsMenu } from "@/app/constants/arrays";
import Link from "next/link";
import { UserProfile } from "@/app/types";
import { useRouter } from "next/navigation";

function AccountPage() {
  const [showStatus, setShowStatus] = useState(false);
  const [userAccount, setUserAccount] = useState<UserProfile | undefined>(
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/user_profile", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        setUserAccount(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleNavigate = (link: string, title: string, about: string) => {
    router.push(
      `${link}?title=${encodeURIComponent(title)}&about=${encodeURIComponent(
        about
      )}`
    );
  };

  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          {userAccount?.full_name ? (
            <span className="uppercase text-3xl border-2 border-primaryGreen text-primaryGreen h-12 w-12 rounded-full flex items-center justify-center p-4 font-bold">
              {userAccount?.full_name.charAt(0)}
            </span>
          ) : (
            <Icon
              icon="codicon:account"
              width="40"
              height="40"
              className="text-slate-300"
            />
          )}

          <span className="text-sm">
            <h3 className="text-lg font-bold text-primaryGreen">
              Hi, {userAccount?.full_name} 👋
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
                  <Link href={"account/my-settings"}>Complete Now</Link>
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
          <div className="flex gap-4 w-full flex-wrap min-h-[50vh] items-stretch">
            {AccountSettingsMenu.map((item) => (
              <div
                key={item.category}
                className="w-[400px] self-stretch border text-primaryBlue rounded-md shadow-sm shadow-slate-200 flex flex-col gap-4 p-6 hover:drop-shadow-md"
              >
                <h2 className="font-bold text-lg ">{item.category}</h2>
                <div className="flex flex-col w-full">
                  {item.items.map((subItem, index) => (
                    <div
                      key={index}
                      className="text-sm hover:text-primaryGreen hover:bg-slate-100 py-2 px-3 rounded-md cursor-pointer"
                    >
                      <div
                        onClick={() => {
                          if (subItem.about.length > 0) {
                            handleNavigate(
                              subItem.link,
                              subItem.name,
                              subItem.about!
                            );
                          } else {
                            router.push(subItem.link);
                          }
                        }}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="flex gap-4 items-end text-nowrap">
                          <Icon icon={subItem.icon} width="24" height="24" />
                          <span>{subItem.name}</span>
                        </span>
                        <Icon
                          icon="weui:arrow-outlined"
                          width="16"
                          height="30"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ClientPageTemplates>
  );
}

export default AccountPage;
