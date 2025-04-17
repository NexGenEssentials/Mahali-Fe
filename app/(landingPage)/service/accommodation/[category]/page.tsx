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
import { getAllAccomodations } from "@/app/api/accommodation/action";
import { AccommodationType } from "@/app/types/accommodation";
import Loading from "@/app/loading";

// Main accommodation category component

const AccommodationCategory = ({
  params,
}: {
  params: { category: string };
}) => {
  const [Accommodations, setAccomodations] = useState<AccommodationType[]>([]);
  const [getAccommodations, setGetAccommodations] = useState<
    AccommodationType[]
  >([]);
  const [loading, setLoading] = useState(false);
  const category = decodeURIComponent(params.category);

  useEffect(() => {
    accommodations();
  }, []);

  const accommodations = async () => {
    setLoading(true);
    try {
      const result = await getAllAccomodations();
      if (result.success) {
        setGetAccommodations(result.data);
        setAccomodations(filterByCategory(category, result.data));
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  // Search functionality
  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  if (loading) return <Loading />;

  console.log({ category, Accommodations });

  return (
    <LandingPage>
      <ServicePageHero
        image={accom1}
        service={`accommodation/${category}`}
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />

      <div className="max-w-[1750px] mx-auto flex flex-col w-full items-center gap-8">
        {/* Search Bar */}
        <div className="flex flex-col gap-1 my-8 w-3/4">
          <Search
            placeholder="search by location..."
            allowClear
            size="large"
            onSearch={onSearch}
          />
        </div>

        {/* Filters and Rooms */}
        <div className="w-full flex gap-4 items-start max-lg:flex-wrap justify-center px-4 mb-8">
          <div className="flex lg:flex-col gap-2">
            <CheckAvailability />
            <PriceFilter />
            <RoomAmenities />
          </div>

          <div className="flex flex-col space-y-4 w-full">
            {Accommodations.map((accomod) => (
              <AccommodationCard
                key={accomod.id}
                accomod={accomod}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default AccommodationCategory;
