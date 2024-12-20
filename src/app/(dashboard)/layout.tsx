import SideBar from "@/components/SideBar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-screen md:flex-row">
      <SideBar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
