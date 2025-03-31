import { useEffect, useState } from "react";
import { style } from "./style";
import { getAllCountry, getTourCategories } from "@/app/api/tour/action";
import { CategoryType, CountryType } from "@/app/types/tour";

const accommodations = ["Budget", "Mid-range", "Luxury"];
const transportOptions = ["Self-drive", "Mid-range", "Luxury", "Land", "Air"];
export interface SelectedActivityType {
  id: number;
  name: string;
  price: number;
}

export default function CustomTourPackage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<
    SelectedActivityType[]
  >([]);
  const [CategoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [destinations, setDestination] = useState<CountryType[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("");
  const [duration, setDuration] = useState(1);
  const [price, setPrice] = useState(0);

  const toggleActivity = (id: number, name: string, price: number) => {
    setSelectedActivities((prev) => {
      const exists = prev.some((activity) => activity.id === id);
      return exists
        ? prev.filter((activity) => activity.id !== id)
        : [...prev, { id, name, price }];
    });
  };

  useEffect(() => {
    const activitiesCost =
      selectedActivities.reduce((acc, activity) => acc + activity.price, 0) *
      duration;
    // const transportCost = transportOptions.includes(selectedTransport)
    //   ? 100
    //   : 50;
    // const accommodationCost = accommodations.includes(selectedAccommodation)
    //   ? 200
    //   : 100;

    setPrice(activitiesCost);
  }, [selectedActivities, selectedTransport, selectedAccommodation, duration]);

  useEffect(() => {
    getCategoryList();
    getDestinationList();
  }, []);

  const getCategoryList = async () => {
    try {
      const result = await getTourCategories();
      setCategoryList(result.data);
    } catch (error) {
      console.error("Error fetching categories", error);
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

  return (
    <div className="px-12 py-8 w-full h-[80vh] mx-auto bg-white rounded-lg overflow-scroll">
      <h2 className="text-2xl font-bold mb-4 text-primaryGreen">
        Create Your Custom Tour Package
      </h2>

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
        <h1 className={`${style.title}`}>Select Activities:</h1>
        <div className="grid grid-cols-4 gap-4">
          {CategoryList.map((category) => (
            <div key={category.id} className="mb-2">
              <div
                className={`text-slate-700 font-bold pb-1 mb-2 capitalize border-b w-fit`}
              >
                {category.name}
              </div>
              {category.activities.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <input
                    type="checkbox"
                    className={`${style.selectedItem} mr-2 accent-primaryGreen`}
                    checked={selectedActivities.some(
                      (a) => a.id === activity.id
                    )}
                    onChange={() =>
                      toggleActivity(
                        activity.id,
                        activity.name,
                        Number(activity.price_per_day)
                      )
                    }
                  />

                  <span className="text-sm text-slate-500">
                    {activity.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
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
            <option className={`${style.selectedItem}`} key={acc} value={acc}>
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

      {/* Package Breakdown */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto">
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
            <span className="font-bold text-slate-800">Activities list:</span>
            {selectedActivities.length < 1 ? (
              <span className="text-slate-700 font-normal text-sm "> N/A</span>
            ) : (
              <ul className="mt-2 space-y-1 text-slate-700 font-normal text-sm ">
                {selectedActivities.map((item) => (
                  <li key={item.id} className="flex items-center space-x-2">
                    <span className="text-green-600">✔</span>
                    <span>{item.name}</span>
                    <span>${item.price.toLocaleString()}</span>
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
            <span className="font-bold text-slate-800">Transport Type:</span>
            <span className="text-slate-700 font-normal text-sm">
              {selectedTransport || "N/A"}
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

      {/* Booking Options */}
      <div className={`${style.section}`}>
        <h1 className="block font-medium mt-4">Booking Type:</h1>
        <select className={`${style.items}`}>
          <option className={`${style.selectedItem} mr-2`} value="instant">
            Instant Book
          </option>
          <option className={`${style.selectedItem} mr-2`} value="confirmation">
            User Confirmation Required
          </option>
        </select>
      </div>

      <button className="w-full bg-green-500 text-white py-2 rounded">
        Book Now
      </button>
    </div>
  );
}
