"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const NavItems = [
  { item: "Home", link: "" },
  { item: "About", link: "about" },
  { item: "Service", link: "service" },
  { item: "Destinations", link: "#" },
  { item: "Packages", link: "#" },
  { item: "Contact Us", link: "#contacts" },
];

const Navbar = () => {
  const [close, setClose] = useState(true);
  return (
    <nav className="relative">
      {close && (
        <div className="bg-defaultGreen">
          <div className="max-w-[1750px] mx-auto text-white text-sm font-medium gap-4 flex-wrap flex justify-between items-center px-8 py-3">
            <span>+250793898790</span>
            <span>Get 50% off By selecting a package | Book now</span>
            <span onClick={() => setClose(false)} className="cursor-pointer">
              x
            </span>
          </div>
        </div>
      )}
      <div className="sticky bg-primaryBlue">
        <div className="hidden max-w-[1750px] mx-auto text-white text-sm font-semibold flex-wrap lg:flex items-center justify-between px-8 py-3 ">
          <Link href={"/"}>
            <Image
              src={"/images/logoWhite.jpg"}
              alt="mahali africa"
              height={60}
              width={60}
            />
          </Link>
          <ul className="flex-wrap flex items-center justify-evenly gap-8 w-1/2">
            {NavItems.map((nav, index) => (
              <Link key={index} href={`/${nav.link}`}>
                <motion.li
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className=" hover:text-primaryGreen hover:border-b-2 hover:border-primaryGreen py-2 icon"
                >
                  {nav.item}
                </motion.li>
              </Link>
            ))}
          </ul>
          <div className=" flex-wrap flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="bg-primaryGreen px-6 py-2 rounded-md"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="bg-primaryGreen px-6 py-2 rounded-md"
            >
              SignUp
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
