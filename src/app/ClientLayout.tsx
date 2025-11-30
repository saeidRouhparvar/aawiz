"use client";

import { ThemeProvider } from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import TopBar from "@/components/TopBar";
import MobileMenu from "@/components/pages/MobileMenu";

const ClientLayout = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);

    const noSidebarRoutes = ["/", "/login", "/register"];
    const hideSidebar = noSidebarRoutes.includes(pathname);

    return (
        <ThemeProvider>
            <div className="flex">

                {!hideSidebar && (
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>
                )}

                <div className="w-full flex flex-col">
                    {!hideSidebar &&
                        <TopBar menuClick={() => setMenuOpen(true)} />
                    }

                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>

                    <Toaster position="top-center" />
                </div>

                <MobileMenu
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                />

            </div>
        </ThemeProvider>
    );
}

export default ClientLayout