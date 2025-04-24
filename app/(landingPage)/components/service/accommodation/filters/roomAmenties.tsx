"use client";
import { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { facility, getFacilities } from "@/app/api/accommodation/action";

const RoomAmenities = ({ fac }: { fac: (facility: string[]) => void }) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amenities, setAmenities] = useState<facility[]>([]);

  const onCheckboxChange = (amenity: string, checked: boolean) => {
    if (checked) {
      const updatedList = [...checkedList, amenity];
      setCheckedList(updatedList);
      fac(updatedList);
    } else {
      const updatedList = checkedList.filter((item) => item !== amenity);
      setCheckedList(updatedList);
      fac(updatedList);
    }
  };

  useEffect(() => {
    handleGetFacilities();
  }, []);

  const handleGetFacilities = async () => {
    const result = await getFacilities();
    if (result.success) {
      setAmenities(result.data);
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
          {amenities.map((amenity) => (
            <Checkbox
              key={amenity.id}
              onChange={(e) => onCheckboxChange(amenity.name, e.target.checked)}
              checked={checkedList.includes(amenity.name)}
              style={{
                color: "#667c3e", // Green text color for the label
                borderColor: "#667c3e", // Green border for the checkbox
              }}
              className="text-slate-500 focus:ring-2 focus:ring-[#667c3e] checked:bg-[#667c3e] checked:border-[#667c3e]"
            >
              {amenity.name}
            </Checkbox>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomAmenities;
