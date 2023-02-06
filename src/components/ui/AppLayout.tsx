import React from "react";
import { Divider } from "@components/ui/Divider";
import { Footer } from "@components/ui/Footer";
import { Outlet } from "react-router-dom";
import { AppHeader } from "@components/AppHeader";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <div className="w-full grow overflow-x-hidden bg-base-300">
        <main className="flex min-h-full w-full flex-col items-center justify-between">
          <Outlet />
        </main>
        <Divider />
      </div>
      <Footer />
    </div>
  );
};
