"use server";
import { CarDetails, CarResponse, SingleCarType } from "@/app/types";
import { cookies } from "next/headers";
const base_url = process.env.BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;


export const CreateCar = async (carDetails: CarDetails): Promise<{}> => {
  try {
    const response = await fetch(`${base_url}/cars/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(carDetails),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: response.statusText,
        description: data.detail || "Something went wrong",
      };
    }

    return data;
  } catch (error) {
    return {
      status: "Internal Server Error",
      description: "Something went wrong",
    };
  }
};

export interface filters {
  brand?: string;
  fuelType?: string;
  transmission?: string;
  seats?: string;
  availability?: boolean;
  carName?: string;
  ordering?: string;
}

export const getAllCars = async ({
  brand,
  fuelType,
  transmission,
  seats,
  availability,
  carName,
  ordering,
}: filters): Promise<CarResponse> => {
  try {
    const response = await fetch(
      `${base_url}/cars/?${brand ? `&brand=${brand}` : ""}${
        fuelType ? `&fuel_type=${fuelType}` : ""
      }${transmission ? `&transimission=${transmission}` : ""}${
        seats ? `&seats=${Number(seats)}` : ""
      }${availability ? `&is_available=${availability}` : ""}${
        carName ? `&search=${carName}` : ""
      }${ordering ? `&ordering=${ordering}` : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(response);
    console.log({ carName, brand, seats });
    const data = await response.json();
    if (!response.ok) {
      return {
        status: response.statusText,
        description: data.detail || "Something went wrong",
      };
    }
    return data;
  } catch (error) {
    return {
      status: "Internal Server Error",
      description: "Something went wrong",
    };
  }
};

export const getSingleCar = async (
  carId: string
): Promise<SingleCarType> => {
  try {
    const response = await fetch(`${base_url}/cars/${carId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return data;
    }

    return data;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error
  }
};

export const getCarAvailabilty = async (): Promise<{}> => {
  try {
    const response = await fetch(`${base_url}/cars/check-availability`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: response.statusText,
        description: data.detail || "Something went wrong",
      };
    }

    return data;
  } catch (error) {
    return {
      status: "Internal Server Error",
      description: "Something went wrong",
    };
  }
};
