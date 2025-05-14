"use client";

import React, { useState } from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import nyungwe from "@/public/images/serengeti.jpg";
import { HeaderSection } from "../components/headers/header";
import { ServiceList } from "@/app/constants/arrays";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Button from "../components/buttons/button";
import Link from "next/link";

const Services = () => {
  const [activeService, setActiveService] = useState("Holiday & Tour Packages");
  const [show, setShow] = useState(false);

  return (
    <LandingPage>
      <div>
        {/* Hero Section */}
        <PageHero image={nyungwe} title="Services" />

        <div className="max-w-[1750px] mx-auto flex flex-col gap-4 px-4 md:px-8 pb-8">
          {/* Services Header */}
          <div className="w-full bg-slate-100 bg-opacity-20 p-8 rounded-lg">
            <HeaderSection
              title="Services"
              subtitle="Mahali Exceptional Services"
              description="Your comfort and satisfaction are our priorities. With 24/7 customer support, we are by your side from the moment you arrive to your departure. Expect personalized briefings and attentive care throughout your adventure."
            />
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center lg:flex-row gap-3 lg:gap-8">
            {/* Sidebar: Service List */}
            <h1 className="lg:hidden w-full text-slate-600 text-lg pl-2 mb-0 font-bold"> Select a Service:</h1>
            <div className="lg:hidden w-full relative">
              <div
                onClick={() => setShow(!show)}
                className="border-2 flex items-center justify-between rounded-lg w-full shadow-md p-4 bg-white"
              >
                <span>{activeService}</span>

                <Icon
                  icon="ep:arrow-down-bold"
                  width="24"
                  height="24"
                  rotate={show ? 270 : 0}
                />
              </div>
              {show && (
                <ul className="absolute z-30 top-15 w-full border-2 rounded-lg shadow-md p-4 bg-white">
                  {ServiceList.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setActiveService(service.title);
                        setShow(false);
                      }}
                      className={`cursor-pointer flex items-center gap-4 p-3 rounded-md transition-all duration-300 ${
                        activeService === service.title
                          ? "bg-primaryGreen text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon icon={service.icon} width="20" height="20" />
                      <span className="text-sm font-semibold">
                        {service.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ul className="max-lg:hidden lg:w-1/4 w-full border-2 rounded-lg shadow-md p-4 bg-white">
              {ServiceList.map((service, index) => (
                <li
                  key={index}
                  onClick={() => setActiveService(service.title)}
                  className={`cursor-pointer flex items-center gap-4 p-3 rounded-md transition-all duration-300 ${
                    activeService === service.title
                      ? "bg-primaryGreen text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon icon={service.icon} width="20" height="20" />
                  <span className="text-sm font-semibold">{service.title}</span>
                </li>
              ))}
            </ul>

            {/* Main Content: Service Details */}
            <div className="lg:w-3/4 w-full">
              {ServiceList.map((service, index) => (
                <section key={index}>
                  {activeService === service.title &&
                    (service.available ? (
                      <div className="relative flex flex-col items-center justify-center w-full h-[500px] rounded-lg shadow-md overflow-hidden">
                        {/* Service Image */}
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="object-cover w-full h-full"
                        />
                        {/* Service Description */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex flex-col items-start justify-center text-white p-6">
                          <h3 className="text-2xl font-bold mb-4">
                            {service.title}
                          </h3>
                          <p className="text-sm md:text-base max-w-2xl mb-6">
                            {service.description}
                          </p>
                          <Link href={service.link}>
                            <Button name="Explore More" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-full h-[300px] text-center text-xl font-semibold text-red-500">
                        This Service is currently Not Available!
                      </div>
                    ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default Services;
