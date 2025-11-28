import React from "react";

interface EarthProps {
  w?: number;
  h?: number;
  color?: string;
}

export const Earth: React.FC<EarthProps> = ({ w = 24, h = 24, color = "#404040" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 26 26" fill="none">
      <path d="M2.16669 13C2.16669 18.9833 7.01677 23.8334 13 23.8334C18.9833 23.8334 23.8334 18.9833 23.8334 13C23.8334 7.01677 18.9833 2.16669 13 2.16669C7.01677 2.16669 2.16669 7.01677 2.16669 13Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.0833 2.22083C14.0833 2.22083 17.3333 6.49999 17.3333 13C17.3333 19.5 14.0833 23.7792 14.0833 23.7792M11.9167 23.7792C11.9167 23.7792 8.66668 19.5 8.66668 13C8.66668 6.49999 11.9167 2.22083 11.9167 2.22083M2.84918 16.7917H23.1509M2.84918 9.20832H23.1509" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
