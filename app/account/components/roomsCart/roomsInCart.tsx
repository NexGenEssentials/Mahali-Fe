"use client";
import { ConfirmCart, DeleteItemToCart, getCart } from "@/app/api/cart/action";
import { useAppContext } from "@/app/context";
import Loading from "@/app/loading";
import { cartListType } from "@/app/types/cart";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

export const commonButtonClass =
  "px-5 py-2 bg-primaryGreen text-white font-medium hover:bg-white hover:text-primaryGreen transition duration-300 border border-primaryGreen rounded-md";

const RoomsInCart = () => {
  const [loading, setLoading] = useState(true);
  const [FilterCartList, setFilterCartList] = useState<cartListType>({
    id: 0,
    user: 0,
    items: [],
    created_at: "",
    updated_at: "",
  });
  const [cartList, setCartList] = useState<cartListType>({
    id: 0,
    user: 0,
    items: [],
    created_at: "",
    updated_at: "",
  });
  const [dateSelected, setDateSelected] = useState<DateObject[]>([
    new DateObject(),
    new DateObject().add(1, "days"),
  ]);
  const [inquiry, setInquiry] = useState<string>("");
  const [errors, setErrors] = useState({
    dateRange: "",
    inquiry: "",
  });
  const pathname = usePathname();
  const router = useRouter();
  const [loadingpay, setLoadingpay] = useState(false);
  const [buttonType, setButtontype] = useState("booking");
  const { isLogin, setActiveModalId, setBookingData } = useAppContext();
  const [open, setOpen] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { dateRange: "", inquiry: "" };

    if (
      !dateSelected ||
      (Array.isArray(dateSelected) && dateSelected.length !== 2)
    ) {
      newErrors.dateRange = "Please select a valid date range.";
      isValid = false;
    }

    if (!inquiry.trim()) {
      newErrors.inquiry = "Inquiry field cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    handleGetCartList();
  }, []);

  const handleGetCartList = async () => {
    const result = await getCart();
    if (result.success) {
      setCartList(result.data);
      setFilterCartList(result.data);
    }
    setLoading(false);
  };
  const handleDeleteRoom = async (id: number) => {
    setLoading(true);
    const result = await DeleteItemToCart(id);

    if (result.success) {
      setCartList((prev) => ({
        ...prev,
        items: prev.items.filter((item) => item.id !== id),
      }));
    }
    setLoading(false);
  };

  const handleBooking = async () => {
    if (!validateForm()) return;
    if (buttonType === "booking") {
      setLoading(true);
    } else {
      setLoadingpay(true);
    }

    try {
      if (isLogin) {
        const bookingData = {
          start_date: Array.isArray(dateSelected)
            ? dateSelected[0].format("YYYY-MM-DD")
            : "",
          end_date: Array.isArray(dateSelected)
            ? dateSelected[1].format("YYYY-MM-DD")
            : "",

          note: inquiry.trim(),
        };

        const result = await ConfirmCart(bookingData);

        if (result.success) {
          if (buttonType === "booking") {
            setActiveModalId(null);
            router.push("/account/bookings-trips");
          } else if (buttonType === "pay") {
            setBookingData(result.data);
            setActiveModalId("pay");
          }
        }
      } else {
        router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      }
    } catch (error) {
      console.error("ERROR", error);
    } finally {
      setLoading(false);
      setLoadingpay(false);
      setOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleBooking();
  };

  if (loading) return <Loading />;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-xl space-y-6">
      <div className="flex justify-between items-center border-b pb-4 relative">
        <h2 className="text-lg font-bold text-primaryGreen flex items-center gap-2">
          <Icon icon="mdi:cart" width="24" height="24" />
          Your Selected Rooms
        </h2>
        {cartList.items.length > 0 && (
          <button onClick={() => setOpen(!open)} className={commonButtonClass}>
            Confirm Booking
          </button>
        )}
        {open && (
          <div className="absolute top-10 right-0 z-40 shadow-md min-w-[300px] bg-slate-100">
            <form
              onSubmit={handleSubmit}
              className="px-4 p-8 flex flex-col gap-4 text-black text-opacity-75 w-full"
            >
              <div>
                <h1 className="text-slate-400 text-sm pl-2">
                  Choose starting and ending Date
                </h1>
                <DatePicker
                  range
                  rangeHover
                  dateSeparator=" to "
                  value={dateSelected}
                  onChange={setDateSelected}
                  format="DD/MM/YYYY"
                  inputClass="p-2 grow w-full min-w-[200px] focus:ring-2 focus:ring-primaryGreen outline-none text-sm rounded-lg outline-none text-nowrap"
                />
                {errors.dateRange && (
                  <p className="text-red-500 text-sm">{errors.dateRange}</p>
                )}
              </div>

              <div>
                <textarea
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  placeholder="Your tour inquiry"
                  rows={3}
                  className="p-2 w-full text-sm rounded-lg outline-none focus:ring-2 focus:ring-primaryGreen"
                />
                {errors.inquiry && (
                  <p className="text-red-500 text-sm">{errors.inquiry}</p>
                )}
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                type="submit"
                onClick={() => setButtontype("booking")}
                className="p-3 w-2/4 mx-auto bg-primaryGreen text-white font-semibold rounded-md"
              >
                {loading ? "Sending..." : "Book Tour"}
              </motion.button>

              <div className="w-full flex justify-center">
                <button
                  onClick={() => setButtontype("pay")}
                  type="submit"
                  className="w-2/4 mx-auto px-2 py-3 border mt-4 bg-blue-200 text-slate-800 border-blue-400 hover:bg-blue-300 duration-300  font-semibold rounded-lg"
                >
                  {loadingpay ? "loading..." : "Pay Now"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading cart...</div>
      ) : cartList.items.length === 0 ? (
        <div className="text-center text-gray-500 flex flex-col items-center gap-2">
          <Icon icon="mdi:bed-empty" width={40} className="text-gray-400" />
          No rooms in your cart yet.
        </div>
      ) : (
        <div className="space-y-4">
          {cartList.items.map((cart) => (
            <div
              key={cart.id}
              className="flex items-center justify-between gap-4 p-4 border-b last:border-b-0 transition"
            >
              <Icon
                icon="emojione-monotone:bed"
                width="50"
                height="50"
                className="text-primaryGreen"
              />
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-primaryBlue text-sm md:text-base mb-0">
                  <span className="font-medium">Name:</span>{" "}
                  {cart.room_type_name}
                </h3>
                <p className="font-semibold text-gray-600 text-sm mb-0">
                  <span className="font-medium">Type:</span> {cart.room_type}
                </p>
                <p className="font-semibold text-gray-600 text-sm mb-0">
                  <span className="font-medium">Rooms:</span> {cart.quantity}
                </p>
              </div>
              <Icon
                onClick={() => handleDeleteRoom(cart.room_type)}
                icon="material-symbols-light:delete-rounded"
                width="30"
                height="30"
                className="text-red-400 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomsInCart;
