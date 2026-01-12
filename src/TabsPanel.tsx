"use client";

import { useContext, ReactNode, Activity } from "react";

import { TabsContext } from "./Tabs";

export interface TabsPanelProps {
  tabId: string | number;
  className?: string;
  children: ReactNode;
}

export const TabsPanel = ({ tabId, className, children }: TabsPanelProps) => {
  const { activeTab } = useContext(TabsContext)!;
  return (
    <Activity mode={activeTab === tabId ? "visible" : "hidden"}>
      <div className={className}>{children}</div>
    </Activity>
  );
};
