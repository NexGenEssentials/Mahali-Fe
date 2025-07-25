"use client";
import React, { useState } from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import aboutImage from "@/public/images/kenya.jpg";
import mahali from "@/public/images/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HeaderSection } from "../components/headers/header";
import { AboutArray, AboutService, StaffList } from "@/app/constants/arrays";
import ServiceSection from "../components/service/serviceSection";
import guide from "@/public/images/profile.png";
import Link from "next/link";

const About = () => {
  const [active, setActive] = useState("What We Do");
  const [category, setCategory] = useState("Board");
  return (
    <LandingPage>
      <div className="">
        <PageHero image={aboutImage} title="About Us" />
        <div className="max-w-[1750px] mx-auto p-8 flex-col flex gap-8">
          <div className="flex justify-center items-start max-md:flex-wrap ">
            <div className="max-md:w-full w-1/2 flex items-center justify-center">
              <Image
                src={mahali}
                alt="mahali africa"
                className="Object-cover h-3/4 w-3/4 "
              />
            </div>
            <div className="max-md:w-full w-1/2 pt-3 sm:pt-8 flex flex-col gap-4">
              <ul className="flex items-center justify-evenly gap-2">
                {AboutArray.map((content, index) => (
                  <li
                    onClick={() => setActive(content.title)}
                    className={`${
                      active === content.title
                        ? "border-b-2 border-b-defaultGreen text-defaultGreen"
                        : " text-slate-400"
                    } text-base text-center font-bold py-1 cursor-pointer hover:text-defaultGreen`}
                    key={index}
                  >
                    {content.title}
                  </li>
                ))}
              </ul>
              <div className="h-3/4 w-full sm:w-3/4 mx-auto pt-2 sm:pt-8">
                {AboutArray.map((content, index) => (
                  <>
                    {active === content.title && (
                      <span key={index} className="text-base ">
                        <p className="text-black opacity-70 sm:text-center relative">
                          <span className="text-primaryGreen text-3xl font-serif absolute -left-4 -top-2 ">
                            <Icon
                              icon="ri:single-quotes-l"
                              width="24"
                              height="24"
                              rotate={20}
                            />
                          </span>
                          {content.description}
                        </p>
                      </span>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex max-md:items-start max-md:justify-start items-center justify-evenly gap-4 max-md:flex-wrap">
            <div className="flex gap-2 items-start ">
              <span className="bg-defaultGreen p-4 w-16 h-16">
                <Icon
                  icon="fa-solid:money-check-alt"
                  width="35"
                  height="25"
                  className="text-white"
                />
              </span>
              <span>
                <h3 className="font-semibold text-base">Affordability</h3>{" "}
                <p className="text-sm pt-1">
                  Providing excellence at affordable prices.
                </p>
              </span>
            </div>
            <div className="flex gap-2 items-start ">
              <span className="bg-defaultGreen p-4 w-16 h-16">
                <Icon
                  icon="fa6-solid:award"
                  width="35"
                  height="35"
                  className="text-white"
                />
              </span>
              <span>
                <h3 className="font-semibold text-base">Best Services</h3>{" "}
                <p className="text-sm pt-1">
                  Superior assistance with a commitment to customer delight.
                </p>
              </span>
            </div>
            <div className="flex gap-2 items-start ">
              <span className="bg-defaultGreen p-4 w-16 h-16">
                <Icon
                  icon="game-icons:africa"
                  width="35"
                  height="35"
                  className="text-white"
                />
              </span>
              <span>
                <h3 className="font-semibold text-base">Africa Coverage</h3>{" "}
                <p className="text-sm pt-1">
                  Extensive African reach with unique travel experiences.
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[1750px] mx-auto w-full px-6 py-12">
          <HeaderSection title="" subtitle="Why Travel with Us?" />
          <div className="flex gap-10 flex-wrap justify-center  mt-10">
            {AboutService.map((service, index) => (
              <div
                key={index}
                className="bg-[#f8f6f2] p-6 rounded-2xl border max-w-[400px] border-gray-200 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <div className="h-[2px] w-10 bg-[#267c54] my-4" />

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow"
                    />
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ServiceSection />
        <div className="max-w-[1750px] mx-auto w-full bg-slate-100 bg-opacity-20 p-8 flex flex-col gap-4">
          <HeaderSection title="Staff" subtitle="Our Team" />
          <div className="flex flex-col gap-8 ">
            <ul className="w-full sm:w-4/5 md:w-1/3 mx-auto flex items-center justify-evenly gap-2">
              {StaffList.map((cat, index) => (
                <li
                  onClick={() => setCategory(cat.category)}
                  className={`${
                    category === cat.category
                      ? "border-b-2 border-b-defaultGreen text-defaultGreen"
                      : "text-slate-400"
                  } text-base text-center font-bold hover:text-defaultGreen py-1 cursor-pointer`}
                  key={index}
                >
                  {cat.category}
                </li>
              ))}
            </ul>

            {StaffList.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.category === category
                    ? "w-full flex items-center flex-wrap justify-center gap-4"
                    : "hidden"
                }`}
              >
                {item.category === category && (
                  <>
                    {item.list.map((staff, index) => (
                      <div
                        key={index}
                        className="relative group w-fit drop-shadow-lg rounded-lg bg-white overflow-hidden"
                      >
                        <div className="relative w-full h-[250px] overflow-hidden">
                          <Image
                            src={staff.image || guide}
                            alt="our tour guide"
                            className="object-top w-full h-full group-hover:scale-105 duration-300 rounded-lg"
                          />

                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 duration-300"></div>
                        </div>

                        <div className="absolute top-1/3 w-full hidden group-hover:flex gap-2 items-center text-white justify-center duration-300">
                          <Link href="#">
                            <Icon
                              icon="ri:instagram-fill"
                              width="35"
                              height="35"
                              className="hover:text-primaryGreen icon"
                            />
                          </Link>
                          <Link href="#">
                            <Icon
                              icon="ic:baseline-facebook"
                              width="35"
                              height="35"
                              className="hover:text-primaryGreen icon"
                            />
                          </Link>
                          <Link href="#">
                            <Icon
                              icon="prime:twitter"
                              width="35"
                              height="35"
                              className="hover:text-primaryGreen icon"
                            />
                          </Link>
                          <Link href="#">
                            <Icon
                              icon="mingcute:linkedin-fill"
                              width="35"
                              height="35"
                              className="hover:text-primaryGreen icon"
                            />
                          </Link>
                        </div>

                        <span className="p-4 flex flex-col items-center">
                          <h2 className="w-full text-center text-lg text-primaryBlue opacity-60">
                            {staff.name}
                          </h2>
                          <p className="text-black opacity-50 text-sm text-wrap">
                            {staff.title}
                          </p>
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default About;
