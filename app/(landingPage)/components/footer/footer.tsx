"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavItems } from "../navbar/navbar";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");
      setEmail("");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

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
              <Link
                target="_blank"
                href={"https://www.instagram.com/mahaliafrica/"}
              >
                <Icon
                  icon="ri:instagram-fill"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61551684126148"}
              >
                <Icon
                  icon="ic:baseline-facebook"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link target="_blank" href={"https://x.com/africamaha56161?s=21"}>
                <Icon
                  icon="prime:twitter"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/mahaliafrica/"}
              >
                <Icon
                  icon="mingcute:linkedin-fill"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://youtube.com/@mahaliafrica?si=9NnXp5ohh0-WHcMa"}
              >
                <Icon
                  icon="mdi:youtube"
                  width="24"
                  height="24"
                  className="hover:text-primaryGreen icon"
                />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.tiktok.com/@mahaliafrica?_t=ZM-8wJgJENUhCZ&_r=1"
                }
              >
                <Icon
                  icon="hugeicons:tiktok"
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
                <a
                  href="https://wa.me/250793898790?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20assist%20me%3F%20Thank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primaryGreen hover:underline duration-100 transition"
                >
                  +250793898790
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Icon
                  icon="entypo:email"
                  width="20"
                  height="20"
                  className="text-primaryGreen icon"
                />
                <a
                  href="mailto:info@mahaliafrica.com"
                  className="hover:text-primaryGreen hover:underline duration-100 transition"
                >
                  info@mahaliafrica.com
                </a>
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
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value), setMessage("");
                }}
                name="email"
                id="email"
                autoComplete="off"
                required
                placeholder="Enter email"
                className="p-2 w-full rounded-md focus:outline-none text-slate-700"
              />
              <motion.button
                whileHover={{
                  scaleX: 1.05,
                  x: 10,
                  transition: { duration: 0.25 },
                }}
                className="p-3 bg-primaryGreen rounded-md"
                disabled={loading || !email}
                onClick={handleSubscribe}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {loading ? "loading..." : "Subscribe"}
              </motion.button>
            </div>
            {message && (
              <div className="text-red-500 text-xs pt-2">{message}</div>
            )}
          </div>
        </div>
        <div className="grid place-content-center border-t border-t-defaultGreen text-primaryGreen font-light text-xs p-4">
          {" "}
          &copy;{currentYear} Mahali Africa
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
