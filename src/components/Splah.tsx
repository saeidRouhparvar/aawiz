'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundAnimation from "./pages/BackgroundAnimation";

const Splash = () => {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
      router.push("/login");
    }, 2500);

    return () => clearTimeout(timeout);
  }, [router]);

  if (!showSplash) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-neutV-50 dark:bg-neutV-900">
      <BackgroundAnimation />

      <h1 className="text-8xl font-extrabold text-limeV-700 animate-fade-scale">
        Aawiz
      </h1>

    </div>
  );
};

export default Splash;
