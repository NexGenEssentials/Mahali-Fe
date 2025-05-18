"use client";
import React, { useState } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import GobackButton from "../components/header/gobackBnt";
import { filteredMenuItems } from "@/app/helpers/filter";
import { Icon } from "@iconify/react/dist/iconify.js";
import PersonalDetails from "../components/personalDetails";
import { useSearchParams } from "next/navigation";

function ClientSettings() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const About = searchParams.get("about");
  const [active, setActive] = useState(title);
  const [about, setabout] = useState(About);
  return (
    <ClientPageTemplates>
      <div className="flex flex-col h-[80vh]">
        <GobackButton />

        <div className="flex gap-12 mt-8">
          <aside className="flex flex-col rounded-md border max-w-sm">
            <div className="px-2 border-b">
              <Title name="settings" icon="material-symbols:settings" />
            </div>
            {filteredMenuItems.map((item, index) => (
              <span
                onClick={() => {
                  setActive(item.name), setabout(item?.about!);
                }}
                key={index}
                className={`${
                  active === item.name && "underline text-primaryGreen"
                } border-b p-4 flex gap-4 items-center cursor-pointer hover:text-primaryGreen hover:duration-500 hover:underline transition`}
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center p-2">
                  <Icon
                    icon={item.icon}
                    width="24"
                    height="24"
                    className="text-opacity-15"
                  />
                </div>
                <h2 className="font-light">{item.name}</h2>
              </span>
            ))}
          </aside>

          <section className="">
            <h1 className="text-primaryBlue font-bold text-3xl mb-2">
              {active}
            </h1>
            <p className="text-sm text-slate-500 ">{about}</p>

            {active === "Personal details" && <PersonalDetails />}
            {active === "Security settings" && <PersonalDetails />}
          </section>
        </div>
      </div>
    </ClientPageTemplates>
  );
}

export default ClientSettings;
