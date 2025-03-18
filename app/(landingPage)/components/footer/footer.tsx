"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavItems } from "../navbar/navbar";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-primaryBlue "
      id="contacts"
    >
      <div className="max-w-[1750px] mx-auto  text-primaryWhite text-sm font-light">
        <div className="flex p-4 sm:p-8 gap-8 sm:flex-wrap items-center sm:items-start sm:justify-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:items-center sm:justify-center">
            <div className="max-sm:hidden relative w-[100px] h-[70px] object-cover">
              <Image src={"/images/logo.png"} alt="mahali africa" fill={true} />
            </div>
            <div className="flex gap-4">
              <Link href={"https://www.instagram.com/mahaliafrica/"}>
                <Icon
                  icon="ri:instagram-fill"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link
                href={"https://www.facebook.com/profile.php?id=61551684126148"}
              >
                <Icon
                  icon="ic:baseline-facebook"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link href={"#"}>
                <Icon
                  icon="prime:twitter"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/mahaliafrica/?viewAsMember=true"
                }
              >
                <Icon
                  icon="mingcute:linkedin-fill"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
            </div>
          </div>
          <div className="max-sm:hidden">
            <h1 className="font-bold text-base pb-4">Quick Links</h1>
            <ul className="flex flex-col gap-2 items-start justify-start">
              <div className="flex gap-4 justify-between">
                <ul className="flex flex-col gap-1">
                  {NavItems.slice(0, 3).map((link, index) => (
                    <Link key={index} href={`/${link.link}`}>
                      <li className="flex items-center hover:text-primaryGreen icon">
                        <Icon icon="uil:angle-right" width="24" height="24" />
                        <span>{link.item}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  {NavItems.slice(3).map((link, index) => (
                    <Link key={index + 3} href={`/${link.link}`}>
                      <li className="flex items-center hover:text-primaryGreen icon">
                        <Icon icon="uil:angle-right" width="24" height="24" />
                        <span>{link.item}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-base pb-4"> Contact Info</h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Icon
                  icon="line-md:phone-add"
                  width="20"
                  height="20"
                  className="text-primaryGreen icon"
                />
                <span>+250793898790</span>
              </div>
              <div className="flex gap-2 items-center">
                <Icon
                  icon="entypo:email"
                  width="20"
                  height="20"
                  className="text-primaryGreen icon"
                />
                <span>info@mahaliafrica.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <Icon
                  icon="mdi:address-marker-outline"
                  width="20"
                  height="20"
                  className="text-primaryGreen icon"
                />
                <span>KG 180 AVE, Kigali Rwanda</span>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden flex flex-col h-full items-center justify-center">
            <h1 className="font-bold text-base pb-4">
              Subscribe to our Newsletter <br />& Discover the best offers!
            </h1>
            <div className="flex gap-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="enter email"
                className="p-2 w-full rounded-md focus:outline-none text-slate-700"
              />
              <motion.button
                whileHover={{
                  scaleX: 1.05,
                  x: 10,
                  transition: { duration: 0.25 },
                }}
                className="p-3 bg-primaryGreen rounded-md"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
        <div className="grid place-content-center border-t border-t-defaultGreen text-primaryGreen font-light text-xs p-4">
          {" "}
          &copy;{currentYear} mahali africa
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
