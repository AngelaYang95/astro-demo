import React from "react";
import { primary, secondary } from "./button.css";

export type StyleType = "primary" | "secondary";

export interface ButtonType {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  styleType?: StyleType;
}

export const Button = React.memo(
  ({ children, to, onClick, styleType = "primary" }: ButtonType) => {
    if (to) {
      return <a href={to}>{children}</a>;
    }
    return (
      <button
        className={styleType == "primary" ? primary : secondary}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
