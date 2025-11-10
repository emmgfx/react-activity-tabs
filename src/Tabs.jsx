"use client";

import { createContext, useState } from "react";

export const TabsContext = createContext({});

export const Tabs = ({ initialActiveTab, className, children }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  return (
    <div className={className}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

export const useActiveTab = () => {
  const { activeTab } = useContext(TabsContext);
  return activeTab;
};
