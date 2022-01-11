import type { ButtonHTMLAttributes, FC } from "react";

import { tw, apply, Directive, CSSRules } from "twind";

const variantMap: Record<string, string> = {
  success: "green",
  primary: "blue",
  warning: "yellow",
  info: "gray",
  danger: "red",
};

const sizeMap: Record<string, Directive<CSSRules>> = {
  sm: apply`text-xs py(2 md:1) px-2`,
  md: apply`text-sm py(3 md:2) px-2`,
  lg: apply`text-lg py-2 px-4`,
  xl: apply`text-xl py-3 px-6`,
};

const baseStyles = apply`
  w(full md:auto)
  text(sm white)
  px-4
  border-none
  transition-colors
  duration-300
`;

type PropTypes = {
  variant?: "primary" | "success" | "warning" | "info" | "danger";
  className?: string;
  round?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropTypes> = ({
  variant = "primary",
  size = "md",
  round = false,
  disabled = false,
  type = "button",
  className,
  children,
}) => {
  const instanceStyles = apply`
    ${baseStyles}
    bg-${variantMap[variant]}(600 700(hover:& focus:&)))
    ${sizeMap[size]}
    rounded-${round ? "full" : "lg"}
    ${disabled && "bg-gray-400 text-gray-100 cursor-not-allowed"}
  `;

  return (
    <button type={type} className={tw(instanceStyles, className)}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  round: false,
  disabled: false,
  type: "button",
};
