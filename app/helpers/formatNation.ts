import { nationalityOptions } from "../(landingPage)/components/package/form";

export const convertNation = (nation: string) => {
  const value = nationalityOptions.find((nat) => {
    if (nat.label.toLocaleLowerCase() === nation.toLocaleLowerCase())
      return nat.value;
  });
  return value?.value;
};
