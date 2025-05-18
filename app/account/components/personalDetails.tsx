"use client";
import { UserProfile } from "@/app/types";
import React, { FC, useEffect, useState } from "react";
import { Button, Input, Spin, message } from "antd";
import { EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";

const PersonalDetails: FC = () => {
  const [userAccount, setUserAccount] = useState<UserProfile | undefined>(
    undefined
  );
  const [formData, setFormData] = useState<UserProfile | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/user_profile", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        setUserAccount(data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        message.error("Unable to load user profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setFormData((prev) => ({
      ...prev!,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setFormData(userAccount); // reset
    setEditing(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/user_profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }

      const updatedData = await response.json();
      setUserAccount(updatedData);
      setEditing(false);
      message.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error("Failed to update profile");
    }
  };

  return (
    <section className="p-6 mx-auto max-w-2xl bg-white shadow rounded-lg">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <Spin size="large" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            {editing ? (
              <Input
                value={formData?.full_name}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
              />
            ) : (
              <p className="text-lg font-medium">
                {userAccount?.full_name || "N/A"}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <p className="text-gray-500 text-sm">Email Address</p>
            {/* {editing ? (
              <Input
                value={formData?.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            ) : ( */}
              <p className="text-lg font-medium">
                {userAccount?.email || "N/A"}
              </p>
            {/* )} */}
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-500 text-sm">Phone Number</p>
            {editing ? (
              <Input
                value={formData?.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            ) : (
              <p className="text-lg font-medium">
                {userAccount?.phone || "N/A"}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            {editing ? (
              <>
                <Button
                  icon={<SaveOutlined />}
                  className="!bg-primaryGreen !text-white hover:!border-none"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
                <Button
                  icon={<CloseOutlined />}
                  className="!text-primaryGreen  hover:!border-primaryGreen"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                icon={<EditOutlined />}
                onClick={handleEdit}
                className="!bg-primaryGreen !text-white hover:!border-none"
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonalDetails;
