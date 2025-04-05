"use Client";
import React from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";

const page = () => {
  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-6 min-h-screen px-4">
        <Title name="My Tour Package " icon="material-symbols:book" />
      </div>
    </ClientPageTemplates>
  );
};

export default page;
