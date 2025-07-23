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
  prices: PriceItem[];
  price: number;
  location: string;
  duration_days: number;
  rating: number;
  main_image: string;
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
  price: string;
  prices: PriceItem[];
  main_image: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  country: number;
  tour_plans: TourPlanType[];
  related_packages: RelatedPackage[];
  images: string[];
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
export type highlightsData = {
  title: string;
  description: string;
  icon: string;
};

export type CountryType = {
  id: number;
  highlights: highlightsData[];
  when_to_go: WhenToGo[];
  name: string;
  image: string;
  description: string | null;
};

export type CountryResponseType = {
  success: boolean;
  message: string;
  data: CountryType[];
};

export type Activity = {
  id: number;
  name: string;
  description: string | null;
  location: string;
  price_per_day: string;
  category: number;
};

export type CategoryType = {
  id: number;
  name: string;
  description: string | null;
  activities: Activity[];
};

export type CategoriesResponse = {
  success: boolean;
  message: string;
  data: CategoryType[];
};

type PackageActivity = {
  activity_id: number;
  number_of_days: number;
};

export type CustomeTourPackageType = {
  name: string;
  number_of_people: number;
  destination: string;
  transport: string;
  note: string;
  accomodation: string;
  package_activities: PackageActivity[];
};
export type AddActivityTourPackageType = {
  number_of_people: number;
  activities: PackageActivity[];
};

export type PackageActivityData = {
  id: number;
  number_of_days: number;
  sub_total_price: string;
  activity: Activity;
};

export type CustomPackageData = {
  id: number;
  name: string;
  total_price: string;
  number_of_people: string;
  note: string;
  created_at: string;
  package_activities: PackageActivityData[];
};

export type CustomPackagesResponse = {
  success: true;
  message: string;
  data: CustomPackageData[];
};

export type PriceItem = {
  nationality_type: string;
  price: number;
};
