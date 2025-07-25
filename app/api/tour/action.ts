"use server";

import {
  AddActivityTourPackageType,
  CategoriesResponse,
  CountryResponseType,
  countryTourResponseType,
  CustomeTourPackageType,
  CustomPackagesResponse,
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

// custom package api

export const getTourCategories = async (): Promise<CategoriesResponse> => {
  try {
    const response = await fetch(`${base_url}/categories/`, {
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

export const CreateCustomPackage = async (
  data: CustomeTourPackageType
): Promise<CategoriesResponse> => {
  try {
    const response = await fetch(`${base_url}/packages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const getCustomPackage = async (): Promise<CustomPackagesResponse> => {
  try {
    const response = await fetch(`${base_url}/packages/list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const DeleteCustomPackage = async (
  packageId: number
): Promise<boolean> => {
  try {
    const response = await fetch(`${base_url}/packages/${packageId}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};

// delete activity on custom package

export const DeleteActivityPackage = async (
  packageId: number,
  activityId: number
): Promise<boolean> => {
  try {
    const response = await fetch(
      `${base_url}/packages/${packageId}/remove-activity/${activityId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};

export const AddNewActivities = async (
  data: AddActivityTourPackageType,
  packageId?: number
): Promise<CategoriesResponse> => {
  try {
    // console.log({ data, packageId });
    const response = await fetch(
      `${base_url}/packages/${packageId}/add-activity/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    // console.log(response);
    
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
