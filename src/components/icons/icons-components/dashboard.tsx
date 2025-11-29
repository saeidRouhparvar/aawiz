import React from "react";

interface DashboardProps {
  w?: number;
  h?: number;
  color?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ w = 20, h = 20, color = "currentColor" }) => {
  return (
    <svg stroke={color} fill="none" strokeWidth="2" viewBox="0 0 24 24"
      strokeLinecap="round" strokeLinejoin="round" height={h} width={w}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
    </svg>
  );
};
