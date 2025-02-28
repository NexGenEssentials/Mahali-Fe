"use client";
import { UserProfile } from "@/app/types";
import React, { FC, useEffect, useState } from "react";

const PersonalDetails: FC = () => {
  const [userAccount, setUserAccount] = useState<UserProfile | undefined>(
    undefined
  );
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
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  },[]);

  return <section></section>;
};

export default PersonalDetails;
