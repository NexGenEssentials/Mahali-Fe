"use client";
import React, { useState, useEffect } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import { Icon } from "@iconify/react";
import { Table, Pagination, Spin, Tag, Input, Button, Popconfirm } from "antd";
import { DeleteMyBooking, getAllMyBookings } from "@/app/api/booking/action";
import { BookingData } from "@/app/types";
import Loader from "@/app/(landingPage)/components/skeleton/loader";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context";
import CenterModal from "@/app/(landingPage)/components/model/centerModel";
import BookingAction from "../components/card/bookingAction";
import ListingBulkBooking from "../components/listingBulkBooking";

const { Search } = Input;
const contentId = process.env.NEXT_PUBLIC_CUSTOM_PACKAGE_ID;
const Tabs = [
  {
    id: "bookings",
    name: "Bookings",
  },
  {
    id: "bulk_bookings",
    name: "Bulk Bookings",
  },
];

function BookingsPage() {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<BookingData[]>([]);
  const [bookedCustPack, setBookedCustPack] = useState<
    BookingData | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const pageSize = 10;
  const { setActiveModalId, setBookingData } = useAppContext();
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const [activeTab, setActiveTab] = useState("bookings");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await getAllMyBookings();
      setBookings(response.data);
      setFilteredBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Search function
  const handleSearch = (value: string) => {
    setSearchText(value);
    const filteredData = bookings.filter(
      (booking) =>
        booking.id.toString().includes(value) ||
        booking.content_type.toLowerCase().includes(value.toLowerCase()) ||
        booking.booking_reference.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBookings(filteredData);
    setCurrentPage(1);
  };

  const handleDelete = async (bookingId: number) => {
    try {
      const result = await DeleteMyBooking(bookingId);
      if (result)
        setFilteredBookings((prev) =>
          prev.filter((booking) => booking.id !== bookingId)
        );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleRebook = (booking: BookingData) => {
    setBookedCustPack(booking);
    setActiveModalId("rebook pack");
  };

  const handleView = (bookingId: number, type: string, rowKey: number) => {
    if (type === "custompackage") {
      // Toggle expand/collapse
      setExpandedRowKeys((prevKeys) =>
        prevKeys.includes(rowKey)
          ? prevKeys.filter((key) => key !== rowKey)
          : [...prevKeys, rowKey]
      );
    } else if (type === "tourpackage") {
      router.push(`/packages/${bookingId}`);
    } else if (type === "car") {
      router.push(`/service/car-rental/${bookingId}`);
    }
  };

  const handlePayment = (record: BookingData) => {
    setActiveModalId("pay");
    setBookingData(record);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (_: any, __: BookingData, index: number) => (
        <span>{index + 1}</span>
      ),
    },
    {
      title: "Booking Referance",
      dataIndex: "booking_reference",
      key: "booking_reference",
      sorter: (a: BookingData, b: BookingData) =>
        a.booking_reference.localeCompare(b.booking_reference),
    },
    {
      title: "Type",
      dataIndex: "content_type",
      key: "content_type",
      sorter: (a: BookingData, b: BookingData) =>
        a.content_type.localeCompare(b.content_type),
    },
    {
      title: "Created At",
      key: "created_at",
      sorter: (a: BookingData, b: BookingData) =>
        new Date(a.end_date).getTime() - new Date(b.end_date).getTime(),

      render: (record: BookingData) => {
        const createdAt = new Date(record.created_at);
        if (isNaN(createdAt.getTime())) {
          return <span>Invalid Date</span>;
        }
        return <span>{createdAt.toISOString().split("T")[0]}</span>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      sorter: (a: BookingData, b: BookingData) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      sorter: (a: BookingData, b: BookingData) =>
        new Date(a.end_date).getTime() - new Date(b.end_date).getTime(),
    },
    {
      title: "Price ($)",
      key: "total_price",
      sorter: (a: BookingData, b: BookingData) =>
        Number(a.total_price) - Number(b.total_price),
      render: (record: BookingData) => {
        return <span>{Number(record.total_price).toLocaleString()}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a: BookingData, b: BookingData) =>
        a.status.localeCompare(b.status),
      render: (status: string) => {
        let color = "";
        switch (status) {
          case "pending":
            color = "gold";
            break;
          case "confirmed":
            color = "green";
            break;
          case "canceled":
            color = "red";
            break;
          default:
            color = "gray";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Payment Status",
      key: "payment_status",

      sorter: (a: BookingData, b: BookingData) =>
        a.status.localeCompare(b.status),
      render: (data: BookingData) => {
        return (
          <button
            className={`${
              data.payment_status === "pending"
                ? " text-yellow-400"
                : data.payment_status === "confirmed"
                ? "text-green-400"
                : " text-red-400"
            } p-2 rounded-lg capitalize font-semibold`}
            disabled={data.status !== "confirmed"}
          >
            {data.payment_status ? data.payment_status : "Not paid"}
          </button>
        );
      },
    },

    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: BookingData) => (
        <span className="flex space-x-2">
          <Button
            type="link"
            onClick={() =>
              handleView(record.object_id, record.content_type, record.id)
            }
            icon={<Icon icon="mdi:eye" />}
            className="!text-stone-500 !font-bold"
          >
            View
          </Button>
          {record.content_type === "custompackage" && (
            <Button
              type="link"
              onClick={() => handleRebook(record)}
              icon={<Icon icon="mdi:repeat" />}
              className=" !font-bold"
            >
              Rebook
            </Button>
          )}
          <button
            onClick={() => handlePayment(record)}
            className={`${
              record.status === "confirmed"
                ? "bg-blue-300 text-slate-700"
                : "bg-slate-200 text-slate-400"
            } p-2 rounded-lg text-nowrap`}
            disabled={record.status !== "confirmed"}
          >
            Pay Now
          </button>
          <Popconfirm
            title="Are you sure you want to delete this booking?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              style: { backgroundColor: "#16a34a", borderColor: "#16a34a" },
              type: "primary",
            }}
            cancelButtonProps={{
              style: { color: "#dc2626" },
            }}
          >
            <Button
              type="link"
              danger
              icon={<Icon icon="mdi:delete" />}
              className=" !font-bold"
            >
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-6 min-h-screen px-4">
        <div className="flex items-center justify-between">
          <Title name="My Bookings And Trips" icon="material-symbols:book" />

          <div>
            {Tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-primaryGreen text-white"
                    : "text-gray-700"
                } mr-4 p-2 rounded-lg font-semibold text-sm`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {activeTab === "bookings" && (
          <>
            {/* Search Bar */}
            <div className="flex w-full md:w-1/3 flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 shadow-md rounded-md">
              <Search
                placeholder="Search by ID or Type..."
                allowClear
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                onSearch={handleSearch}
                className="w-full md:w-1/3"
              />
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            ) : filteredBookings.length === 0 ? (
              <div className="w-full md:w-1/2 self-center h-full md:h-1/2 border flex flex-col items-center justify-center rounded-md p-6">
                <Icon
                  icon="arcticons:triple-a"
                  width="80"
                  height="80"
                  className="text-primaryGreen"
                />
                <span className="font-bold text-lg mt-4">
                  No Bookings Found
                </span>
                <span className="text-sm text-slate-500 text-center mt-2">
                  Try searching with different criteria or make a new booking.
                </span>
              </div>
            ) : (
              <div className="">
                <Table
                  columns={columns}
                  dataSource={[...filteredBookings]
                    .sort(
                      (a, b) =>
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                    )
                    .slice(
                      (currentPage - 1) * pageSize,
                      currentPage * pageSize
                    )}
                  rowKey="id"
                  pagination={false}
                  className="w-full hide-scrollbar"
                  expandable={{
                    expandedRowKeys,
                    onExpandedRowsChange: (keys) =>
                      setExpandedRowKeys([...keys]),
                    expandedRowRender: (record: BookingData) => (
                      <div className="p-4 bg-gray-100 rounded-md">
                        <p>
                          <strong>Traveler Name:</strong>{" "}
                          {record.user.full_name}
                        </p>
                        <p>
                          <strong>Email:</strong> {record.user.email}
                        </p>
                        <p>
                          <strong>Notes:</strong>{" "}
                          {record.note || "No additional notes."}
                        </p>
                      </div>
                    ),
                    rowExpandable: (record) => true,
                  }}
                />

                <div className="flex justify-center mt-4">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredBookings.length}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                  />
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === "bulk_bookings" && <ListingBulkBooking />}
      </div>
      <CenterModal
        children={
          <BookingAction
            content_type={Number(contentId)}
            object_id={Number(bookedCustPack?.object_id)}
            guests={Number(bookedCustPack?.guests)}
            total_price={Number(bookedCustPack?.total_price)}
          />
        }
        id={"rebook pack"}
      />
    </ClientPageTemplates>
  );
}

export default BookingsPage;
