export default interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    className?: "submit" | "reset" | string
    children?: React.ReactNode;
  }