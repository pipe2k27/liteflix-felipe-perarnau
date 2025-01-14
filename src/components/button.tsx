import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  text: string;
  variant?: "transparent" | "solid";
  Icon?: LucideIcon;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "solid",
  Icon,
  className,
}) => {
  return (
    <button
      className={`flex items-center justify-center h-[56px]  w-[248px] uppercase text-white font-thin rounded-none ${
        variant === "solid" ? "bg-[#242424]" : "bg-transparent"
      } ${variant === "transparent" && "border-white border-solid border"} ${
        className && className
      }
      `}
    >
      {Icon && <Icon className="mr-2" />}
      {text}
    </button>
  );
};

export default Button;
