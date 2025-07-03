import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const PauseIcon: React.FC<IconProps> = ({
  width = "16",
  height = "27",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 16 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="currentColor" />
    <rect x="12" fill="currentColor" />
  </svg>
);
