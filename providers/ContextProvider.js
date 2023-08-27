"use client";
import React, { createContext, useState } from "react";

export const MainContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [sideBarActive, setSideBarActive] = useState(false);

  const data = {
    sideBarActive,
    setSideBarActive,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default ContextProvider;
