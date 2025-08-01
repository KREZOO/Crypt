import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const TimeOutIcon: React.FC<IconProps> = ({
  width = "118",
  height = "120",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 118 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M59.0459 119.816C38.3928 119.816 21.5907 103.014 21.5907 82.3621C21.5907 61.7099 38.3928 44.907 59.0459 44.907C79.699 44.907 96.5002 61.709 96.5002 82.3621C96.5002 103.015 79.6981 119.816 59.0459 119.816ZM59.0459 50.5966C41.5303 50.5966 27.2838 64.8465 27.2838 82.3587C27.2838 99.8709 41.5337 114.121 59.0459 114.121C76.5581 114.121 90.808 99.8709 90.808 82.3587C90.808 64.8465 76.5606 50.5966 59.0459 50.5966Z"
      fill="currentColor"
    />
    <path
      d="M74.6265 97.3032C74.1284 97.303 73.6391 97.1715 73.208 96.9219L56.2002 87.1092V61.128C56.2132 60.3819 56.5186 59.6708 57.0508 59.1478C57.583 58.6248 58.2993 58.3318 59.0454 58.3318C59.7916 58.3318 60.5079 58.6248 61.0401 59.1478C61.5722 59.6708 61.8777 60.3819 61.8907 61.128V83.8271L76.0511 91.9931C76.5937 92.3064 77.0177 92.7901 77.2574 93.369C77.497 93.9479 77.5389 94.5897 77.3766 95.1949C77.2142 95.8 76.8567 96.3347 76.3595 96.7159C75.8622 97.0971 75.2531 97.3035 74.6265 97.3032Z"
      fill="currentColor"
    />
    <path
      d="M61.8907 45.0145H56.2002V41.2031H53.1324V35.5134H64.9576V41.2031H61.8907V45.0145Z"
      fill="currentColor"
    />
    <path
      d="M11.8503 65.5471H3"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M104.259 67.8608H114.706"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M98.6478 44.6032L112.148 36.8081"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M82.159 27.2674L85.2242 21.9583"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M59.2112 20.4993V3"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M35.9542 26.1114L32.7143 20.4993"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M18.6185 42.6L7.42517 36.1375"
      stroke="currentColor"
      strokeWidth="4.95626"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);
