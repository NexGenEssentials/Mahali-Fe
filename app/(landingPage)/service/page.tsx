"use client";
import React, { useState } from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import nyungwe from "@/public/images/nyungwe2.jpg";
import { HeaderSection } from "../components/headers/header";
import { ServiceList } from "@/app/constants/arrays";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Button from "../components/buttons/button";
import Link from "next/link";

const Services = () => {
  const [activeService, setActiveService] = useState("Holiday & Tour Packages");
  return (
    <LandingPage>
      <div className="">
        <PageHero image={nyungwe} title="Services" />
        <div className="max-w-[1750px] mx-auto flex-col gap-8 flex">
          <div className="w-full bg-slate-100 bg-opacity-20 p-8 flex flex-col gap-8">
            <HeaderSection
              title="Service"
              subtitle="Mahali Exceptional Services"
              description="Your comfort and satisfaction are our priorities. With 24/7 customer support, we are by your side from the moment you arrive to your departure. Expect personalized briefings and attentive care throughout your adventure."
            />
            <div className="flex max-md:flex-wrap gap-8">
              <ul className="w-1/4 min-w-72 h-fit flex flex-col border-x-2 border-t-2 gap-2 mx-4">
                {ServiceList.map((service, index) => (
                  <li
                    onClick={() => setActiveService(service.title)}
                    key={index}
                    className={` ${
                      activeService === service.title
                        ? "text-primaryGreen border-b-primaryGreen"
                        : "text-slate-400"
                    } hover:text-primaryGreen hover:border-b-primaryGreen hover:duration-300 cursor-pointer text-sm  font-semibold flex items-center gap-4 p-2 border-b-2`}
                  >
                    <Icon icon={service.icon} width="16" height="16" />
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full h-[455px] flex gap-4">
                {ServiceList.map((service, index) => (
                  <section key={index}>
                    {activeService === service.title &&
                      (service.available ? (
                        <div className="h-full w-full">
                          {/* Image Container */}
                          <div className="relative w-full h-full flex ">
                            <Image
                              src={service.image}
                              alt={service.title}
                              className="object-cover w-full h-full "
                            />
                            {/* Gradient Background for Paragraph */}
                            <div className="absolute text-lg text-primaryBlue w-3/4 h-full bg-gradient-to-r from-slate-50 via-slate-50 to-transparent bg-opacity-10 p-8 gap-2 flex flex-col items-start justify-center">
                              <p className="text-xl text-center w-2/4">
                                {service.description}
                              </p>
                              <div className="text-white flex justify-center w-2/4">
                                <Link href={service.link}>
                                <Button name="Explore More"/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-full text-defaultGreen text-2xl font-semibold">
                          This Service is currently Not Available !!
                        </div>
                      ))}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default Services;
