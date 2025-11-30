'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {

  // Close on Esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        exit={{ x: -250 }}
        transition={{ type: "tween", duration: 0.25 }}
        className="fixed left-0 top-0 w-[230px] h-full bg-limeV-100 shadow-xl z-50 p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-limeV-900">Menu</h2>

        <nav className="flex flex-col gap-4 text-lg text-limeV-950">
          <Link className="hover:text-limeV-600" href="/dashboard">Dashboard</Link>
        </nav>
      </motion.div>
    </>
  );
}
