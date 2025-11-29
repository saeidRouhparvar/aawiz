"use client";

import { ThemeProvider } from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const pathname = usePathname();

    const noSidebarRoutes = ["/", "/login", "/register"];

    const hideSidebar = noSidebarRoutes.includes(pathname);

    return (
        <div className="flex">
            {!hideSidebar && (
                <div>
                    <Sidebar />
                </div>
            )}

            <div className="w-full">
                <ThemeProvider>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>

                    <Toaster position="top-center" />
                </ThemeProvider>
            </div>
        </div>
    );
}
