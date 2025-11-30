"use client";

import Image from "next/image";
import aawiz_title_light from "@/public/Aawiz_light.png";
import aawiz_title_dark from "@/public/Aawiz_dark.png";

interface BackgroundAnimationProps {
    theme?: "light" | "dark";
}

const BackgroundAnimation = ({ theme }: BackgroundAnimationProps) => {
    const imgSrc = theme === "light" ? aawiz_title_light : aawiz_title_dark;

    return (
        <div className="hidden md:flex flex-col h-fit justify-between overflow-hidden absolute -top-20">
            <Image
                alt="aawiz"
                src={imgSrc}
                className="w-[60%] h-auto self-start animate-slide-right-left"
                priority
            />
            <Image
                alt="aawiz"
                src={imgSrc}
                className="w-[60%] h-auto self-end animate-slide-left-right"
                priority
            />
            <Image
                alt="aawiz"
                src={imgSrc}
                className="w-[60%] h-auto self-start animate-slide-right-left"
                priority
            />
        </div>
    );
}

export default BackgroundAnimation