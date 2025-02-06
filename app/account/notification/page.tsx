import React from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import { Icon } from "@iconify/react/dist/iconify.js";

function NotificationPage() {
  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-8 h-[63vh]">
        <Title name="Notification" icon="zondicons:notification" />
        <div className="w-full md:w-1/2 self-center h-full md:h-1/2 border gap-1 flex flex-col items-center justify-center rounded-md">
          <Icon
            icon="mdi:notifications-active"
            width="104"
            height="104"
            className="text-yellow-600"
          />
          <span className="font-bold text-lg">
            We couldn’t find any notification
          </span>
          <span className="text-sm text-slate-500 w-full md:w-1/2 text-center">When you receive a new notification, it will appear here.</span>
        </div>
      </div>
    </ClientPageTemplates>
  );
}

export default NotificationPage;
