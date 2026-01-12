"use client";

import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export interface TabsContextType {
  activeTab: string | number | undefined;
  setActiveTab: Dispatch<SetStateAction<string | number | undefined>>;
}

export const TabsContext = createContext<TabsContextType | undefined>(
  undefined
);

export interface TabsProps {
  initialActiveTab?: string | number;
  className?: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  initialActiveTab,
  className,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string | number | undefined>(
    initialActiveTab
  );
  return (
    <div className={className}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

export const useActiveTab = (): [
  string | number | undefined,
  Dispatch<SetStateAction<string | number | undefined>>
] => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useActiveTab must be used within a Tabs provider");
  }
  return [context.activeTab, context.setActiveTab];
};
