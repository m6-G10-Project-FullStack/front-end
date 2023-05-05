import { PropsWithChildren, ButtonHTMLAttributes } from "react";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "brand-1"
    | "border-brand-1"
    | "brand-2"
    | "brand-4"
    | "border-brand-4"
    | "gray-0"
    | "gray-1"
    | "border-gray-4"
    | "gray-5"
    | "gray-5-w"
    | "gray-6"
    | "gray-10"
    | "border-gray-10"
    | "alert-2"
    | "alert-3"
    | "success-2"
    | "success-3"
    | "disabled";
}

export const Button = ({
  children,
  variant,
  ...props
}: PropsWithChildren<iButtonProps>) => {
  
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
};
