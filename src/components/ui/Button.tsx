import { Button } from "antd";

export interface ButtonProps {
  type?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ButtonCustom({
  type = "",
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Button type={type} className={className} onClick={onClick}>
      {children}
    </Button>
  );
}
