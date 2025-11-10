"use client";

import { Activity, useContext } from "react";

import { TabsContext } from "./Tabs";

export const TabsPanel = ({ tabId, className, children }) => {
  const { activeTab } = useContext(TabsContext);
  return (
    <Activity mode={activeTab === tabId ? "visible" : "hidden"}>
      <div className={className}>{children}</div>
    </Activity>
  );
};
