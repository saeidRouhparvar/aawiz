"use client";

import { motion } from "framer-motion";
import { Icon } from "../icons/icon";
import { useTheme } from "@/context/theme-context";

export const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const slideDistance = 40;

  return (
    <div
      className="flex items-center justify-center cursor-pointer select-none"
      onClick={toggleTheme}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
      role="switch"
      aria-checked={isDark}
    >
      <div
        className="
          relative w-[72px] h-[32px] rounded-full flex items-center justify-center px-2
          transition-all shadow-md
          bg-lime-50/80 dark:bg-lime-950/80
        "
      >
        {/* Background icons that change on theme */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          {isDark ? (
            <>
              <Icon name="moon" color="transparent" w={20} h={20} />
              <Icon name="sun" color="transparent" w={20} h={20} />
            </>
          ) : (
            <>
              <Icon name="moon" color="transparent" w={20} h={20} />
              <Icon name="sun" color="transparent" w={20} h={20} />
            </>
          )}
        </div>

        {/* Thumb */}
        <motion.div
          className="
            absolute top-[2px] left-[2px] w-[28px] h-[28px]
            rounded-full flex items-center justify-center
          "
          animate={{
            x: isDark ? slideDistance : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 26,
          }}
        >
          {isDark ? (
            <div className="bg-limeV-400 rounded-full p-1">
              <Icon name="moon" color="#000" w={20} h={20} />
            </div>
          ) : (
            <div className="bg-limeV-600 rounded-full p-1">
              <Icon name="sun" color="#fff" w={20} h={20} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
