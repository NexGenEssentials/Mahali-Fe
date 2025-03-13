"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, Pagination, Spin } from "antd";
import { getAllMyBookings } from "@/app/api/booking/action";
import { BookingData } from "@/app/types";
import Loader from "@/app/(landingPage)/components/skeleton/loader";
import Title from "@/app/account/components/header/title";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";

function AdminBookingsPage() {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setTimeout(() => {
      fetchBookings();
    }, 1000);
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await getAllMyBookings();

      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id: number) => {
    console.log("View Booking:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit Booking:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete Booking:", id);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", width: 60 },
    { title: "Type", dataIndex: "content_type", key: "content_type" },
    { title: "Start Date", dataIndex: "start_date", key: "start_date" },
    { title: "End Date", dataIndex: "end_date", key: "end_date" },
    { title: "Guests", dataIndex: "guests", key: "guests" },
    { title: "Price ($)", dataIndex: "total_price", key: "total_price" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: any) => (
        <div className="flex justify-between gap-2">
          {/* View Button */}
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => handleView(record.id)}
            title="View"
          />

          {/* Edit Button */}
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.id)}
            title="Edit"
          />

          {/* Delete Button with Confirmation */}
          <Popconfirm
            title="Are you sure to delete this booking?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              title="Delete"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 min-h-screen px-4">
      <Title name="Booking List" icon="material-symbols:book" />

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : bookings.length === 0 ? (
        <div className="w-full md:w-1/2 self-center h-full md:h-1/2 border flex flex-col items-center justify-center rounded-md p-6">
          <Icon
            icon="arcticons:triple-a"
            width="80"
            height="80"
            className="text-primaryGreen"
          />
          <span className="font-bold text-lg mt-4">
            Your Bookings & Trips live here
          </span>
          <span className="text-sm text-slate-500 text-center mt-2">
            This page displays all your bookings. If you've made a booking but
            don't see it listed here, please check again.
          </span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={bookings.slice(
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
              total={bookings.length}
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
