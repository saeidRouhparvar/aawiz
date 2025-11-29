import React from "react";

interface ArrowProps {
    w?: number;
    h?: number;
    color?: string;
}

export const Arrow: React.FC<ArrowProps> = ({ w = 24, h = 24, color = 'currentColor' }) => {
    return (
        <svg stroke="currentColor" fill={color} strokeWidth="0" viewBox="0 0 512 512" height={w} width={h} xmlns="http://www.w3.org/2000/svg">
            <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
        </svg>
    );
};
