"use server";

import {
  CountryResponseType,
  countryTourResponseType,
  SingleTourResponseType,
  TourResponseType,
} from "@/app/types/tour";
import { cookies } from "next/headers";

const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const getAllTours = async (): Promise<TourResponseType> => {
  try {
    const response = await fetch(`${base_url}/tours/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllCountry = async (): Promise<CountryResponseType> => {
  try {
    const response = await fetch(`${base_url}/countries/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getSingleTour = async (
  tourId: string
): Promise<SingleTourResponseType> => {
  try {
    const response = await fetch(`${base_url}/tours/${tourId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
export const getCountryTour = async (
  countryId?: number
): Promise<countryTourResponseType> => {
  try {
    const response = await fetch(`${base_url}/tours/country/${countryId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
