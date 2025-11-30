import React from "react";

interface BurgerProps {
    w?: number;
    h?: number;
    color?: string;
}

export const Burger: React.FC<BurgerProps> = ({ w = 24, h = 24, color = 'currentColor' }) => {
    return (
        <svg stroke="currentColor" fill={color} strokeWidth="0" viewBox="0 0 24 24" height={h} width={w} xmlns="http://www.w3.org/2000/svg">
            <path d="M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM17 17V7L22 11.9996L17 17Z"></path>
        </svg>
    );
};
