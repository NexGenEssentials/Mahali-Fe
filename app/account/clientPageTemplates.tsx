import React, { ReactNode } from "react";
import AccountNav from "./components/navbar/accountNav";
import Footer from "../(landingPage)/components/footer/footer";

function ClientPageTemplates({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <AccountNav />
      <main className="pt-28 px-8 pb-5 max-w-[1750px] mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default ClientPageTemplates;
