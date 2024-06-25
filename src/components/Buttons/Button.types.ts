export interface ButtonProps {
  buttonInfo: string;
  onClick: () => void;
  type?: "primary" | "transparent";
  className?: string;
}
