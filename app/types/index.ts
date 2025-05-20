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
  year: number;
  transmission: string;
  first_image: StaticImageData;
  price_per_day: string;
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
export type AllFeature = {
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
  fuel_type: string;
  transmission: "Automatic" | "Manual";
  seats: number;
  luggage_capacity: number;
  price_per_day: string;
  is_available: boolean;
  status: string;
  description: string;
};

export interface BookingDetails {
  content_type: number;
  object_id: number;
  start_date: string;
  end_date: string;
  guests: number;
  total_price: number;
}

export type BookingData = {
  booking_id: number;
  id: number;
  user: {
    id: number;
    full_name: string;
    email: string;
  };
  content_type: string;
  object_id: number;
  start_date: string;
  end_date: string;
  guests: number;
  total_price: string;
  status: string;
  created_at: string;
  updated_at: string;
  booking_reference: string;
  note?: string;
  payment_status: string;
};

export type BookingResponse = {
  status: string;
  message: string;
  data: BookingData[];
};

export type PaymentResponseType = {
  authkey: string;
  refid: string;
  reply: string;
  retcode: number;
  success: number;
  tid: string;
  url: string;
};

export type BulkCarDetail = {
  car_type: string;
  model: string;
  quantity: number;
};

export type CarBookingRequest = {
  start_date: string;
  end_date: string;
  pickup_location: string;
  trip_location: string;
  driver_option: string;
  note: string;
  car_details: BulkCarDetail[];
};

export interface BulkBookingType {
  user: number;
  start_date: string; // You can use `Date` if you're converting to Date objects
  end_date: string;
  pickup_location: string;
  trip_location: string;
  driver_option: string;
  note: string;
  status: string;
  car_details: BulkCarDetail[];
  total_price: number | null;
}

export interface BulkBookingResponse {
  status: string;
  message: string;
  data: BulkBookingType[];
}

export interface Ribbon {
  status: string;
  message: string;
  data: {
    id: number;
    description: string;
    url: string;
    updated_at: string;
  };
}
