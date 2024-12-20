"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg?url";
import { useState } from "react";
import { tabs, TabType } from "@/constants/tabs";
import LoginSection from "@/components/LoginSection";
import TabComponent from "@/components/TabComponent";
import MainCard from "@/components/MainCard";
import { motion } from "framer-motion";
export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>(tabs[0]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className=" flex items-center justify-center h-full  bg-background min-h-dvh w-full"
    >
      <div className=" flex-1 hidden lg:flex justify-center items-center relative w-full h-full min-h-dvh border border-transparent border-r-neutral-200">
        <Image
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className=" opacity-20 bottom-0 left-0 absolute"
        />
        <MainCard />
      </div>
      <div className="container flex-1 flex flex-col justify-center items-center h-svh gap-8 p-4">
        <div className="border rounded-xl flex flex-col items-center  w-full h-[600px] shadow-sm max-w-xl">
          <div className="px-4 py-8 w-full flex flex-col items-center justify-center gap-6 border-b">
            <div className="flex flex-col items-center">
              <div className="text-3xl gap-3 flex items-center">
                <Image src={Logo} alt="Logo" width={40} height={40} />
                CodeAnt AI
              </div>
            </div>
            <div className="text-2xl lg:text-3xl font-semibold">
              Welcome to CodeAnt AI
            </div>
            <TabComponent
              activeTab={activeTab}
              handleTabChange={handleTabChange}
            />
          </div>
          <LoginSection activeTab={activeTab} />
        </div>
        <div className=" text-sm">
          By signing up you agree to the <strong>Privacy Policy</strong>.
        </div>
      </div>
    </motion.div>
  );
}
