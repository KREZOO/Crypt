import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const CloseIcon: React.FC<IconProps> = ({
  width = "26",
  height = "26",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.6875"
      y="0.270996"
      rx="1"
      transform="rotate(45 1.6875 0.270996)"
      fill="currentColor"
    />
    <rect
      x="25.729"
      y="1.68506"
      rx="1"
      transform="rotate(135 25.729 1.68506)"
      fill="currentColor"
    />
  </svg>
);
