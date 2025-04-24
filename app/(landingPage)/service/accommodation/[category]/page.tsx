"use client";
import React, { useEffect, useState } from "react";
import Search, { SearchProps } from "antd/es/input/Search";
import CheckAvailability from "@/app/(landingPage)/components/service/accommodation/filters/checkAvailability";
import PriceFilter from "@/app/(landingPage)/components/service/accommodation/filters/price";
import RoomAmenities from "@/app/(landingPage)/components/service/accommodation/filters/roomAmenties";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import { filterByCategory } from "@/app/helpers/filter";
import accom1 from "@/public/images/accom3.jpg";
import AccommodationCard from "@/app/(landingPage)/components/service/accommodation/accomodationCategoryCad";
import { getAccommodationsFilters } from "@/app/api/accommodation/action";
import { AccommodationType } from "@/app/types/accommodation";
import Loading from "@/app/loading";
import { motion } from "motion/react";
import Loader from "@/app/(landingPage)/components/skeleton/loader";

const AccommodationCategory = ({
  params,
}: {
  params: { category: string };
}) => {
  const [Accommodations, setAccomodations] = useState<AccommodationType[]>([]);
  const [loading, setLoading] = useState(false);
  const category = decodeURIComponent(params.category);
  const [facilities, setFacilities] = useState<string[]>([]);
  const [end_date, setEnd_date] = useState("");
  const [start_date, setStart_date] = useState("");
  const [location, setLocation] = useState("");
  const [min_price, setMin_price] = useState(100);
  const [max_price, setMax_price] = useState(1800);

  useEffect(() => {
    accommodations();
  }, []);

  const accommodations = async () => {
    setLoading(true);
    try {
      const result = await getAccommodationsFilters({ category: category });
      if (result.success) {
        setAccomodations(result.data);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const HandleFilters = async () => {
    setLoading(true);
    try {
      const result = await getAccommodationsFilters({
        location,
        start_date,
        end_date,
        max_price,
        min_price,
        facilities,
        category: category,
      });
      if (result.success) {
        setAccomodations(result.data);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingPage>
      <ServicePageHero
        image={accom1}
        service={`accommodation/${category}`}
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />

      <div className="max-w-[1750px] mx-auto flex flex-col w-full items-center mt-8 gap-8">
        {/* Filters and Rooms */}
        <div className="w-full flex gap-4 items-start max-lg:flex-wrap justify-center px-4 mb-8">
          <div className="flex lg:flex-col gap-2">
            <CheckAvailability
              setLocation={setLocation}
              from={setStart_date}
              end={setEnd_date}
            />
            <PriceFilter min={setMin_price} max={setMax_price} />
            <RoomAmenities fac={setFacilities} />
            {/* Filter Button */}
            <motion.button
              onClick={HandleFilters}
              whileTap={{ scale: 0.9 }}
              className="bg-primaryGreen text-white font-semibold w-full p-2 rounded-lg text-sm"
            >
              Filter Facilities
            </motion.button>
            <motion.button
              onClick={() => {
                accommodations();
                setFacilities([]);
                setEnd_date("");
                setLocation("");
                setMax_price(1800);
                setMin_price(20);
                setStart_date("");
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-300 hover:bg-green-500/90 text-white font-semibold w-full p-2 rounded-lg text-sm"
            >
              Clear Filter
            </motion.button>
          </div>

          <div className="flex flex-col space-y-4 w-full">
            {loading ? (
              <Loader />
            ) : Accommodations.length <= 0 ? (
              <div className="flex items-center justify-center h-[300px] font-semibold text-slate-400">
                <h2>Accommodation not available</h2>
              </div>
            ) : (
              Accommodations.map((accomod) => (
                <AccommodationCard
                  key={accomod.id}
                  accomod={accomod}
                  category={category}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default AccommodationCategory;
