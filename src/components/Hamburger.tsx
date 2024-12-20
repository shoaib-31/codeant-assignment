import React from "react";
import { twMerge } from "tailwind-merge";

const Hamburger = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className=" md:hidden transition-all ease-in-out flex duration-200"
    >
      <div
        className={twMerge(
          " w-5 h-[2px] rounded-md bg-black relative transition-all ease-in-out duration-200",
          isOpen && "bg-transparent"
        )}
      >
        <span
          className={twMerge(
            "absolute top-0 w-5 h-[2px] left-0 -translate-y-1.5 rounded-xl bg-black transition-all ease-in-out duration-200",
            isOpen && " translate-y-0 rotate-45"
          )}
        ></span>
        <span
          className={twMerge(
            " absolute top-0 w-5 h-[2px] left-0 translate-y-1.5 rounded-xl bg-black transition-all ease-in-out duration-200",
            isOpen && " translate-y-0 -rotate-45"
          )}
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
