import { FormEvent } from "react";

export interface ButtonProps {
  buttonInfo: string;
  onClick: (e: FormEvent) => void;
  type?: "primary" | "transparent";
  className?: string;
  disabled?: boolean;
}
