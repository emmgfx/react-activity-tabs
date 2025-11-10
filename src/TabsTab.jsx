"use client";

import { useContext } from "react";

import { TabsContext } from "./Tabs";

export const TabsTab = ({ tabId, className, activeClassName, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === tabId;
  return (
    <button
      className={isActive && activeClassName ? activeClassName : className}
      onClick={() => setActiveTab(tabId)}
    >
      {children}
    </button>
  );
};
