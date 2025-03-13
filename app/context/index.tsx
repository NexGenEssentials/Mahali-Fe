"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { DateObject } from "react-multi-date-picker";
interface ContextValue {
  openNavDiscount: boolean;
  setOpenNavDiscount: (openNavDiscount: boolean) => void;
  activeModalId: string | null;
  setActiveModalId: (id: string | null) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  adminServiceTab: string;
  setAdminServiceTab: (adminServiceTab: string) => void;
  showZoom: boolean;
  setShowZoom: (isLogin: boolean) => void;
  bookDate: DateObject[];
  setbookDate: (bookDate: DateObject[]) => void;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
  const [openNavDiscount, setOpenNavDiscount] = useState<boolean>(true);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [bookDate, setbookDate] = useState<DateObject[]>([]);
  const [adminServiceTab, setAdminServiceTab] = useState(
    "Holiday & Tour Packages"
  );

  return (
    <AppContext.Provider
      value={{
        openNavDiscount,
        setOpenNavDiscount,
        activeModalId,
        setActiveModalId,
        isLogin,
        setIsLogin,
        adminServiceTab,
        setAdminServiceTab,
        showZoom,
        setShowZoom,
        bookDate,
        setbookDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
export default ContextProvider;
