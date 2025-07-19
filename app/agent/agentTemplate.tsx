"use client";
import React, { ReactNode } from "react";
import SideBar from "./components/sideBar";
import Footer from "../(landingPage)/components/footer/footer";

const AgentTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AgentTemplate;
