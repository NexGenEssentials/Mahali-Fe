import { StaticImageData } from "next/image";

export type TourPlanType = {
  title: string;
  description: string;
  inclusion: string | null;
  accommodation: string | null;
};
type RelatedPackage = {
  id: number;
  title: string;
  min_people: number;
  max_people: number;
  country: number;
  duration_days: number;
  rating: number;
  main_image: string | null;
};
export type TourPackageType = {
  id: number;
  title: string;
  description: string;
  location: string;
  best_time_to_visit: string;
  duration_days: string;
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
  related_packages: RelatedPackage[];
  images: [];
};

export type SingleTourResponseType = {
  success: boolean;
  message: string;
  data: TourPackageType;
};
export type countryTourResponseType = {
  success: boolean;
  message: string;
  data: TourPackageType[];
};

export type TourDataType = {
  [country: string]: TourPackageType[];
};

export type TourResponseType = {
  success: boolean;
  message: string;
  data: TourDataType;
};

type WhenToGo = {
  id: number;
  season: string;
  start_month: string;
  end_month: string;
  description: string;
  country: number;
};
export type highlightsData={
  title:string,
  description:string,
}

export type CountryType = {
  id: number;
  highlights: highlightsData[];
  when_to_go: WhenToGo[];
  name: string;
  image: string | null;
  description: string | null;
};

export type CountryResponseType = {
  success: boolean;
  message: string;
  data: CountryType[];
};


