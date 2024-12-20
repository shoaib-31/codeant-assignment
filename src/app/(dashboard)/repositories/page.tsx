"use client";
import Button from "@/components/Button";
import RepoList from "@/components/RepoList";
import { Plus, RefreshCw, Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="w-full h-full md:p-6 md:overflow-hidden md:border-l"
    >
      <div className=" w-full h-full flex flex-col md:rounded-xl md:border md:overflow-hidden ">
        <div className="w-full flex flex-col gap-4 p-4 border-b md:px-6 md:py-5 h-auto">
          <div className=" w-full h-full flex flex-col gap-4 md:flex-row md:justify-between">
            <div className=" flex flex-col gap-1">
              <span className=" text-2xl font-semibold">Repositories</span>
              <span className=" text-sm text-text-secondary">
                33 total repositories
              </span>
            </div>
            <div className=" flex gap-3">
              <Button variant="secondary">
                <RefreshCw size={20} /> Refresh All
              </Button>
              <Button variant="primary" className=" ">
                <Plus size={20} /> Add Repository
              </Button>
            </div>
          </div>
          <div className=" relative">
            <Search
              size={20}
              className=" absolute top-1/2 -translate-y-1/2 left-3 text-text-secondary"
            />
            <input
              type="text"
              className=" w-full border px-3.5 py-2.5 pl-10 outline-none text-lg rounded-lg sm:max-w-[366px]"
              placeholder="Search Repositories"
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
        </div>
        <RepoList searchInput={searchInput} />
      </div>
    </motion.div>
  );
};

export default Page;
