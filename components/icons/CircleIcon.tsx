import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const CircleIcon: React.FC<IconProps> = ({
  width = "51",
  height = "52",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 51 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.4"
      cx="25.6328"
      cy="25.9141"
      r="24.9844"
      transform="rotate(-90 25.6328 25.9141)"
      stroke="currentColor"
      strokeWidth="0.609375"
    />
  </svg>
);
