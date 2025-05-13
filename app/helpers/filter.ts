import { StaticImageData } from "next/image";
import {

  AccountSettingsMenu,

} from "../constants/arrays";
import { CarData } from "../types";
import {
  CategoryType,
  CountryResponseType,
  CountryType,
  TourPackageType,
} from "../types/tour";
import { AccommodationType } from "../types/accommodation";

export const getCarByName = (searchTerm: string, carList?: CarData[]) => {
  if (!searchTerm.trim()) return carList;

  const term = searchTerm.toLowerCase();

  return (
    carList?.filter(
      (car) =>
        car.name.toLowerCase().includes(term) ||
        car.brand.toLowerCase().includes(term) ||
        car.category.toLowerCase().includes(term)
    ) || []
  );
};

export const getFeaturedAccommodations = (
  accommodations: AccommodationType[]
) => {
  return accommodations.filter((accom) => accom.is_featured);
};

export const filterByCategory = (
  category: string,
  accommodations: AccommodationType[]
): AccommodationType[] => {
  const foundCategory = accommodations.filter(
    (accommodation) =>
      accommodation.category.toLowerCase() === category.toLowerCase()
  );
  return foundCategory;
};

export type AccommodationDetail = {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  description: string;
  price: string;
  gallery: StaticImageData[];
  isPopular: boolean;
  amenality: string[];
  address?: string;
  map?: string;
  moreDescription?: string;
  rooms?: {
    type: string;
    size: string;
    capacity: string;
    rate: number;
    availability: string;
  }[];
  houseRules?: {
    title: string;
    details: string | string[];
  }[];
  reviewStatus?: string;
  ratings?: {
    category: string;
    score: number;
  }[];
  testimonies?: {
    name: string;
    comment: string;
    country: string;
    image?: StaticImageData;
  }[];

  whatsNearby?: {
    places: {
      name: string;
      distance: string;
    }[];
    restaurantsAndCafes: {
      name: string;
      distance: string;
    }[];
    closestAirports: {
      name: string;
      distance: string;
    }[];
  };
};

export const filteredMenuItems = AccountSettingsMenu.flatMap((category) =>
  category.items.filter((item) => item.link === "account/my-settings")
);

export const filterCountry = (
  response: CountryType[],
  countryNameOrId: string | number
): CountryType | null => {
  return (
    response.find(
      (country) =>
        country.id === countryNameOrId ||
        country.name.toLowerCase() === String(countryNameOrId).toLowerCase()
    ) || null
  );
};

export function getSelectedCategories(
  data: CategoryType[],
  selectedCategories: string[]
) {
  return data.filter(
    (category) =>
      selectedCategories.includes(category.name) &&
      category.activities.length > 0
  );
}

export function getAllToursData(data: Record<string, any[]>): TourPackageType[] {
  const tours: TourPackageType[] = [];

  for (const country in data) {
    if (Array.isArray(data[country])) {
      data[country].forEach((tour) => {
        tours.push({
          id: tour.id,
          title: tour.title,
          description: tour.description,
          location: tour.location,
          price: tour.price,
          duration_days: tour.duration_days,
          duration_nights: tour.duration_nights || 0, // Default value if missing
          rating: tour.rating,
          best_time_to_visit: tour.best_time_to_visit || "Unknown", // Default value if missing
          min_people: tour.min_people || 1, // Default value if missing
          max_people: tour.max_people || 10,
          main_image: tour.main_image,
          is_active: tour.is_active || false,
          tour_plans: tour.tour_plans || [],
          related_packages: tour.related_packages || [],
          images: tour.images || [],
          country: tour.country || 0,
          created_at: tour.created_at,
          updated_at: tour.updated_at,
        });
      });
    }
  }

  return tours;
}
