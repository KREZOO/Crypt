import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const FacebookIcon: React.FC<IconProps> = ({
  width = "43",
  height = "43",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0098 0.781738C9.40642 0.781738 0 10.1882 0 21.7916C0 33.395 9.40642 42.8014 21.0098 42.8014C32.6132 42.8014 42.0196 33.395 42.0196 21.7916C42.0196 10.1882 32.6132 0.781738 21.0098 0.781738ZM22.4408 23.0926V35.0948H17.4749V23.0931H14.9939V18.9571H17.4749V16.4738C17.4749 13.0997 18.8758 11.0933 22.8559 11.0933H26.1695V15.2297H24.0983C22.5489 15.2297 22.4464 15.8078 22.4464 16.8865L22.4408 18.9566H26.193L25.7539 23.0926H22.4408Z"
      fill="currentColor"
    />
  </svg>
);
