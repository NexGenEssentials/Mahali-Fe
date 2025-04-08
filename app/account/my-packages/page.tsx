"use client";
import React, { useEffect, useState } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import { DeleteCustomPackage, getCustomPackage } from "@/app/api/tour/action";
import { CustomPackageData } from "@/app/types/tour";
import CustomPackageCard from "../components/card/custompackageCard";
import BookingAction from "../components/card/bookingAction";
import CenterModal from "@/app/(landingPage)/components/model/centerModel";
import { useAppContext } from "@/app/context";
import AddActivities from "../components/card/addActivities";

const contentId = process.env.NEXT_PUBLIC_CUSTOM_PACKAGE_ID;

const CustomPackgesPage = () => {
  const [custPack, setCustPack] = useState<CustomPackageData[]>([]);
  const [filteredCustomPack, setFilteredCustomPack] = useState<
    CustomPackageData[]
  >([]);
  const [bookedCustPack, setBookedCustPack] = useState<
    CustomPackageData | undefined
  >();
  const { setActiveModalId } = useAppContext();
  const [finish, setFinish] = useState("12");

  useEffect(() => {
    getCustomData();
  }, [finish]);

  const getCustomData = async () => {
    const result = await getCustomPackage();
    if (result.success) {
      setCustPack(result.data);
      setFilteredCustomPack(result.data);
    }
  };

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

  const handleEdit = async (packageId: number) => {
    setBookedCustPack(getPackageById(custPack, packageId));
    setActiveModalId("edit custom pack");
  };

  const handleDelete = async (packageId: number) => {
    try {
      const result = await DeleteCustomPackage(packageId);
      if (result)
        setFilteredCustomPack((prev) =>
          prev.filter((booking) => booking.id !== packageId)
        );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
 
  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-6 min-h-screen px-4">
        <Title name="My Tour Package " icon="material-symbols:book" />
        <div
          key={finish}
          className="flex gap-4 flex-wrap items-stretch justify-center"
        >
          {[...filteredCustomPack]
            .sort((a, b) => b.id - a.id)
            .map((pack) => (
              <CustomPackageCard
                key={pack.id}
                customPackage={pack}
                onBook={handleBook}
                onDelete={handleDelete}
                onEdit={handleEdit}
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
            note={bookedCustPack?.note}
          />
        }
        id={"book custom pack"}
      />

      <CenterModal
        children={<AddActivities pack={bookedCustPack} onFinish={setFinish} />}
        id={"edit custom pack"}
      />
    </ClientPageTemplates>
  );
};

export default CustomPackgesPage;
