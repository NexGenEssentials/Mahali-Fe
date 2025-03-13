"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  Table,
  Pagination,
  Spin,
  Select,
  Input,
  Button,
  Popconfirm,
  Tag,
  notification,
} from "antd";
import {
  getAllMyBookings,
  updateBookingStatus,
} from "@/app/api/booking/action";
import { BookingData } from "@/app/types";
import Loader from "@/app/(landingPage)/components/skeleton/loader";
import Title from "@/app/account/components/header/title";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Search } = Input;

function AdminBookingsPage() {
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

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const result = await updateBookingStatus(id, newStatus);
      notification.success({
        message: result.message,
        description: result.message,
        placement: "topRight",
      });
    } catch (error) {
      console.error("Error updating booking status:", error);
    } finally {
      fetchBookings();
    }
  };

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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: BookingData, b: BookingData) => a.id - b.id,
    },
    { title: "Type", dataIndex: "content_type", key: "content_type" },
    { title: "Guest", dataIndex: "guests", key: "guests" },
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
      render: (status: string, record: BookingData) =>
        status === "pending" ? (
          <Select
            defaultValue={status}
            onChange={(value) => handleStatusChange(record.id, value)}
          >
            <Option value="confirm">Confirm</Option>
            <Option value="cancel">Cancel</Option>
          </Select>
        ) : (
          <Tag color={status === "confirmed" ? "green" : "red"}>
            {status.toUpperCase()}
          </Tag>
        ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 min-h-screen px-4">
      <Title name="Booking List" icon="material-symbols:book" />

      {/* Search Bar */}
      <div className="flex flex-col w-full md:w-2/3 md:flex-row md:items-center justify-between gap-4 bg-white p-4 shadow-md rounded-md">
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
  );
}

export default AdminBookingsPage;
