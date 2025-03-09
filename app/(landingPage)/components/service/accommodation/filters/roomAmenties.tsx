"use client";
import { useState } from "react";
import { Checkbox } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";

const amenities = [
  "Sound proof",
  "Clothes rack",
  "Drying rack for clothing",
  "Fold-up bed",
  "Sofa bed",
  "Air Conditioning",
  "Wardrobe or closet",
  "Carpeted",
  "Walk-in closet",
  "Extra long beds (>6.5 ft)",
  "Private Bathroom",
  "Sitting area",
];

const RoomAmenities: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCheckboxChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setCheckedList((prev) => [...prev, amenity]);
    } else {
      setCheckedList((prev) => prev.filter((item) => item !== amenity));
    }
  };

  return (
    <div className="w-full h-fit max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      {/* Dropdown Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base text-nowrap font-semibold text-primaryGreen">
          Room Amenities
        </h3>
        <button className="px-2 py-1 text-white text-sm rounded focus:outline-none">
          {isOpen ? (
            <Icon
              icon="uis:angle-up"
              width="24"
              height="24"
              className="text-primaryGreen"
            />
          ) : (
            <Icon
              icon="uis:angle-up"
              width="24"
              height="24"
              className="text-primaryGreen rotate-180"
            />
          )}
        </button>
      </div>

      {/* Amenities List (Collapsible) */}
      {isOpen && (
        <div className="mt-4 space-y-2 flex flex-col">
          {amenities.map((amenity, index) => (
            <Checkbox
              key={index}
              onChange={(e) => onCheckboxChange(amenity, e.target.checked)}
              checked={checkedList.includes(amenity)}
              style={{
                color: "#667c3e", // Green text color for the label
                borderColor: "#667c3e", // Green border for the checkbox
              }}
              className="text-slate-500 focus:ring-2 focus:ring-[#667c3e] checked:bg-[#667c3e] checked:border-[#667c3e]"
            >
              {amenity}
            </Checkbox>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomAmenities;
