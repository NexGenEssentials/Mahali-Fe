"use client"
import React from "react";
import { LoginOutlined } from "@ant-design/icons";
import SignupForm from "./form";
import ButtonComponent from "@/app/(landingPage)/components/buttons/buttonIcon";

const Signup = () => {
  return (
    <section className="bg-slate-100 w-full h-full min-h-[calc(100vh)] py-8 flex items-center justify-center">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-screen-lg rounded-2xl bg-white flex flex-row shadow-md">
          <div className="w-full p-8 flex flex-col">
            <h1 className="text-textPrimaryColor font-extrabold text-2xl mb-5">
              Register
            </h1>
            <SignupForm />
          </div>
        </div>
        <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-screen-lg p-8 bg-white rounded-2xl flex justify-between items-center flex-wrap gap-4 shadow-md">
          <div className="flex flex-col gap-2">
            <span className="text-textTitlesColor font-bold text-sm">
              Already have an account ?
            </span>
            <span className="text-textSubTitlesColor text-xs">Go to login</span>
          </div>
          <ButtonComponent
            title="Login"
            color=""
            link="/login"
            icon={<LoginOutlined className="text-textDefaultGreen font-bold" />}
          />
        </div>
      </div>
    </section>
  );
};
export default Signup;
