import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const CurrencyIcon: React.FC<IconProps> = ({
  width = "94",
  height = "94",
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 94 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.5572 33.646C71.9282 34.4621 72.2992 35.2931 72.6553 36.124C83.1311 60.8 80.0744 85.6688 65.9632 91.6783C51.8521 97.6878 31.8353 82.5528 21.3447 57.8768C20.4396 55.7401 19.6383 53.5886 18.9261 51.4519M53.6772 9.2668C58.8127 13.7188 63.2274 18.9394 66.7645 24.7431M16.2403 41.0651C12.8424 22.7696 17.1158 6.93721 28.1109 2.32253C33.6011 -0.0219142 39.9815 0.838687 46.3323 4.20696M28.3038 26.2269C27.6658 26.8798 27.0426 27.5475 26.4194 28.2152C8.34645 48.0242 2.90081 72.4776 14.2669 82.8496C20.3209 88.3694 29.9361 88.7848 40.3228 84.9714M47.7419 81.5883C55.1812 77.4511 61.8847 72.1114 67.5806 65.7856C85.6536 45.9766 91.0992 21.5232 79.7331 11.1512C70.3999 2.6341 52.6237 6.26947 36.5539 18.8078M84.8375 67.7739C88.7543 65.2034 91.5491 61.2418 92.6572 56.6897C95.7287 42.2076 77.819 26.1378 52.594 20.7961C39.0319 17.9175 26.1226 18.7336 16.6261 22.2799M9.16253 26.2269C5.24573 28.7974 2.45087 32.759 1.3428 37.311C-1.72872 51.7932 16.181 67.863 41.406 73.2047C54.9682 76.0833 67.8774 75.2672 77.3739 71.7209"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.72 35.1999H36.72V38.1999H46.68V44.0105C37.3552 44.1607 30 45.8895 30 47.9999C30 50.1104 37.3552 51.8392 46.68 51.9893V61.9999H49.72V51.9819C58.8543 51.7895 66 50.0802 66 47.9999C66 45.9197 58.8543 44.2104 49.72 44.018V38.1999H59.72V35.1999ZM46.68 46.0108C42.3473 46.0823 38.502 46.5025 35.7059 47.1239C34.4555 47.4018 33.485 47.7048 32.7969 47.9999C33.485 48.295 34.4555 48.5981 35.7059 48.876C38.502 49.4973 42.3473 49.9175 46.68 49.9891V46.0108ZM49.72 49.9815V46.0184C53.8892 46.1085 57.5844 46.5217 60.2941 47.1239C61.5445 47.4018 62.515 47.7048 63.2031 47.9999C62.515 48.295 61.5445 48.5981 60.2941 48.876C57.5844 49.4781 53.8892 49.8914 49.72 49.9815Z"
      fill="currentColor"
    />
    <defs>
      <linearGradient
        id="paint0_linear_151_179"
        x1="47"
        y1="1"
        x2="47"
        y2="92.9947"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A2FED" />
        <stop offset="1" stopColor="#C67EFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_151_179"
        x1="48"
        y1="35.2"
        x2="48"
        y2="61.9999"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A2FED" />
        <stop offset="1" stopColor="#C67EFF" />
      </linearGradient>
    </defs>
  </svg>
);
