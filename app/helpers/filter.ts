import { CarDetails, PackageList } from "../constants/arrays";

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