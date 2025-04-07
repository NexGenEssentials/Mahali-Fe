import React, { useState } from "react";
import {
  LockOutlined,
  LoginOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useRouter } from "next/navigation";
import { SignupFormValues } from "@/app/types";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const SignupForm = () => {
  const [checked, setChecked] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const [phone, setPhone] = useState("");

  const onFinish = async (values: SignupFormValues) => {
    setLoading(true);
    const formData = {
      email: values.email,
      full_name: `${values.firstName} ${values.lastName}`,
      password: values.password,
      phone: phone,
      role: "customer",
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        notification.error({
          message: data.error,
          description: data.description.email || data.description.phone,
          placement: "topRight",
        });
      } else {
        notification.success({
          message: "Account created",
          description: "You have created Account",
          placement: "topRight",
        });

        setTimeout(() => {
          route.push("/login");
        }, 1500);
      }
    } catch (err: any) {
      notification.error({
        message: err.error,
        description: err.error,
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Form Errors",
      description:
        "Kindly correct the highlighted errors in the form and try again.",
      placement: "topRight",
    });
  };

  const validatePassword = (_: any, value: string) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Passwords do not match!"));
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <div className="">
        {/* names */}
        <div className="w-full flex flex-row items-center gap-4  max-sm:flex-wrap ">
          <Form.Item
            label="First Name"
            name="firstName"
            className=" w-full sm:w-1/2 !text-primaryGreen"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input
              type="text"
              allowClear
              placeholder="Enter First Name"
              prefix={
                <UserOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
              }
              className=" hover:!border hover:!border-primaryGreen !text-xs !py-2"
            />
          </Form.Item>
          <Form.Item
            label="Second Name"
            name="lastName"
            className=" w-full sm:w-1/2 !text-primaryGreen"
            rules={[
              {
                required: true,
                message: "Please input your second name!",
              },
            ]}
          >
            <Input
              type="text"
              allowClear
              placeholder="Enter Second Name"
              prefix={
                <UserOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
              }
              className=" hover:!border hover:!border-primaryGreen !text-xs !py-2"
            />
          </Form.Item>
        </div>
        {/* contacts */}
        <div className="w-full flex flex-row items-center gap-4  max-sm:flex-wrap ">
          <Form.Item
            label="Email"
            name="email"
            className=" w-full sm:w-1/2 !text-primaryGreen"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="Email"
              allowClear
              placeholder="Enter Email"
              prefix={
                <MailOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
              }
              className=" hover:!border hover:!border-primaryGreen !text-xs !py-2"
            />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name="phoneNumber"
            className=" w-full sm:w-1/2 !text-primaryGreen"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            {/* <Input
              type="number"
              allowClear
              maxLength={9}
              placeholder="--- --- ---"
              prefix={
                <div className="flex items-center gap-2 pr-1">
                  <PhoneOutlined className="site-form-item-icon rotate-90 text-textDefaultGreen" />
                  <span className="text-textTitlesColor font-bold text-xs">
                    250
                  </span>
                </div>
              }
              className=" hover:!border hover:!border-primaryGreen !text-xs !py-2"
            /> */}
            <PhoneInput
              defaultCountry="ua"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              // className=" hover:border hover:border-primaryGreen text-xs w-full"
            />
          </Form.Item>
        </div>
        {/* password */}
        <div className="w-full flex flex-row items-center gap-4  max-sm:flex-wrap ">
          <Form.Item
            label="Password"
            name="password"
            className=" w-full sm:w-1/2 !text-primaryGreen"
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
                <LockOutlined className="site-form-item-icon text-textDefaultGreen" />
              }
              className=" hover:!border hover:!border-primaryGreen !text-xs !py-2"
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            className=" w-full sm:w-1/2 !text-primaryGreen"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              { validator: validatePassword },
            ]}
          >
            <Input.Password
              placeholder="Enter password"
              prefix={
                <LockOutlined className="site-form-item-icon text-textDefaultGreen" />
              }
              className=" hover:!border hover:!border-primaryGreen !text-xs !py-2"
            />
          </Form.Item>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center flex-wrap gap-4 ">
        <div className="flex gap-2">
          <Checkbox
            onChange={() => setChecked((prev) => !prev)}
            className={
              checked
                ? "ant-checkbox-checked ant-checkbox-inner"
                : "ant-checkbox ant-checkbox-inner"
            }
          ></Checkbox>
          <div>
            <span className="text-primaryBlue text-sm pr-1">
              I agree to the
            </span>
            <span className="underlined text-primaryBlue font-bold text-sm cursor-pointer">
              Terms and conditions
            </span>
          </div>
        </div>
        <Form.Item>
          <Button
            loading={loading}
            disabled={!checked}
            htmlType="submit"
            className=" hover:!bg-primaryGreen hover:!text-white !border-none !shadow-md rounded-md !text-primaryGreen !p-5 !font-extrabold text-sm"
          >
            Register
            <LoginOutlined />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SignupForm;
