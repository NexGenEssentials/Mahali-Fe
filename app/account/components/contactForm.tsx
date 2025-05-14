"use client";
import React, { useState } from "react";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors: any = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setFormData({ fullName: "", email: "", message: "" });
      setSuccessMessage("Your message has been sent successfully!");
    } catch (err) {
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primaryGreen mb-6">
          Contact Us
        </h1>
        <h2 className="text-center underline mb-4">
          Have a Question or Need Help?
        </h2>
        <p className="text-center text-gray-600 mb-8 leading-6">
          Our friendly team is here to make your experience smooth and
          enjoyable. <br />
          Feel free to send us a message using the form, or chat with us
          instantly through the <strong>live chat</strong> at the bottom right
          corner of your screen. <br />
          We’re always happy to assist you!
        </p>

        <div className="grid md:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-md">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primaryGreen">
              Customer Service
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <PhoneOutlined
                  rotate={90}
                  className="mt-1 !text-primaryGreen"
                />
                <span>+250 793 898 790</span>
              </li>
              <li className="flex items-start gap-3">
                <MailOutlined className="mt-1 !text-primaryGreen" />
                <span>info@mahaliafrica.com</span>
              </li>
              <li className="flex items-start gap-3">
                <EnvironmentOutlined className="mt-1 !text-primaryGreen" />
                <span>KG 180 AVE, Kigali Rwanda</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryGreen`}
                  placeholder="Your Name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryGreen`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryGreen`}
                  rows={5}
                  placeholder="Write your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {successMessage && (
                <p className="text-green-600 font-medium">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-600 font-medium">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-primaryGreen text-white px-6 py-2 rounded-md hover:bg-primaryGreen/70 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
