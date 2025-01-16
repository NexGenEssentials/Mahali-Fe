"use client";
import React, { useState } from "react";
import { LockOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import Link from "next/link";
import { SigninUser } from "./action";
import { useRouter } from "next/navigation";

export interface SigninFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const onFinish = async (values: SigninFormData) => {
    setLoading(true);
    try {
      const data = await SigninUser(values);
      console.log(data)
      setLoading(false);
      if (data.error) {
        notification.error({
          message: data.error,
          description: data.message,
          placement: "topRight",
        });
      } else {
        route.back();
        notification.success({
          message: " Login",
          description: "You have succesfull logged in",
          placement: "topRight",
        });
      }
    } catch (error) {
      setLoading(false);
      notification.error({
        message: "Submission Failed",
        description: "Oops something went wrong !!",
        placement: "topRight",
      });
    }
  };
  const onFinishFailed = () => {
    notification.error({
      message: "Submission Failed",
      description: "Please check the form errors and try again !!",
      placement: "topRight",
    });
  };

  return (
    <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input
          type="email"
          allowClear
          placeholder="Enter email"
          prefix={
            <MailOutlined className="site-form-item-icon pl-1 pr-2 text-primaryGreen" />
          }
          className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-3"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="Enter password"
          prefix={
            <LockOutlined className="site-form-item-icon pl-1 pr-2 text-primaryGreen" />
          }
          className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-3"
        />
      </Form.Item>
      <div className="mt-6 flex justify-between flex-wrap space-y-4 items-center">
        <Link href={"/forget-password"}>
          <span className="underline text-textTitlesColor font-bold cursor-pointer hover:opacity-60">
            Forget Password ?
          </span>
        </Link>
        <Form.Item>
          <Button
            loading={loading}
            htmlType="submit"
            className="bg-primaryGreen hover:bg-primaryGreen hover:text-black rounded-md text-black white p-5 font-extrabold text-sm"
          >
            Login
            <LoginOutlined />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SignInForm;
