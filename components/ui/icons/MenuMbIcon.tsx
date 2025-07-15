import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const MenuMbIcon: React.FC<IconProps> = ({
  width = "34",
  height = "22",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 34 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect rx="1" fill="currentColor" />
    <rect y="10" rx="1" fill="currentColor" />
    <rect y="20" rx="1" fill="currentColor" />
  </svg>
);
