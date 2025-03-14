"use client";
import React, { useState, useEffect } from "react";
import ClientPageTemplates from "../clientPageTemplates";
import Title from "../components/header/title";
import { Icon } from "@iconify/react";
import { Table, Pagination, Spin, Tag, Input } from "antd";
import { getAllMyBookings } from "@/app/api/booking/action";
import { BookingData } from "@/app/types";
import Loader from "@/app/(landingPage)/components/skeleton/loader";

const { Search } = Input;
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: BookingData, b: BookingData) => a.id - b.id,
    },
    {
      title: "Type",
      dataIndex: "content_type",
      key: "content_type",
      sorter: (a: BookingData, b: BookingData) =>
        a.content_type.localeCompare(b.content_type),
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
      dataIndex: "total_price",
      key: "total_price",
      sorter: (a: BookingData, b: BookingData) =>
        Number(a.total_price) - Number(b.total_price),
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
            color = "gold"; // Yellow
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
  ];

function BookingsPage() {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<BookingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const pageSize = 10;

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
        booking.content_type.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBookings(filteredData);
    setCurrentPage(1);
  };

  return (
    <ClientPageTemplates>
      <div className="flex flex-col gap-6 min-h-screen px-4">
        <Title name="My Bookings And Trips" icon="material-symbols:book" />

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
            <span className="font-bold text-lg mt-4">No Bookings Found</span>
            <span className="text-sm text-slate-500 text-center mt-2">
              Try searching with different criteria or make a new booking.
            </span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table
              columns={columns}
              dataSource={filteredBookings.slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize
              )}
              rowKey="id"
              pagination={false}
              className="w-full"
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
      </div>
    </ClientPageTemplates>
  );
}

export default BookingsPage;
