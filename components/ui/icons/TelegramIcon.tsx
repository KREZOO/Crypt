import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const TelegramIcon: React.FC<IconProps> = ({
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
      d="M0.554199 21.7911C0.554199 33.3945 9.96062 42.8009 21.564 42.8009C33.1674 42.8009 42.5738 33.3945 42.5738 21.7911C42.5738 10.1877 33.1674 0.78125 21.564 0.78125C9.96062 0.78125 0.554199 10.1877 0.554199 21.7911ZM17.7121 31.4207L18.0695 26.0652L18.0692 26.0649L27.8116 17.2732C28.2392 16.8937 27.7182 16.7087 27.1506 17.0529L15.1272 24.6383L9.93378 23.0173C8.81222 22.6739 8.80417 21.9032 10.1856 21.3492L30.4233 13.5456C31.3476 13.126 32.2397 13.7676 31.8869 15.1823L28.4404 31.4234C28.1997 32.5775 27.5024 32.8535 26.5362 32.3204L21.2861 28.4416L18.7626 30.8954C18.7546 30.9032 18.7467 30.9109 18.7388 30.9186C18.4566 31.1933 18.2231 31.4207 17.7121 31.4207Z"
      fill="currentColor"
    />
  </svg>
);
