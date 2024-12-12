import { PackageList } from "../constants/arrays";

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
