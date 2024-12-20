import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { tabs, TabType } from "@/constants/tabs";

const TabComponent = ({
  activeTab,
  handleTabChange,
}: {
  activeTab: TabType;
  handleTabChange: (tab: TabType) => void;
}) => {
  const activeIndex = tabs.indexOf(activeTab);

  return (
    <div className="w-full flex rounded-lg border font-semibold relative">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={twMerge(
            "flex-1 px-3.5 py-3 text-center cursor-pointer relative z-10",
            activeTab === tab ? "text-white" : "text-gray-700 hover:bg-gray-100"
          )}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
        </div>
      ))}
      <motion.div
        className="absolute top-0 bottom-0 bg-primary rounded-lg z-0"
        layout
        initial={false}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        }}
        style={{
          left: `${(100 / tabs.length) * activeIndex}%`,
          right: `${100 - (100 / tabs.length) * (activeIndex + 1)}%`,
        }}
      />
    </div>
  );
};

export default TabComponent;
