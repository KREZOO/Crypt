import type { Metadata } from "next";

import "@/styles/globals.scss";
import I18nProviderWrapper from "../components/I18nProviderWrapper";

export const metadata: Metadata = {
  title: "Capico",
  description: "Crypto trading platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProviderWrapper>{children}</I18nProviderWrapper>
      </body>
    </html>
  );
}
