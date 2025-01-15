import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ContextProvider from "./context";
import CenterModal from "./(landingPage)/components/model/centerModel";
import RightModal from "./(landingPage)/components/model/rightSideModel";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mahali Africa Adventures",
  description: "Tour and travel agency working from Rwanda",
  icons: {
    icon: "/images/logoWhite.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
        <AntdRegistry>
          {children}
          <div>
            <CenterModal children={<h1> I am a Model</h1>} id={"tests"} />
            <RightModal children={<h1> I am a Model</h1>} id={"test"} />

          </div>
        </AntdRegistry>

        </ContextProvider>
      </body>
    </html>
  );
}
