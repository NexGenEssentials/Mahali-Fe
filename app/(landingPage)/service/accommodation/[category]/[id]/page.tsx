"use client";
import { SingleHeaderSection } from "@/app/(landingPage)/components/headers/header";
import RightModal from "@/app/(landingPage)/components/model/rightSideModel";
import StickyNavbar from "@/app/(landingPage)/components/navbar/accomodationNav";
import ReviewsPage from "@/app/(landingPage)/components/reviews/reviewsPage";
import AvailableDropdown from "@/app/(landingPage)/components/service/accommodation/dropDown/accomAvailableDropDown";
import RoomCard from "@/app/(landingPage)/components/service/accommodation/roomCard";
import ServicePageHero from "@/app/(landingPage)/components/service/serviceHeroSection";
import LandingPage from "@/app/(landingPage)/landingPageTamplates";
import {
  getAccommodation,
  getAccommodationsFilters,
} from "@/app/api/accommodation/action";
import { useAppContext } from "@/app/context";
import {
  AccommodationDetail,
  findAccommodationByName,
} from "@/app/helpers/filter";
import Loading from "@/app/loading";
import { AccommodationType, RoomType } from "@/app/types/accommodation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge, Button, Table, TableColumnsType, TableProps } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";
import { AddToCart } from "@/app/api/cart/action";
import { usePathname, useRouter } from "next/navigation";
import { CornerDownLeft } from "lucide-react";
import { formatDateToISO } from "@/app/helpers/formatDate";

const navBar = [
  "Overview",
  "Facilities",
  "Info & Prices",
  "House Rules",
  "Guest Reviews",
];

const accommodationName = ({ params }: { params: { id: string } }) => {
  const accomId = decodeURIComponent(params.id);
  const { setActiveModalId, isLogin, setShowCart } = useAppContext();
  const [AccomDetailData, setAccomDetailData] = useState<AccommodationDetail>();
  const [selectedSection, setSelectedSection] = useState("Overview");
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(2, "days"),
  ]);
  const [loading, setLoading] = useState(true);
  const [cartLoading, setCartLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  const [AccomDetails, setAccomDetails] = useState<AccommodationType>({
    id: 0,
    name: "",
    description: "",
    location: "",
    address: "",
    latitude: "",
    longitude: "",
    category: "",
    rating: 0,
    facilities: [],
    image: "",
    created_at: "",
    is_active: false,
    is_featured: false,
    tags: "",
    house_rules: {
      check_in_time: "",
      check_out_time: "",
      smoking_allowed: false,
      pets_allowed: false,
      additional_rules: "",
    },
    check_in_time: "",
    check_out_time: "",
    smoking_allowed: false,
    pets_allowed: false,
    additional_rules: "",
    first_image: "",
    images: [],
    lowest_price: 0,
    room_types: [],
  });
  const [message, setMessage] = useState(false);

  const [roomData, setRoomData] = useState<RoomType[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<RoomType>();
  const [totalRooms, setTotalRooms] = useState(1);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    HandleGetAccommodation();
  }, []);

  const HandleGetAccommodation = async () => {
    setLoading(true);
    try {
      const result = await getAccommodationsFilters({ id: Number(accomId) });
      if (result.success) {
        setAccomDetails(result.data[0]);
        setRoomData(result.data[0].room_types);
        const found = findAccommodationByName(result.data[0].name);
        setAccomDetailData(found);
        setLoading(false);
      }
    } catch (error) {
      console.log({ error });
    } finally {
    }
  };

  const AddItemToCart = async (roomId: number, quantity: number) => {
    setCartLoading(true);

    try {
      const result = await AddToCart({
        room_type: roomId,
        quantity: quantity,
      });

      if (result.success) {
        setMessage(true);
        setCartLoading(false);
        setTotalRooms(1);
        setShowCart(true);
      }
    } catch (error) {}
  };

  const HandleFilterRoom = async () => {
    setTableLoading(true);
    try {
      const result = await getAccommodationsFilters({
        start_date: formatDateToISO(String(dateSelected[0])),
        end_date: formatDateToISO(String(dateSelected[1])),
        id: Number(accomId),
      });

      if (result.success) {
        setRoomData(result.data[0].room_types);
        setTableLoading(true);
      }
    } catch (error) {
      console.log({ error });
    } finally {
    }
  };

  const Columns: TableColumnsType<RoomType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Max Beds",
      dataIndex: "max_beds",
      key: "max_beds",
    },
    {
      title: "Availability",
      dataIndex: "",
      key: "total_units",
      render: (a: RoomType) => (
        <span>
          {a.total_units > 0 ? (
            `${a.total_units}${a.total_units > 1 ? " Rooms" : " Room"} left`
          ) : (
            <Badge
              status="error"
              text="Unavailable"
              style={{ color: "red", fontWeight: "bold" }}
            />
          )}
        </span>
      ),
    },
    {
      title: "Number Of Guests",
      dataIndex: "",
      key: "max_guests",
      render: (a: RoomType) => (
        <span>
          {a.max_guests} {a.max_guests > 1 ? "adults" : "adult"} and{" "}
          {a.max_children} {a.max_children > 1 ? "children" : "child"} per Room
        </span>
      ),
    },
    {
      title: "Price/USD",
      dataIndex: "price_per_night",
      key: "price_per_night",
      defaultSortOrder: "descend",
      sorter: (a, b) => Number(a.price_per_night) - Number(b.price_per_night),
    },
    {
      title: "Sizes",
      dataIndex: "",
      key: "size",
      render: (room: RoomType) => (
        <span>
          {room?.size} M<span className="align-super text-sm">²</span>
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (room: RoomType) => {
        const commonButtonClass =
          "px-4 py-2 text-nowrap bg-primaryGreen text-white font-semibold hover:bg-white hover:text-primaryGreen transition duration-300 border border-primaryGreen rounded-md";

        const isRoomOpen = open && room.id === selectedRoom?.id;

        return (
          <div className="flex flex-col sm:flex-row gap-3 relative">
            {/* View Room Details */}
            <button
              onClick={() => {
                setActiveModalId("room-details");
                setSelectedRoom(room);
              }}
              className={commonButtonClass}
              aria-label={`View details for ${room.name}`}
            >
              View
            </button>

            {/* Equip Room Action */}
            <div className="relative">
              <button
                onClick={() => {
                  if (isLogin) {
                    setSelectedRoom(room);
                    setOpen(true);
                  } else {
                    router.push(
                      `/login?callbackUrl=${encodeURIComponent(pathname)}`
                    );
                  }
                }}
                className={commonButtonClass}
                aria-label={`Equip ${room.name}`}
              >
                Equip Room
              </button>

              {/* Conditional Room Popup */}
              {isRoomOpen && (
                <div className="absolute z-40 w-72 -top-10 right-28 bg-white border rounded-md shadow-lg p-4 space-y-2">
                  {message ? (
                    <>
                      <p className="text-sm text-primaryBlue">
                        You have successfully added a room.
                      </p>
                      <button
                        onClick={() => {
                          setMessage(false);
                          setOpen(false);
                        }}
                        className={commonButtonClass}
                        aria-label={`Close message for ${room.name}`}
                      >
                        Close
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className="font-medium text-sm text-primaryBlue">
                        Enter number of Rooms
                      </h3>
                      <input
                        type="number"
                        min={1}
                        value={totalRooms}
                        onChange={(e) => setTotalRooms(Number(e.target.value))}
                        className="w-full border p-2 rounded-md focus:ring-2 focus:ring-primaryGreen outline-none"
                        placeholder="Enter number of rooms"
                        aria-label="Number of rooms"
                      />
                      <div className="flex w-full justify-between px-2">
                        <button
                          onClick={() => AddItemToCart(room.id, totalRooms)}
                          className={commonButtonClass}
                          aria-label={`Add ${totalRooms} room(s) to cart for ${room.name}`}
                        >
                          {cartLoading ? "Adding..." : "Add Room"}
                        </button>
                        <button
                          onClick={() => {
                            setMessage(false);
                            setOpen(false);
                          }}
                          className={commonButtonClass}
                          aria-label={`Close message for ${room.name}`}
                        >
                          Close
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<RoomType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {};

  if (loading) return <Loading />;

  return (
    <LandingPage>
      <ServicePageHero
        image={AccomDetails.first_image}
        service={`${AccomDetails.name}`}
        title="Where Every Stay Is Extraordinary"
        desc="Discover the perfect blend of luxury, comfort, and convenience at Mahali. Nestled in the heart of Africa, our hotel is your gateway to an unforgettable experience."
      />
      <div className="max-w-[1750px] mx-auto flex flex-col w-full items-center gap-8 pb-8">
        {/* Navbar */}
        <StickyNavbar
          navBar={navBar}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />

        {/* Title and Action Bar */}
        <div className="w-full px-8 flex gap-6 flex-row items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold uppercase text-primaryGreen">
              {AccomDetails?.name}
            </h1>
            <h3 className="text-xs text-slate-500 inline-flex items-end space-x-2">
              <Icon icon="mdi:location" width="16" height="16" />
              {AccomDetails?.address}, {AccomDetails?.location}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-primaryGreen">
            <Icon
              icon={like ? "weui:like-filled" : "weui:like-outlined"}
              width="24"
              height="24"
              className="cursor-pointer"
              onClick={() => setLike(!like)}
            />
            <Icon icon="ri:share-line" width="24" height="24" />
            <button className="p-2 bg-primaryGreen rounded-md text-sm text-white font-medium">
              Reserve
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="w-[98%] h-96 flex gap-2 overflow-hidden justify-between rounded-lg cursor-pointer">
          <div className="w-full md:w-1/2 h-full overflow-hidden">
            <Image
              src={AccomDetails.first_image || ImagePlaceholder}
              alt={AccomDetails.name}
              width={800}
              height={600}
              className="object-cover w-full h-full hover:scale-110 hover:duration-700 transition-all"
            />
          </div>
          <div className="relative max-md:hidden w-1/2 h-full grid grid-cols-2 gap-2 overflow-hidden">
            {AccomDetails.images &&
              AccomDetails.images.map((image, index) => (
                <div key={index} className="w-full h-48 overflow-hidden">
                  <Image
                    src={image || ImagePlaceholder}
                    alt={AccomDetails.name}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full hover:scale-110 hover:duration-700 transition-all"
                  />
                </div>
              ))}
            <div className="absolute flex items-center gap-1 bg-primaryGreen text-white font-semibold p-2 bottom-3 right-5 text-sm rounded-md hover:scale-90 hover:duration-300 cursor-pointer">
              <Icon icon="line-md:grid-3-filled" width="16" height="16" /> Show
              All photos
            </div>
          </div>
        </div>

        {/* Description */}
        <div id="Overview" className="w-full px-8 flex flex-col gap-4">
          <SingleHeaderSection title="Description" />
          <p className="text-slate-600 text-sm w-full md:w-3/4">
            {AccomDetails?.description}
          </p>
        </div>

        {/* Facilities */}
        <div id="Facilities" className="w-full px-8 flex flex-col gap-4">
          <SingleHeaderSection title="Most popular facilities" />
          <ul className="place-content-end lg:w-3/5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500">
            {AccomDetails?.facilities?.map((amty) => (
              <li key={amty.id} className="flex items-center">
                <span className="mr-2">✔</span>
                {amty.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 px-8 flex flex-col self-start">
          <SingleHeaderSection title="Hotel surroundings" />
          <p className="text-xs text-slate-500 inline-flex items-end gap-1">
            <Icon icon="si:warning-line" width="16" height="16" />
            Guests loved walking around the neighbourhood!
          </p>
          <div className="flex gap-10 items-start w-full max-md:flex-wrap">
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-lg font-extrabold flex gap-2 items-end">
                <Icon
                  icon="healthicons:walking-24px"
                  width="30"
                  height="30"
                  className="pb-1"
                />
                What's nearby
              </h1>
              {AccomDetailData?.whatsNearby?.places.map((place, index) => (
                <div
                  key={index}
                  className="flex gap-4 it justify-between w-full text-sm"
                >
                  <span>{place.name}</span>
                  <span>{place.distance}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-lg font-extrabold flex gap-2 items-end">
                  <Icon
                    icon="carbon:restaurant"
                    width="30"
                    height="30"
                    className="pb-1"
                  />
                  Restaurants & cafes
                </h1>
                {AccomDetailData?.whatsNearby?.restaurantsAndCafes.map(
                  (place, index) => (
                    <div
                      key={index}
                      className="flex gap-4 it justify-between w-full text-sm"
                    >
                      <span>{place.name}</span>
                      <span>{place.distance}</span>
                    </div>
                  )
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-lg font-extrabold flex gap-2 items-end">
                  <Icon
                    icon="clarity:plane-solid"
                    width="30"
                    height="30"
                    className="pb-1"
                  />
                  Closest airports
                </h1>
                {AccomDetailData?.whatsNearby?.closestAirports.map(
                  (place, index) => (
                    <div
                      key={index}
                      className="flex gap-4 it justify-between w-full text-sm"
                    >
                      <span>{place.name}</span>
                      <span>{place.distance}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div id="Info & Prices" className="w-full px-8 flex flex-col gap-6  ">
          <SingleHeaderSection title="Check The Availability" />
          <p className="text-xs text-slate-500 inline-flex items-end gap-1">
            <Icon icon="si:warning-line" width="16" height="16" />
            Select dates to see this property's availability and prices
          </p>
          <div className="flex border border-primaryGreen rounded-lg w-fit gap-0">
            <DatePicker
              range
              rangeHover
              dateSeparator=" to "
              value={dateSelected}
              onChange={setDateSelected}
              format="DD/MM/YYYY"
              inputClass="p-2 grow max-md:w-full min-w-[200px] text-sm rounded-md outline-none"
            />
            <AvailableDropdown />

            <button
              onClick={HandleFilterRoom}
              className="inline-flex gap-2 items-center bg-primaryGreen p-2 text-white text-sm font-semibold rounded-r-md"
            >
              <Icon icon="mage:reload" width="20" height="20" />{" "}
              {tableLoading ? "Searching..." : "Apply Changes"}
            </button>
          </div>
          <div className="overflow-x-scroll">
            <Table
              loading={tableLoading}
              dataSource={roomData}
              columns={Columns}
              rowKey={(record) => record.id}
              onChange={onChange}
              showSorterTooltip={{ target: "sorter-icon" }}
              className="mt-4 border rounded-lg relative"
            />
          </div>
        </div>

        {/* House Rules */}
        <div id="House Rules" className="w-full px-8 flex flex-col gap-4">
          <SingleHeaderSection title="House Rules" />
          <p className="text-xs text-slate-500 inline-flex items-end gap-1">
            <Icon icon="si:warning-line" width="16" height="16" />
            {AccomDetails?.name} takes special requests - add in the next step!
          </p>
          <div className="border-t border-x rounded-lg">
            <div className="flex gap-4 p-6 border-b rounded-lg">
              <span className="w-1/3 font-bold text-lg text-defaultGreen">
                Check-In
              </span>

              <span className="w-2/3 text-sm text-slate-600 font-medium">
                From {AccomDetails.house_rules.check_in_time} to 00:00
              </span>
            </div>
            <div className="flex gap-4 p-6 border-b rounded-lg">
              <span className="w-1/3 font-bold text-lg text-defaultGreen">
                Check-out
              </span>

              <span className="w-2/3 text-sm text-slate-600 font-medium">
                From 8:00 to {AccomDetails.house_rules.check_out_time}
              </span>
            </div>
            <div className="flex gap-4 p-6 border-b rounded-lg">
              <span className="w-1/3 font-bold text-lg text-defaultGreen">
                Smoking Allowed
              </span>

              <span className="w-2/3 text-sm text-slate-600 font-medium">
                {AccomDetails.house_rules.smoking_allowed ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex gap-4 p-6 border-b rounded-lg">
              <span className="w-1/3 font-bold text-lg text-defaultGreen">
                Pets Allowed
              </span>

              <span className="w-2/3 text-sm text-slate-600 font-medium">
                {AccomDetails.house_rules.pets_allowed ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex gap-4 p-6 border-b rounded-lg">
              <span className="w-1/3 font-bold text-lg text-defaultGreen">
                Additional Rules
              </span>

              <span className="w-2/3 text-sm text-slate-600 font-medium">
                {AccomDetails.house_rules.additional_rules}
              </span>
            </div>

            {AccomDetailData?.houseRules?.slice(-1).map((rule, index) => (
              <div key={index} className="flex gap-4 p-6 border-b rounded-lg">
                {typeof rule.details !== "string" && (
                  <>
                    <span className="w-1/3 font-bold text-lg text-defaultGreen">
                      {rule.title}
                    </span>
                    <span className="w-2/3 flex gap-4 items-center">
                      {rule.details.map((detail, idx) => (
                        <Icon key={idx} icon={detail} width="48" height="48" />
                      ))}
                      <span className="bg-primaryGreen h-fit px-4 py-2 font-semibold rounded-sm text-xs text-center text-white">
                        Cash
                      </span>
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/*Guest Reviews */}
        <div id="Guest Reviews" className="w-full px-8 flex flex-col gap-4">
          <SingleHeaderSection title="Guest Reviews" />
          <div className="flex gap-2 items-end">
            <span className="w-8 h-8 p-2 bg-primaryGreen text-white font-bold rounded-md text-center text-sm">
              {AccomDetails?.rating}
            </span>
            <span className="text-primaryGreen text-sm font-semibold">
              Faboulus 👌
            </span>
            <span className="text-slate-500 text-sm">{400} Reviews</span>
          </div>
          <div>
            <h1 className="font-semibold text-primaryGreen">Categories :</h1>
            <div className="flex gap-x-12 gap-y-4 flex-wrap">
              {AccomDetailData?.ratings?.map((rate, index) => (
                <div key={index} className="w-72">
                  <span className="w-full flex justify-between items-end space-x-2 text-sm font-bold">
                    <h2 className="mb-0">{rate.category}</h2>
                    <h2 className="mb-0">{rate.score}</h2>
                  </span>
                  <span className="w-full bg-slate-200 h-2 rounded-full block">
                    <span
                      style={{ width: `${rate.score * 10}%` }}
                      className="h-2 bg-primaryGreen rounded-full block"
                    ></span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ReviewsPage Testimonial={AccomDetailData?.testimonies! || []} />
          </div>
        </div>

        <div className="w-3/4 px-8 flex flex-col self-start">
          <SingleHeaderSection title="Where you’ll be" />
          <p className="text-xs text-slate-500 inline-flex items-end gap-1">
            <Icon icon="si:warning-line" width="16" height="16" />
            {AccomDetails?.location}
          </p>

          <iframe
            src={AccomDetailData?.map}
            height="400"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <RightModal
        children={<RoomCard room={selectedRoom} />}
        id={"room-details"}
      />
    </LandingPage>
  );
};

export default accommodationName;
