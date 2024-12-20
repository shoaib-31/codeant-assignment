"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo.svg?url";
import Image from "next/image";
import Hamburger from "./Hamburger";
import { ChevronDownIcon } from "lucide-react";
import sidebarOptions from "@/constants/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="relative z-20 bg-background flex items-center flex-col w-full md:max-w-[242px] md:h-full border-b">
        <div className="flex w-full p-4 items-center justify-between">
          <div className="flex flex-1 items-center gap-3 text-2xl">
            <Image src={Logo} alt="Logo" width={30} height={30} />
            CodeAnt AI
          </div>
          <Hamburger isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="hidden md:flex overflow-hidden flex-col gap-4 px-4 w-full  h-full relative">
          <div className="w-full py-2 px-3 gap-1.5 flex items-center justify-between border rounded-lg">
            <span className="flex-1 truncate max-w-[156px]">
              UtkarshDhairyaPanwar
            </span>
            <ChevronDownIcon size={14} />
          </div>
          <div className="flex flex-1 flex-col w-full relative">
            {sidebarOptions.slice(0, 5).map((option) => (
              <Link
                href={option.href}
                key={option.title}
                className={twMerge(
                  "px-3 py-2.5 flex gap-2 text-base text-text-secondary font-semibold items-center rounded-lg relative transition-colors duration-200 ease-in-out",
                  option.href === pathName && "text-white",
                  option.href !== pathName && "hover:bg-gray-100"
                )}
              >
                {option.href === pathName && (
                  <motion.div
                    layoutId="activeOption"
                    className="absolute inset-0 bg-[#1570EF] rounded-lg z-[-1]"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  ></motion.div>
                )}
                <option.icon
                  height={20}
                  className={twMerge(
                    " text-text-secondary",
                    option.href === pathName && "text-white"
                  )}
                />
                {option.title}
              </Link>
            ))}
          </div>
          <div className=" py-6">
            {sidebarOptions.slice(5).map((option) => (
              <Link
                href={option.href}
                key={option.title}
                className="px-3 py-2 flex gap-2 text-base text-text-secondary font-semibold hover:bg-gray-100 items-center rounded-lg relative transition-colors duration-200 ease-in-out"
              >
                <option.icon
                  width={20}
                  height={20}
                  className=" text-text-secondary"
                />
                {option.title}
              </Link>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ height: 0, marginTop: 0, opacity: 0 }}
          animate={
            isOpen
              ? { height: "auto", marginTop: 16, opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden px-3 md:hidden flex flex-col w-full"
        >
          <div className="w-full py-2 px-3 gap-1.5 flex items-center justify-between border rounded-lg">
            <span className="flex-1 truncate">UtkarshDhairyaPanwar</span>
            <ChevronDownIcon size={14} />
          </div>
          <div className="flex flex-col w-full text-text-secondary">
            {sidebarOptions.map((option) => (
              <Link
                href={option.href}
                key={option.title}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="px-3 py-2 flex gap-2 text-lg font-semibold items-center hover:bg-gray-100 rounded-lg"
              >
                <option.icon height={20} />
                {option.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SideBar;
