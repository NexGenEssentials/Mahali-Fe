import { ReactNode } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "antd/dist/reset.css";
export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
