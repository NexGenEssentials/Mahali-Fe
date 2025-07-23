import React, { useEffect, useState } from "react";
import PackageCard from "../package/packageCard";
import { HeaderSection } from "../headers/header";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CountryType, TourPackageType } from "@/app/types/tour";
import { getAllCountry, getCountryTour } from "@/app/api/tour/action";
import { filterCountry } from "@/app/helpers/filter";
import ImagePlaceHolder from "@/public/images/imagePlaceholder.jpg";
import Loading from "@/app/loading";

const SingleDestination = ({
  country,
  countryId,
}: {
  country: string;
  countryId: number;
}) => {
  const [countryDetails, setCountryDetails] = useState<CountryType | null>(
    null
  );
  const [season, setSeason] = useState(countryDetails?.when_to_go[0]?.season);
  const [countryTours, setCountryTours] = useState<TourPackageType[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountryDestination();
    getCountryTours();
  }, [country, countryId]);

  const getAllCountryDestination = async () => {
    setLoading(true);
    try {
      const result = await getAllCountry();
      if (result.success)
        setCountryDetails(filterCountry(result.data, country));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getCountryTours = async () => {
    setLoading(true);
    try {
      const result = await getCountryTour(countryId);

      if (result.success) {
        setCountryTours(result.data);
      } else {
        setCountryTours(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  if (loading) return <Loading />;
  return (
    <div className="">
      <div key={countryDetails?.id} className={`flex flex-col gap-12 `}>
        <div className="flex items-start justify-center flex-wrap gap-8 ">
          <div className="relative h-full max-h-72 overflow-hidden max-md:w-full w-2/5 flex items-center justify-center">
            {/* <Image
              src={countryDetails?.image || ImagePlaceHolder.src}
              alt="mahali africa"
              fill
              className="Object-cover"
            /> */}
            <img
              src={countryDetails?.image || ImagePlaceHolder.src}
              alt="mahali africa"
              className="Object-cover"
            />
          </div>
          <div className="max-md:w-full w-1/2 flex flex-col gap-4 ">
            <h1 className="font-bold text-3xl inline-flex items-center gap-3">
              {" "}
              <span className="h-[3px] w-8 block bg-defaultGreen"></span> About{" "}
              <span className="text-primaryGreen">{countryDetails?.name}</span>
            </h1>
            <span className=" text-black opacity-70 max-w-full">
              {countryDetails?.description}
            </span>
          </div>
        </div>
        {countryDetails?.highlights.length! > 0 && (
          <div className="flex flex-col gap-4">
            <HeaderSection title="" subtitle={`Highlights`} />
            <div className="flex flex-wrap items-stretch justify-center gap-4">
              {countryDetails?.highlights.map((pack, index) => (
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
                      {pack.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <HeaderSection
            title="Packages"
            subtitle={`Top ${countryDetails?.name} Tours`}
            description={
              "Dive into the heart of Africa with our meticulously crafted tours. Traverse lush jungles in search of majestic wildlife, explore vibrant cityscapes rich in culture and history, and immerse yourself in the diverse traditions that make Africa truly unique."
            }
          />
          {countryTours ? (
            <div className="flex gap-12 items-stretch flex-wrap justify-center py-6 ">
              {countryTours?.map((pack, index) => (
                <PackageCard
                  key={pack.id}
                  id={pack.id}
                  location={countryDetails?.name}
                  days={pack.duration_days}
                  image={pack.main_image || ImagePlaceHolder}
                  people={`${
                    pack.min_people === pack.max_people
                      ? ` ${pack.max_people}`
                      : `${pack.min_people}-${pack.max_people}`
                  }`}
                  rate={pack.rating}
                  name={pack.title}
                  route={pack.location}
                  price={pack?.prices[0]?.price}
                />
              ))}
            </div>
          ) : (
            <div className="flex text-3xl font-bold text-primaryGreen gap-4 items-center min-h-[200px] w-full justify-center">
              Packages Not Available
            </div>
          )}
        </div>

        {countryDetails?.when_to_go?.length! > 0 && (
          <div className="max-sm:hidden flex flex-col gap-4">
            <HeaderSection
              title=""
              subtitle={`When To Go​`}
              description={`The best time to visit ${countryDetails?.name} largely depends on your interests and preferences, as well as the activities you plan to engage in during your stay.`}
            />
            <div className="flex gap-8 items-start  justify-center py-6 ">
              {countryDetails?.when_to_go.map((pack) => (
                <div
                  key={pack.id}
                  onClick={() => setSeason(pack.season)}
                  className={` ${
                    season === pack.season
                      ? "bg-defaultGreen text-primaryWhite"
                      : ""
                  }   group p-4 cursor-pointer hover:duration-500 hover:bg-defaultGreen hover:text-primaryWhite font-semibold text-base inline-flex gap-2 items-center`}
                >
                  <span>{pack.season}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center w-full md:w-2/4 mx-auto py-4 ">
              {countryDetails?.when_to_go.map((pack, index) => (
                <div key={pack.id}>
                  {pack.season === season && (
                    <div
                      key={index}
                      className="flex flex-col gap-2  text-center text-black opacity-70"
                    >
                      <span>
                        {" "}
                        "{pack.start_month} to {pack.end_month}"
                      </span>
                      <span className="text-slate-700">{pack.description}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDestination;
