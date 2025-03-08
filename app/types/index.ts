import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SignupFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export type UserProfile = {
  id: number;
  email: string;
  phone: string;
  full_name: string;
  role: string;
  image?: string;
};

export type Car = {
  id: number;
  name: string;
  category: string;
  transmission: string;
};

export type CarData = {
  id: number;
  features: Feature[];
  first_image: StaticImageData;
  images: string[];
  related_cars: Car[];
  owner: number;
  name: string;
  brand: string;
  category: string;
  year: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  seats: number;
  luggage_capacity: number;
  price_per_day: string;
  is_available: boolean;
};

export type CarResponse = {
  status: string;
  data?: CarData[];
  message?: string;
  description?: string;
};

export type CarDetails = {
  feature_ids: number[];
  owner: number;
  name: string;
  brand: string;
  category: string;
  year: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  seats: number;
  luggage_capacity: number;
  price_per_day: string;
  is_available: boolean;
};

export type Feature = {
  available: any;
  feature: ReactNode;
  id: number;
  name: string;
};

export type SingleCarType = {
  car: StaticImageData;
  gallery: StaticImageData[] | undefined;
  spec: any;
  id: number;
  features: Feature[];
  first_image: StaticImageData;
  images: StaticImageData[];
  related_cars: Car[];
  owner: number;
  name: string;
  brand: string;
  category: string;
  year: number;
  mileage: number;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  seats: number;
  luggage_capacity: number;
  price_per_day: string;
  is_available: boolean;
  status: string;
  description: string;
};
