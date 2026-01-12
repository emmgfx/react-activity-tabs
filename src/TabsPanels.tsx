import { ReactNode } from "react";

export interface TabsPanelsProps {
  className?: string;
  children: ReactNode;
}

export const TabsPanels = ({ className, children }: TabsPanelsProps) => {
  return <div className={className}>{children}</div>;
};
