import { DestinationCountry } from "@/app/constants/arrays";
import React, { useState } from "react";
import PackageCard from "../package/packageCard";
import HeaderSection from "../headers/header";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const SingleDestination = ({ country }: { country: string }) => {
  const [season, setSeason] = useState("Dry Season");
  return (
    <div className="">
      {DestinationCountry.map((item, index) => (
        <div
          key={index}
          className={`${
            country === item.location ? "flex flex-col gap-12" : "hidden"
          } `}
        >
          <div className="flex items-start justify-center flex-wrap space-y-8 ">
            <div className="max-md:w-full w-1/2 flex items-center justify-center">
              <Image
                src={item.description.image}
                alt="mahali africa"
                className="Object-cover h-3/4 w-3/4 "
              />
            </div>
            <div className="max-md:w-full w-1/2 flex flex-col gap-4 ">
              <h1 className="font-bold text-3xl inline-flex items-center gap-3">
                {" "}
                <span className="h-[3px] w-8 block bg-defaultGreen"></span>{" "}
                About <span className="text-primaryGreen">{item.location}</span>
              </h1>
              <span className=" text-black opacity-70">
                {item.description.content}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <HeaderSection title="" subtitle={`Highlights`} />
            <div className="flex flex-wrap items-stretch justify-center gap-4">
              {country === item.location &&
                item.higlights.map((pack, index) => (
                  <div
                    key={index}
                    className=" group p-4 text-primaryBlue border md:w-1/3 lg:w-1/4 hover:bg-primaryGreen hover:text-white hover:duration-400 hover:transition-transform hover:-translate-x-2 hover:-translate-y-2  flex justify-start gap-2 "
                  >
                    <div className="">
                      <Icon
                        icon={pack.icon}
                        width="30"
                        height="30"
                        className="text-primaryGreen group-hover:bg-white "
                      />
                    </div>
                    <div className="flex-col flex gap-2 ">
                      <span className="text-base font-semibold">
                        {pack.title}
                      </span>
                      <span className="text-sm font-medium opacity-70 group-hover:opacity-90">
                        {pack.desc}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <HeaderSection
              title="Packages"
              subtitle={`Top ${item.location} Tours`}
              description={
                "Dive into the heart of Africa with our meticulously crafted tours. Traverse lush jungles in search of majestic wildlife, explore vibrant cityscapes rich in culture and history, and immerse yourself in the diverse traditions that make Africa truly unique."
              }
            />
            <div className="flex gap-8 items-start max-lg:flex-wrap justify-center py-6 ">
              {country === item.location &&
                item.package.map((pack, index) => (
                  <PackageCard
                    key={index}
                    days={pack.days}
                    image={pack.image}
                    people={pack.people}
                    rate={pack.rate}
                    name={pack.name}
                    route={pack.route}
                  />
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <HeaderSection
              title=""
              subtitle={`When To Go​`}
              description={`The best time to visit ${item.location} largely depends on your interests and preferences, as well as the activities you plan to engage in during your stay.`}
            />
            <div className="flex gap-8 items-start  justify-center py-6 ">
              {country === item.location &&
                item.season.map((pack, index) => (
                  <div
                    key={index}
                    onClick={() => setSeason(pack.period)}
                    className={` ${
                      season === pack.period
                        ? "bg-defaultGreen text-primaryWhite"
                        : ""
                    }   group p-4 cursor-pointer hover:duration-500 hover:bg-defaultGreen hover:text-primaryWhite font-semibold text-base inline-flex gap-2 items-center`}
                  >
                    <Icon
                      icon={pack.icon}
                      width="24"
                      height="24"
                      className={`${
                        season === pack.period ? "text-primaryWhite" : ""
                      }  text-primaryGreen group-hover:bg-defaultGreen group-hover:text-primaryWhite`}
                    />
                    <span>{pack.period}</span>
                  </div>
                ))}
            </div>

            <div className="flex items-center justify-center w-full md:w-2/4 mx-auto py-4 ">
              {country === item.location &&
                item.season.map((pack, index) => (
                  <>
                    {pack.period === season && (
                      <div key={index} className="flex flex-col gap-2  text-center text-black opacity-70">
                        <span> " {pack.time} "</span>
                        <span>{pack.desc}</span>
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleDestination;
