import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const MenuTbIcon: React.FC<IconProps> = ({
  width = "50",
  height = "27",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 50 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect rx="1.5" fill="currentColor" />
    <rect y="11.7637" rx="1.5" fill="currentColor" />
    <rect y="23.5303" rx="1.5" fill="currentColor" />
  </svg>
);
