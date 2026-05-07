import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "semibold" | "bold";
  color?: "primary" | "secondary" | "muted" | "white" | "black";
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as = "p",
  size = "base",
  weight = "normal",
  color = "primary",
  children,
  className = "",
  ...props
}) => {
  const Component = as;

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const weights = {
    light: "font-light",
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colors = {
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-600 dark:text-gray-400",
    muted: "text-gray-500 dark:text-gray-500",
    white: "text-white",
    black: "text-black",
  };

  return (
    <Component
      className={`${sizes[size]} ${weights[weight]} ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
