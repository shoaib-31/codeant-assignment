import { ButtonVariants } from "@/constants/button";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const classes = cva(
  "px-3.5 py-2.5 rounded-lg text-sm flex items-center justify-center gap-1 transition ease-in-out duration-200",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-[#1570ef]/90",
        secondary:
          "bg-transparent text-text-secondary border border-neutral-200 hover:bg-gray-100",
        tertiary: "",
      },
      defaultVariants: {
        variant: "primary",
      },
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof ButtonVariants;
}

const Button = (props: ButtonProps) => {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
