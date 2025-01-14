import { StaticImageData } from "next/image";
import { Accommodations, CarDetails, PackageList } from "../constants/arrays";

export const filterPackages = (data: typeof PackageList, filters: { location: string; packageName: string }) => {
  const matchingLocation = data.find(item => item.location.toLowerCase() === filters.location.toLowerCase()); 

  if (matchingLocation) {
    const matchingPackage = matchingLocation.package.find(pkg =>
      pkg.name.toLowerCase().includes(filters.packageName.toLowerCase())
    );

    return matchingPackage || null;
  }

  return null; 
};

export const getCarByName = (carName: string) => {
  return CarDetails.find(car => car.name.toLowerCase() === carName.toLowerCase());
};

export const searchCarDetails = ({ name, price, category }:{name?:string, price?:string, category?:string}) => {
  return CarDetails.filter((car) => {
    const nameMatch = name ? car.name.toLowerCase().includes(name.toLowerCase()) : true;
    const categoryMatch = category ? car.category.toLowerCase() === category.toLowerCase() : true;

    const priceMatch = price ? isPriceInRange(car.price, price) : true;

    return nameMatch && priceMatch && categoryMatch;
  });
};

const isPriceInRange = (carPrice:string, priceRange:string) => {
  const carPriceValue = parseInt(carPrice.replace("$", "")); 

  if (priceRange.includes("-")) {
    const [min, max] = priceRange.replace("$", "").split("-").map(Number);
    return carPriceValue >= min && carPriceValue <= max;
  } else {
    const exactPrice = parseInt(priceRange.replace("$", ""));
    return carPriceValue === exactPrice;
  }
};


export const getPopularAccommodations = () => {
  return Accommodations.flatMap((category) =>
    category.details
      .filter((detail) => detail.isPopular)
      .map((detail) => ({
        ...detail,
        category: category.category,
      }))
  );
};

export const filterByCategory = (category: string) => {
  const foundCategory = Accommodations.find((accommodation) => accommodation.category.toLowerCase() === category.toLowerCase());
  return foundCategory ? foundCategory.details : [];
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
  amenality:string[];
  address?:string;
  map?:string;
  moreDescription?:string;
  rooms?: {
    type: string;
    size: string;
    capacity: string;
    rate: string;
    availability: string;
}[];
houseRules?:({
  title: string;
  details: string |string[];
})[],
reviewStatus?:string,
ratings?:{
  category: string;
  score: number;
}[];
testimonies?:{
  name: string;
  comment: string;
  country: string;
  image?: StaticImageData;
}[]

};

export const findAccommodationByName = (accommodationName: string): AccommodationDetail | undefined => {
  for (const category of Accommodations) {
    const foundAccommodation = category.details.find((detail) =>
        detail.name.toLowerCase() === accommodationName.toLowerCase()
    );
    if (foundAccommodation) {
      return foundAccommodation;
    }
  }
  return undefined;
};