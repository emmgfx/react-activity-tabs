import { ReactNode } from "react";

export interface TabsListProps {
  className?: string;
  children: ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
