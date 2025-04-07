"use client";
import { useEffect, useRef, useState } from "react";
import { style } from "./style";
import {
  CreateCustomPackage,
  getAllCountry,
  getTourCategories,
} from "@/app/api/tour/action";
import { CategoryType, CountryType } from "@/app/types/tour";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppContext } from "@/app/context";
import { getSelectedCategories } from "@/app/helpers/filter";
import { useRouter } from "next/navigation";

import { motion } from "motion/react";

const accommodations = ["Budget", "Mid-range", "Luxury"];
const transportOptions = ["Self-drive", "Mid-range", "Luxury", "Land", "Air"];

export interface SelectedActivityType {
  activity_id: number;
  name: string;
  price: number;
  days: number;
}

export default function CustomTourPackage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<
    SelectedActivityType[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "Hiking",
    "Boat Riding",
  ]);
  const [CategoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [selectedCategoryList, setSelectedCategoryList] = useState<
    CategoryType[]
  >([]);
  const [destinations, setDestination] = useState<CountryType[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("");
  const [duration, setDuration] = useState(1);
  const [selectedPeople, setSelectedPeople] = useState(1);
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);

  const router = useRouter();
  const [packageStatus, setPackageStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setActiveModalId } = useAppContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const toggleActivity = (
    activity_id: number,
    name: string,
    price: number,
    days: number
  ) => {
    setSelectedActivities((prev) => {
      const exists = prev.find(
        (activity) => activity.activity_id === activity_id
      );
      return exists
        ? prev.filter((activity) => activity.activity_id !== activity_id)
        : [...prev, { activity_id, name, price, days }];
    });
  };

  const updateActivityDays = (id: number, change: number) => {
    setSelectedActivities((prev) =>
      prev.map((activity) =>
        activity.activity_id === id
          ? { ...activity, days: Math.max(1, activity.days + change) }
          : activity
      )
    );
  };

  useEffect(() => {
    const activitiesCost = selectedActivities.reduce(
      (acc, activity) => acc + activity.price * activity.days * selectedPeople,
      0
    );

    setPrice(activitiesCost);
  }, [
    selectedActivities,
    selectedAccommodation,
    selectedDestination,
    selectedTransport,
    selectedAccommodation,
    selectedPeople,
  ]);

  useEffect(() => {
    getCategoryList();
    getDestinationList();
  }, []);

  const getCategoryList = async () => {
    setLoading(true);
    try {
      const result = await getTourCategories();
      setCategoryList(result.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    } finally {
      setLoading(false);
    }
  };
  const getDestinationList = async () => {
    try {
      const result = await getAllCountry();
      setDestination(result.data);
    } catch (error) {
      console.error("Error fetching destinations", error);
    }
  };

  useEffect(() => {
    setSelectedCategoryList(
      getSelectedCategories(CategoryList, selectedCategory)
    );
  }, [CategoryList, selectedCategory]);

  const handleBooking = async () => {
    setPackageStatus(true);

    const package_activities = selectedActivities.map((activity) => ({
      activity_id: activity.activity_id,
      number_of_days: activity.days,
    }));

    try {
      const result = await CreateCustomPackage({
        name: name,
        package_activities: package_activities,
      });

      if (result.success) {
        setPackageStatus(false);
        setActiveModalId(null);
        router.push("/account/my-packages");
      }
    } catch (error) {}
  };

  return (
    <>
      {packageStatus || loading ? (
        <div className="flex items-center justify-center w-full  md:min-w-[500px]  max-w-screen-2xl h-[80vh] ">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="px-12 py-8 w-full h-[80vh] mx-auto bg-white rounded-lg overflow-y-scroll">
          <h2 className="text-2xl font-bold mb-4 text-primaryGreen">
            Create Your Custom Tour Package
          </h2>
          {/* package name */}
          <div className={`${style.section}`}>
            <h1 className={`${style.title}`}>Name your Package:</h1>
            <div className="flex-1 gap-2 ">
              <input
                type="text"
                placeholder="create a package name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="outline-none p-3 border rounded-lg w-full"
              />
            </div>
          </div>

          {/* Destination Selection */}
          <div className={`${style.section}`}>
            <h1 className={`${style.title}`}>Select Destination:</h1>
            <div className="flex flex-col gap-2 ">
              <select
                className={`${style.items}`}
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
              >
                <option value="">-- Select --</option>
                {destinations.map((dest) => (
                  <option
                    className={`${style.selectedItem}`}
                    key={dest.id}
                    value={dest.name}
                  >
                    {dest.name}
                  </option>
                ))}
              </select>
              {selectedDestination && (
                <span className="p-2 rounded-lg bg-slate-200 font-semibold w-fit text-sm ">
                  {" "}
                  {selectedDestination}
                </span>
              )}
            </div>
          </div>

          {/* Activities Selection */}
          <div className={`${style.section}`}>
            <div className="flex items-center justify-between w-full mb-3">
              <h1 className={`${style.title}`}>Select Activities:</h1>
              <div>
                <div
                  onClick={() => setShow(!show)}
                  className="text-slate-700 font-bold px-2 py-2 rounded-lg w-fit flex items-center capitalize border hover:bg-primaryGreen hover:text-white duration-300 transition cursor-pointer"
                >
                  <Icon icon="ci:more-vertical" width="20" height="20" />
                  <span>Select More</span>
                </div>
                {show && (
                  <div ref={dropdownRef} className="relative z-30 shadow-lg">
                    <ul className="absolute right-0 top-1 bg-gray-100 border px-4 py-2 shadow-lg rounded max-h-52 overflow-y-scroll">
                      {CategoryList.map((category) => (
                        <li key={category.id} className="flex items-center p-1">
                          <input
                            type="checkbox"
                            className={`${style.selectedItem} mr-2 accent-primaryGreen`}
                            checked={selectedCategory.includes(category.name)}
                            onChange={(e) => {
                              setSelectedCategory(
                                (prev) =>
                                  e.target.checked
                                    ? [...prev, category.name] // Add category if checked
                                    : prev.filter(
                                        (item) => item !== category.name
                                      ) // Remove category if unchecked
                              );
                            }}
                          />
                          <span className="text-sm font-semibold text-slate-700 text-nowrap">
                            {category.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {selectedCategoryList.length <= 0 ? (
              <div className="bg-gray-100 max-w-2xl lg:min-w-[672px] w-full text-center text-primaryGreen/90 h-[200px] font-semibold flex items-center justify-center">
                {" "}
                No activity found in the selected categories.{" "}
              </div>
            ) : (
              <div className="flex items-stretch overflow-x-scroll hide-scrollbar  max-w-2xl lg:min-w-[672px]">
                {selectedCategoryList.map((category) => (
                  <div
                    key={category.id}
                    className="mb-2 border-x border-b max-h-[300px]"
                  >
                    <div
                      className={`text-slate-700 font-bold px-3 py-2 w-full min-w-[260px] capitalize border-y `}
                    >
                      {category.name}
                    </div>
                    <div className="p-3 rounded-b-lg space-y-2">
                      {category.activities.map((activity) => (
                        <div key={activity.id} className="flex items-center">
                          <input
                            type="checkbox"
                            className={`${style.selectedItem} mr-2 accent-primaryGreen`}
                            checked={selectedActivities.some(
                              (a) => a.activity_id === activity.id
                            )}
                            onChange={() =>
                              toggleActivity(
                                activity.id,
                                activity.name,
                                Number(activity.price_per_day),
                                1
                              )
                            }
                          />
                          <div>
                            <span className="text-sm text-slate-500">
                              {activity.name}{" "}
                              <span className="font-semibold text-slate-700">
                                ${Number(activity.price_per_day).toFixed(0)}/day
                              </span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accommodation Selection */}
          <div className={`${style.section}`}>
            <h1 className={`${style.title}`}>Select Accommodation:</h1>
            <select
              className={`${style.items}`}
              value={selectedAccommodation}
              onChange={(e) => setSelectedAccommodation(e.target.value)}
            >
              <option value="">-- Select --</option>
              {accommodations.map((acc) => (
                <option
                  className={`${style.selectedItem}`}
                  key={acc}
                  value={acc}
                >
                  {acc}
                </option>
              ))}
            </select>
          </div>

          {/* Transport Selection */}
          <div className={`${style.section}`}>
            <h1 className={`${style.title}`}>Select Transport:</h1>
            <select
              className={`${style.items}`}
              value={selectedTransport}
              onChange={(e) => setSelectedTransport(e.target.value)}
            >
              <option value="">-- Select --</option>
              {transportOptions.map((transport) => (
                <option
                  className={`${style.selectedItem}`}
                  key={transport}
                  value={transport}
                >
                  {transport}
                </option>
              ))}
            </select>
          </div>

          {/* People Selection */}
          <div className={`${style.section}`}>
            <h1 className={`${style.title}`}>Number of People:</h1>
            <input
              type="number"
              className={`${style.items}`}
              value={selectedPeople}
              min={1}
              onChange={(e) => setSelectedPeople(Number(e.target.value))}
            />
          </div>

          {/* Duration Selection */}
          <div className={`${style.section}`}>
            <h1 className={`${style.title}`}>Duration (Days):</h1>
            <input
              type="number"
              className={`${style.items}`}
              value={duration}
              min={1}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>

          {/* tour Package Breakdown */}
          <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-full lg:max-w-lg mx-auto">
            <h1 className="text-xl font-bold text-slate-800  mb-4 text-center">
              Created Package Breakdown
            </h1>

            <div className="space-y-4">
              <div className="flex gap-2 border-b pb-2">
                <span className="font-bold text-slate-800">Destination:</span>
                <span className="text-slate-700 font-normal text-sm ">
                  {selectedDestination || "N/A"}
                </span>
              </div>

              <div className="border-b pb-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">
                    Activities list
                  </span>
                  <span className="font-bold text-slate-800">
                    Number of Days
                  </span>
                </div>
                {selectedActivities.length < 1 ? (
                  <span className="text-slate-600 font-normal text-sm">
                    N/A
                  </span>
                ) : (
                  <ul className="mt-2 space-y-1 text-slate-700 font-normal text-sm">
                    {selectedActivities.map((item) => (
                      <li
                        key={item.activity_id}
                        className="flex items-center justify-between pb-1"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">✔</span>
                          <span>{item.name}</span>
                          <span className="font-bold">
                            ${(item.price * item.days).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-stretch rounded-full overflow-hidden cursor-pointer">
                          <span
                            className="px-3 py-1 bg-primaryGreen text-white text-xl font-bold hover:bg-green-500 duration-300 flex items-center justify-center"
                            onClick={() =>
                              updateActivityDays(item.activity_id, -1)
                            }
                          >
                            -
                          </span>
                          <span className="px-3 py-0 flex items-center border-y justify-center">
                            {item.days}
                          </span>
                          <span
                            className="px-3 py-1 bg-primaryGreen text-white text-lg font-bold hover:bg-green-500 duration-300 flex items-center justify-center"
                            onClick={() =>
                              updateActivityDays(item.activity_id, 1)
                            }
                          >
                            +
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex gap-2 border-b pb-2">
                <span className="font-bold text-slate-800">
                  Accommodation Type:
                </span>
                <span className="text-slate-700 font-normal text-sm">
                  {selectedAccommodation || "N/A"}
                </span>
              </div>

              <div className="flex gap-2 border-b pb-2">
                <span className="font-bold text-slate-800">
                  Transport Type:
                </span>
                <span className="text-slate-700 font-normal text-sm">
                  {selectedTransport || "N/A"}
                </span>
              </div>

              <div className="flex gap-2 border-b pb-2">
                <span className="font-bold text-slate-800">Total People:</span>
                <span className="text-slate-700 font-normal text-sm">
                  {selectedPeople}
                </span>
              </div>
              <div className="flex gap-2 border-b pb-2">
                <span className="font-bold text-slate-800">Duration:</span>
                <span className="text-slate-700 font-normal text-sm">
                  {duration} Days
                </span>
              </div>
            </div>

            <div className="mt-6 bg-green-100 text-green-800 font-semibold p-3 rounded-lg text-center">
              Estimated Price: ${price.toLocaleString() || "N/A"}
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              onClick={handleBooking}
              disabled={
                selectedActivities.length < 0 ||
                !selectedAccommodation ||
                !selectedPeople ||
                !selectedDestination
              }
              className={`${
                selectedActivities.length < 0 ||
                !selectedAccommodation ||
                !selectedPeople ||
                !selectedDestination
                  ? "bg-slate-200 text-slate-100"
                  : "bg-primaryGreen text-white"
              }     w-3/4 text-center   font-semibold  py-3 rounded`}
            >
              Save Package
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
}
