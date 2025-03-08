"use client";
import React from "react";
import TourPackagesTable from "./tourPackagestable";
import { SquarePen } from "lucide-react";
import { motion } from "motion/react";

const mockData = {
  success: true,
  message: "Tour packages retrieved successfully.",
  data: [
    {
      id: 1,
      country: {
        id: 1,
        name: "Kenya",
      },
      tour_plans: [],
      title: "Safari Adventure in Kenya",
      description: "An unforgettable safari experience.",
      location: "Maasai Mara",
      best_time_to_visit: "July - October",
      duration_days: 7,
      duration_nights: 6,
      min_people: 2,
      max_people: 15,
      rating: 4.8,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 2,
      country: {
        id: 6,
        name: "Rwanda",
      },
      tour_plans: [],
      title: "Gorilla Trekking Adventure",
      description:
        "Experience the endangered Silver-back Gorillas in Volcanoes National Park.",
      location: "Kigali-Musanze",
      best_time_to_visit: "June-Sept / Dec-Feb",
      duration_days: 3,
      duration_nights: 2,
      min_people: 1,
      max_people: 20,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 5,
      country: {
        id: 6,
        name: "Rwanda",
      },
      tour_plans: [
        {
          title: "Arrival and Scenic Drive",
          description:
            "Drive from Kigali to Nyungwe National Park, enjoying the picturesque landscape along the way. Optional stopovers at local cultural sites.",
          inclusion: null,
          accommodation: null,
        },
        {
          title: "Chimpanzee Trekking",
          description:
            "Embark on a guided chimpanzee trekking adventure in Nyungwe National Park.",
          inclusion: null,
          accommodation: null,
        },
        {
          title: "Canopy Walk and Departure",
          description:
            "Experience Africa’s highest canopy walk before departing back to Kigali.",
          inclusion: null,
          accommodation: null,
        },
      ],
      title: "Nyungwe Chimpanzee Trekking",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 6,
      country: {
        id: 6,
        name: "Rwanda",
      },
      tour_plans: [],
      title: "Nyungwe Chimpanzee Trekking",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 11,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 12,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 13,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 14,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 15,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [
        {
          title: "Day 1: Arrival and Scenic Drive",
          description:
            "Drive from Kigali to Nyungwe National Park, enjoying the picturesque landscape along the way. Optional stopovers at local cultural sites.",
          inclusion: null,
          accommodation: null,
        },
        {
          title: "Day 2: Chimpanzee Trekking",
          description:
            "Experience guided chimpanzee trekking in the Nyungwe rainforest.",
          inclusion: null,
          accommodation: null,
        },
      ],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 16,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [
        {
          title: "Day 1: Arrival and Scenic Drive",
          description:
            "Drive from Kigali to Nyungwe National Park, enjoying the picturesque landscape along the way. Optional stopovers at local cultural sites.",
          inclusion: null,
          accommodation: null,
        },
        {
          title: "Day 2: Chimpanzee Trekking",
          description:
            "Experience guided chimpanzee trekking in the Nyungwe rainforest.",
          inclusion: null,
          accommodation: null,
        },
      ],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
    {
      id: 17,
      country: {
        id: 5,
        name: "Burundi",
      },
      tour_plans: [
        {
          title: "Day 1: Arrival and Scenic Drive",
          description:
            "Drive from Kigali to Nyungwe National Park, enjoying the picturesque landscape along the way. Optional stopovers at local cultural sites.",
          inclusion: "Lunch and Dinner",
          accommodation: "One & Only Nyungwe House",
        },
        {
          title: "Day 3: Canopy Walk and Departure",
          description:
            "Enjoy Africa's highest canopy walk and depart for Kigali.",
          inclusion: "Lunch and Dinner",
          accommodation: "One & Only Nyungwe House",
        },
        {
          title: "Day 2: Chimpanzee Trekking",
          description:
            "Experience guided chimpanzee trekking in the Nyungwe rainforest.",
          inclusion: "Lunch and Dinner",
          accommodation: "Serena Hotel",
        },
      ],
      title: "Nyungwe Canopy Walk",
      description:
        "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
      location: "Kigali-Nyamasheke",
      best_time_to_visit: "May-Oct",
      duration_days: 4,
      duration_nights: 3,
      min_people: 1,
      max_people: 10,
      rating: 5,
      main_image: null,
      is_active: true,
      created_at: "2025-03-01T00:42:31.287468Z",
      updated_at: "2025-03-01T00:42:31.302437Z",
    },
  ],
};

function AdminTourServiceApp() {
  const handleDelete = (id: number) => {
    console.log("Delete tour package with id:", id);
  };

  const handleUpdate = (tourPackage: any) => {
    console.log("Update tour package:", tourPackage);
  };

  const handleView = (tourPackage: any) => {
    console.log("View tour package:", tourPackage);
  };

  return (
    <div className=" bg-gray-100 p-6">
      <div className="w-full mx-auto">
        <div className="flex justify-between gap-4 w-full px-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 ">Tour Packages</h1>
          <motion.span
            whileHover={{ scale: 0.9 }}
            className="p-3 rounded-md text-white hover:bg-primaryGreen bg-primaryGreen/70 cursor-pointer font-bold flex gap-2"
          >
            Create New Tour <SquarePen />
          </motion.span>
        </div>
        <TourPackagesTable
          data={mockData.data}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onView={handleView}
        />
      </div>
    </div>
  );
}

export default AdminTourServiceApp;
