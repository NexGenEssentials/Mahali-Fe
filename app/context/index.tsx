"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
interface ContextValue {
    openNavDiscount:boolean;
    setOpenNavDiscount:(openNavDiscount:boolean)=> void;
    activeModalId: string | null;
    setActiveModalId: (id: string | null) => void;
    isLogin:boolean;
    setIsLogin:(isLogin:boolean)=> void
    adminServiceTab:string;
    setAdminServiceTab:(adminServiceTab:string)=> void
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
const[openNavDiscount, setOpenNavDiscount] = useState<boolean>(true)
const [activeModalId, setActiveModalId] = useState<string | null>(null);
const [isLogin, setIsLogin]=useState(false)
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