import { ArrowUp } from "lucide-react";
import Image from "next/image";
import PieChart from "@/assets/pie-chart.svg";
import Logo from "@/assets/logo.svg";
import React from "react";
import CountUp from "react-countup";

const MainCard = () => {
  return (
    <div className="rounded-3xl border relative shadow-xl">
      <div className="flex font-bold text-lg gap-2 items-center p-6 border-b">
        <Image src={Logo} alt="Logo" width={30} height={30} />
        AI to Detect & Autofix Bad Code
      </div>
      <div className="flex justify-around items-center p-8 gap-12">
        <div className="flex flex-col items-center">
          <strong className="text-lg">
            <CountUp start={0} end={30} duration={1.4} />+
          </strong>
          <span className="text-sm">Language Support</span>
        </div>
        <div className="flex flex-col items-center">
          <strong className="text-lg">
            <CountUp start={0} end={10} duration={1.2} separator="," />
            K+
          </strong>
          <span className="text-sm">Developers</span>
        </div>
        <div className="flex flex-col items-center">
          <strong className="text-lg">
            <CountUp start={0} end={100} duration={1.6} separator="," />
            K+
          </strong>
          <span className="text-sm">Hours Saved</span>
        </div>
      </div>
      <div className="absolute flex flex-col justify-between z-10 bg-background bottom-0 right-0 translate-y-[90%] w-[265px] h-[164px] translate-x-[10%] shadow-all-sides border rounded-3xl p-4">
        <div className="flex justify-between items-center">
          <div className="rounded-full p-4 bg-[#9D90FA]/25">
            <Image src={PieChart} alt="Pie Chart" width={24} height={24} />
          </div>
          <div className="flex flex-col text-xs">
            <div className="text-secondary text-sm font-bold flex">
              <ArrowUp size={24} />
              <CountUp start={0} end={14} duration={1.3} />%
            </div>
            This Week
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">Issues Fixed</span>
          <span className="text-[#081735] text-3xl font-bold">
            <CountUp start={0} end={500} duration={2} separator="," />
            K+
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
