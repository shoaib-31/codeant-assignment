import React from "react";
import { twMerge } from "tailwind-merge";

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const LoginButton = (props: LoginButtonProps) => {
  return (
    <button
      className={twMerge(
        "w-full py-4 border rounded-lg flex gap-4 justify-center items-center  text-neutral-900 font-semibold hover:bg-gray-100 transition duration-150 ease-in-out",
        props.className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default LoginButton;
