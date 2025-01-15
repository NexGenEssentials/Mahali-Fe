"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
interface ContextValue {
    openNavDiscount:boolean;
    setOpenNavDiscount:(openNavDiscount:boolean)=> void;
    activeModalId: string | null;
    setActiveModalId: (id: string | null) => void;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
const[openNavDiscount, setOpenNavDiscount] = useState<boolean>(true)
const [activeModalId, setActiveModalId] = useState<string | null>(null);

return (
    <AppContext.Provider
      value={{
        openNavDiscount,
         setOpenNavDiscount,
         activeModalId, 
         setActiveModalId
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