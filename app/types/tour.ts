import { StaticImageData } from "next/image";

export type TourPlanType = {
  title: string;
  description: string;
  inclusion: string | null;
  accommodation: string | null;
};

export type TourPackageType = {
  id: number;
  title: string;
  description: string;
  location: string;
  best_time_to_visit: string;
  duration_days: number;
  duration_nights: number;
  min_people: number;
  max_people: number;
  rating: number;
  main_image: StaticImageData | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  country: number;
  tour_plans: TourPlanType[];
};

export type SingleTourResponseType = {
  success: boolean;
  message: string;
  data: TourPackageType;
};

export type TourDataType = {
  [country: string]: TourPackageType[];
};

export type TourResponseType = {
  success: boolean;
  message: string;
  data: TourDataType;
};

export type CountryType = {
  id: number;
  name: string;
};

export type CountryResponseType = {
  success: boolean;
  message: string;
  data: CountryType[];
};