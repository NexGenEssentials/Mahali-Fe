"use client";
import React, { useState } from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import aboutImage from "@/public/images/kenya.jpg";
import mahali from "@/public/images/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import HeaderSection from "../components/headers/header";
import { AboutArray, AboutService } from "@/app/constants/arrays";
import ServiceSection from "../components/service/serviceSection";
import guide from "@/public/images/guide2.webp";
import Link from "next/link";
const Array = ["Paul Mugisha", "Joe Smith", "Luke Otota", "Jackson Emma"];
const About = () => {
  const [active, setActive] = useState("What We Do");
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
            <div className="max-md:w-full w-1/2 pt-8 flex flex-col gap-4">
              <ul className="flex items-center justify-evenly gap-2">
                {AboutArray.map((content, index) => (
                  <li
                    onClick={() => setActive(content.title)}
                    className={`${
                      active === content.title
                        ? "border-b-2 border-b-defaultGreen"
                        : ""
                    } text-base text-center font-bold text-defaultGreen py-1 cursor-pointer`}
                    key={index}
                  >
                    {content.title}
                  </li>
                ))}
              </ul>
              <div className="h-3/4 w-3/4 mx-auto pt-8">
                {AboutArray.map((content, index) => (
                  <>
                    {active === content.title && (
                      <span key={index} className=" text-base ">
                        <p className="text-black opacity-70 text-center relative">
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
        <div className="max-w-[1750px] mx-auto w-full bg-slate-100 bg-opacity-20 p-8 flex flex-col gap-8">
          <HeaderSection title="" subtitle="Why Travel with Us?" />
          <div className="flex flex-wrap  items-stretch justify-center gap-4">
            {AboutService.map((service, index) => (
              <div
                key={index}
                className=" group p-4 text-primaryBlue border md:w-1/3 lg:w-1/4 flex-col flex gap-2 hover:bg-primaryGreen hover:text-white hover:duration-400 hover:transition-transform hover:-translate-x-2 hover:-translate-y-2"
              >
                <span className="text-base font-semibold">{service.title}</span>
                <span className="text-sm font-medium opacity-70 group-hover:opacity-90">
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <ServiceSection />
        <div className="max-w-[1750px] mx-auto w-full bg-slate-100 bg-opacity-20 p-8 flex flex-col gap-8">
          <HeaderSection title="Guides" subtitle="Our Travel Guides" />
          <div className="w-full flex items-center justify-center gap-4">
            {Array.map((item) => (
              <div key={item} className="relative group w-fit drop-shadow-lg rounded-lg bg-white">
                <div className="relative w-[250px] h-[250px] overflow-hidden">
                  <Image
                    src={guide}
                    alt="our tour guide"
                    className="object-cover w-full h-full group-hover:scale-105 duration-300 rounded-lg"
                  />

                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 duration-300"></div>
                </div>
                <div className="absolute top-1/3 w-full hidden group-hover:flex gap-2 items-center text-primaryWhite justify-center duration-300">
                  <Link href="https://www.instagram.com/mahaliafrica/">
                    <Icon
                      icon="ri:instagram-fill"
                      width="35"
                      height="35"
                      className="hover:text-primaryGreen icon"
                    />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61551684126148">
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
                  <Link href="https://www.linkedin.com/company/mahaliafrica/?viewAsMember=true">
                    <Icon
                      icon="mingcute:linkedin-fill"
                      width="35"
                      height="35"
                      className="hover:text-primaryGreen icon"
                    />
                  </Link>
                </div>
                <span className="p-8">
                  <h2 className="w-full text-center text-lg text-black opacity-60">
                    {item}
                  </h2>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default About;
