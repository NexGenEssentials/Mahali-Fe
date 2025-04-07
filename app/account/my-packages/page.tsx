"use client";
import React, { useEffect, useState } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import { getCustomPackage } from "@/app/api/tour/action";
import { CustomPackageData } from "@/app/types/tour";
import CustomPackageCard from "../components/card/custompackageCard";
import BookingAction from "../components/card/bookingAction";
import CenterModal from "@/app/(landingPage)/components/model/centerModel";
import { useAppContext } from "@/app/context";

const contentId = process.env.NEXT_PUBLIC_CUSTOM_PACKAGE_ID;

const CustomPackgesPage = () => {
  const [custPack, setCustPack] = useState<CustomPackageData[]>([]);
  const [bookedCustPack, setBookedCustPack] = useState<
    CustomPackageData | undefined
  >();
  const { setActiveModalId } = useAppContext();

  useEffect(() => {
    const getCustomData = async () => {
      const result = await getCustomPackage();
      if (result.success) setCustPack(result.data);
    };
    getCustomData();
  }, []);

  function getPackageById(
    packages: CustomPackageData[],
    id: number
  ): CustomPackageData | undefined {
    return packages.find((pkg) => pkg.id === id);
  }
  const handleBook = (id: number) => {
    setBookedCustPack(getPackageById(custPack, id));
    setActiveModalId("book custom pack");
  };

  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-6 min-h-screen px-4">
        <Title name="My Tour Package " icon="material-symbols:book" />
        <div className="flex gap-4 flex-wrap items-stretch justify-center">
          {custPack.map((pack) => (
            <CustomPackageCard
              key={pack.id}
              customPackage={pack}
              onBook={handleBook}
            />
          ))}
        </div>
      </div>
      <CenterModal
        children={
          <BookingAction
            content_type={Number(contentId)}
            object_id={Number(bookedCustPack?.id)}
            guests={Number(bookedCustPack?.number_of_people)}
            total_price={Number(bookedCustPack?.total_price)}
          />
        }
        id={"book custom pack"}
      />
    </ClientPageTemplates>
  );
};

export default CustomPackgesPage;
