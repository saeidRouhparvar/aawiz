import React from "react";

interface ArrowProps {
    w?: number;
    h?: number;
    color?: string;
}

export const Arrow: React.FC<ArrowProps> = () => {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );
};
