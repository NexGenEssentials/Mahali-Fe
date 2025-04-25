"use client";

import React, { useEffect, useState } from "react";
import LandingPage from "../../landingPageTamplates";
import ServicePageHero from "../../components/service/serviceHeroSection";
import accom from "@/public/images/accom1.jpg";
import { AccommodationForm } from "../../components/hero/forms/servicesForm";
import Search, { SearchProps } from "antd/es/input/Search";
import { HeaderSection } from "../../components/headers/header";
import { motion } from "framer-motion";
import AccomGalleryCard from "../../components/service/accommodation/accomGalleryCard";
import { Icon } from "@iconify/react";
import { getFeaturedAccommodations } from "@/app/helpers/filter";
import Link from "next/link";
import {
  categoryCounts,
  getAccommodationCategory,
  getAllAccomodations,
} from "@/app/api/accommodation/action";
import { AccommodationType } from "@/app/types/accommodation";
import Loader from "../../components/skeleton/loader";
import Loading from "@/app/loading";
import ImagePlaceHolder from "@/public/images/imagePlaceholder.jpg";

const AccommodationService = () => {
  const [Accommodations, setAccomodations] = useState<AccommodationType[]>([]);
  const [AccommodationCategory, setAccomodationCategory] = useState<
    categoryCounts[]
  >([]);
  const [popularAccommodations, setpopularAccommodations] = useState<
    AccommodationType[]
  >([]);
  const [loading, setLoading] = useState(false);
  const onSearch: SearchProps["onSearch"] = (value) => {};

  useEffect(() => {
    accommodations();
  }, []);

  const accommodations = async () => {
    setLoading(true);
    const result = await getAllAccomodations();
    const data = await getAccommodationCategory();
    if (result.success) {
      setLoading(false);
      setAccomodations(result.data);
      setpopularAccommodations(getFeaturedAccommodations(result.data));
    }
    if (data.success) {
      setAccomodationCategory(data.data);
    }
  };

  return (
    <LandingPage>
      {/* Hero Section */}
      <ServicePageHero
        image={accom}
        service="Accommodation"
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />

      <div className="relative max-w-[1750px] mx-auto flex flex-col gap-12 px-4 md:px-8 pb-8">
        {/* Promotion Section */}
        <section className="w-full flex items-center justify-center">
          <div className="md:absolute flex flex-col gap-6 w-full md:w-[90%] bg-primaryGreen text-primaryWhite p-8 rounded-lg shadow-md">
            <div>
              <h1 className="text-3xl font-bold">
                2025 Great Migration Season is Here!
              </h1>
              <p className="text-sm leading-relaxed">
                Book top Mahali Africa Accommodation now at special discounted
                rates – only available for paid reservations made by February
                05, 2025.
              </p>
            </div>
            <div className="w-full flex items-end max-md:flex-wrap gap-4">
              <div className="flex flex-col gap-1">
                <Search
                  placeholder="search by location..."
                  allowClear
                  size="large"
                  onSearch={onSearch}
                />
              </div>
              <AccommodationForm />
            </div>
          </div>
        </section>

        {/* Accommodation Categories */}
        <div className="pt-10">
          <HeaderSection
            title="Accommodation"
            subtitle="Choose a category of your choice"
          />
          <div className="bg-slate-50 p-8 rounded-lg flex gap-6 flex-wrap justify-center">
            {AccommodationCategory.map((category, index) => (
              <Link
                key={index}
                href={`/service/accommodation/${category.category}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer bg-primaryGreen text-primaryWhite px-8 py-4 rounded-lg relative flex items-center gap-2"
                >
                  <span>{category.category}</span>
                  <span className="absolute top-2 right-2 bg-white text-primaryGreen text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {category.count}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Stays */}
        <div>
          <HeaderSection
            title="Make A Reservation"
            subtitle="Most Popular Stays"
            description="Explore the top accommodations our guests rave about and book your favorite stay today!"
          />

          {loading ? (
            <div className="flex gap-6 flex-wrap items-stretch justify-center">
              <Loading />
            </div>
          ) : (
            <div className="flex gap-6 flex-wrap items-stretch justify-center">
              {popularAccommodations.map((accommodation, index) => (
                <div
                  key={index}
                  className="max-w-sm w-full flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Accommodation Image Gallery */}
                  <AccomGalleryCard
                    Gallery={
                      accommodation.images && accommodation.images?.length > 0
                        ? accommodation.images
                        : [ImagePlaceHolder]
                    }
                  />
                  <Link
                    href={`accommodation/${accommodation.category}/${accommodation.id}`}
                  >
                    <div className="flex flex-col gap-2">
                      {/* Title and Rating */}
                      <div className="flex justify-between items-center">
                        <h3 className="text-primaryGreen font-bold uppercase hover:opacity-70 transition-all">
                          {accommodation.name}
                        </h3>
                        <span className="flex items-center text-primaryGreen">
                          <Icon
                            icon="material-symbols-light:star-rounded"
                            width="20"
                            height="20"
                          />
                          {accommodation.rating}
                        </span>
                      </div>
                      {/* Location */}
                      <span className="text-primaryBlue">
                        {accommodation.location}
                      </span>
                      {/* Description */}
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {accommodation.description}
                      </p>
                      {/* Price */}
                      <div className="text-primaryGreen font-semibold text-lg">
                        From ${accommodation.lowest_price.toLocaleString()}
                        /Night
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </LandingPage>
  );
};

export default AccommodationService;
