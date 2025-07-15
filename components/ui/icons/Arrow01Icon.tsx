import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Arrow01Icon: React.FC<IconProps> = ({
  width = "25",
  height = "10",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 25 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5L23.3333 5M23.3333 5L18.3333 0.999999M23.3333 5L19.3333 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
