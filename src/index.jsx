"use client";

import { useState, createContext, useContext } from "react";

const TabsContext = createContext({});

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

export const TabsList = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const TabsTab = ({ tabId, className, children }) => {
  const { setActiveTab } = useContext(TabsContext);
  return (
    <button className={className} onClick={() => setActiveTab(tabId)}>
      {children}
    </button>
  );
};

export const TabsPanels = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const TabsPanel = ({ tabId, className, children }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== tabId) return null;
  return <div className={className}>{children}</div>;
};
