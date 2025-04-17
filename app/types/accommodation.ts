import { StaticImageData } from "next/image";

export type Facility = {
  id: number;
  name: string;
};

export type HouseRules = {
  check_in_time: string;
  check_out_time: string;
  smoking_allowed: boolean;
  pets_allowed: boolean;
  additional_rules: string;
};

export type AccommodationType = {
  id: number;
  name: string;
  description: string;
  location: string;
  address: string;
  latitude: string;
  longitude: string;
  category: string;
  rating: number;
  facilities: Facility[];
  image: string | null;
  created_at: string;
  is_active: boolean;
  is_featured: boolean;
  tags: string;
  house_rules: HouseRules;
  check_in_time: string;
  check_out_time: string;
  smoking_allowed: boolean;
  pets_allowed: boolean;
  additional_rules: string;
  first_image: StaticImageData;
  images: StaticImageData[];
};

export type AccommodationResponse = {
  success: boolean;
  message: string;
  data: AccommodationType[];
};
