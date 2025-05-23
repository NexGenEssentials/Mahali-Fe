"use client";
import UserProfile from "@/app/(auth)/account/userProfile";
import { GetRibbon } from "@/app/api/common/action";
import { useAppContext } from "@/app/context";
import { IsLoggedIn } from "@/app/helpers/isUserLogedIn";
import { Ribbon } from "@/app/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const NavItems = [
  { item: "Home", link: "" },
  { item: "About", link: "about" },
  { item: "Services", link: "service" },
  { item: "Destinations", link: "destination" },
  { item: "Packages", link: "#package" },
  { item: "Contact Us", link: "contact-us" },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [hideFixedNav, setHideFixedNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { openNavDiscount, setOpenNavDiscount, setIsLogin, isLogin } =
    useAppContext();
  const [advert, setAdvert] = useState<Ribbon>({
    status: "",
    message: "",
    data: {
      id: 1,
      description: "",
      url: "",
      updated_at: "",
    },
  });

  useEffect(() => {
    getRibbonAdvert();
    setIsMounted(true);
  }, []);

  const getRibbonAdvert = async () => {
    try {
      const result = await GetRibbon();
      if (result.status === "success") {
        setOpenNavDiscount(true);
        setAdvert(result);
      } else {
        setOpenNavDiscount(false);
      }
    } catch (error) {
      console.error("Error fetching ribbon advert:", error);
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY > 300) {
      setShowFixedNav(true);
      setHideFixedNav(false);
    } else if (currentScrollY <= 300 && currentScrollY > 0) {
      setHideFixedNav(true);
      setShowFixedNav(false);
    } else if (currentScrollY === 0) {
      setHideFixedNav(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const loggedIn = await IsLoggedIn();
        setIsLogin(loggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLogin(false);
      }
    };

    checkLogin();
  }, []);

  const renderNavLinks = () => {
    return (
      <ul className="flex flex-col lg:flex-row items-center mb-0 lg:gap-8">
        {NavItems.map((nav, index) => (
          <Link key={index} href={`/${nav.link}`}>
            <motion.li
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="hover:border-b-2 hover:border-primaryGreen py-2 lg:py-0 icon"
            >
              {nav.item}
            </motion.li>
          </Link>
        ))}

        {isLogin && (
          <Link href={`/account`} className="hidden max-lg:flex items-center">
            <motion.li
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="hover:border-b-2 hover:border-primaryGreen py-2 lg:py-0 icon"
            >
              My account
            </motion.li>
          </Link>
        )}

        {!isLogin && (
          <li className="hidden max-lg:flex items-center text-white my-4 gap-4 text-sm">
            <Link href={"/login"}>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="bg-primaryGreen px-6 py-2 rounded-md"
              >
                Login
              </motion.button>
            </Link>
            <Link href={"/signup"}>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="bg-primaryGreen px-6 py-2 rounded-md"
              >
                SignUp
              </motion.button>
            </Link>
          </li>
        )}
      </ul>
    );
  };
  if (!isMounted) return null;
  return (
    <>
      {/* Default Navbar */}
      <nav className="absolute top-0 right-0 left-0 z-50">
        {openNavDiscount && (
          <div className="max-md:hidden bg-defaultGreen">
            <div className="max-w-[1750px] mx-auto text-white text-sm font-medium gap-4 flex-wrap flex justify-between items-center px-8 py-3">
              <span>+250793898790</span>
              <span>
                {advert.data.description} |{" "}
                <Link href={advert.data.url} className="hover:underline">
                  Book now
                </Link>
              </span>
              <span
                onClick={() => setOpenNavDiscount(false)}
                className="cursor-pointer"
              >
                x
              </span>
            </div>
          </div>
        )}

        <div className="max-w-[1750px] mx-auto text-white text-sm font-semibold flex-wrap flex items-center justify-between px-2 md:px-8 py-3">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href={"/"}>
              <div className="h-20 w-20 rounded-full  bg-white flex items-center justify-center">
                <Image
                  src={"/images/logo.png"}
                  alt="mahali africa"
                  height={70}
                  width={70}
                  className="object-cover"
                />
              </div>
            </Link>

            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white lg:hidden focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            )}
          </div>

          {!isMobile && (
            <div className="flex items-center gap-4 text-white text-base">
              {renderNavLinks()}
              {!isLogin ? (
                <div className="flex items-center gap-4 text-sm">
                  <Link href={"/login"}>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className="bg-primaryGreen px-6 py-2 rounded-md"
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link href={"/signup"}>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className="bg-primaryGreen px-6 py-2 rounded-md"
                    >
                      SignUp
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <UserProfile />
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-gray-100 lg:hidden"
          >
            {renderNavLinks()}
          </motion.div>
        )}
      </nav>

      {/* Fixed Navbar */}
      {showFixedNav && !hideFixedNav && (
        <nav
          className={`fixed top-0 right-0 left-0 z-50 bg-white shadow-md transition-transform duration-1000 ${
            showFixedNav && !hideFixedNav
              ? "translate-y-0"
              : "-translate-y-full"
          }`}
        >
          <div className="max-w-[1750px] mx-auto text-black text-sm font-semibold flex-wrap flex items-center justify-between px-2 md:px-8 py-3">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link href={"/"}>
                <Image
                  src={"/images/logoWhite.jpg"}
                  alt="mahali africa"
                  height={60}
                  width={60}
                />
              </Link>

              {isMobile && (
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-slate-900 lg:hidden focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        menuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              )}
            </div>

            {!isMobile && (
              <div className="flex items-center gap-4 text-defaultGreen">
                {renderNavLinks()}
                {!isLogin ? (
                  <div className="flex items-center text-white gap-4">
                    <Link href={"/login"}>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-primaryGreen px-6 py-2 rounded-md"
                      >
                        Login
                      </motion.button>
                    </Link>
                    <Link href={"/signup"}>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-primaryGreen px-6 py-2 rounded-md"
                      >
                        SignUp
                      </motion.button>
                    </Link>
                  </div>
                ) : (
                  <UserProfile visible={false} />
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          {menuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-gray-100 lg:hidden"
            >
              {renderNavLinks()}
            </motion.div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
