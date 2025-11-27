'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Splash = () => {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

 useEffect(() => {


  const timeout = setTimeout(() => {
    setShowSplash(false);
    router.push("/login");
  }, 3000);

  return () => {
    clearTimeout(timeout);
  };
}, [router]);


  if (!showSplash) return null;

  return (
    <div className="flex items-center justify-center h-screen ">
      <h1 className="text-6xl font-bold text-cyanV-600 dark:text-cyanV-400">
       Aawiz
      </h1>
    </div>
  );
};

export default Splash;
