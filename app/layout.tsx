import type { Metadata } from 'next';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

import I18nProviderWrapper from '../providers/I18nProviderWrapper';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Capico',
  description: 'Crypto trading platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <I18nProviderWrapper>
        <body className='page'>
          <Header />
          {children}
          <Footer />
        </body>
      </I18nProviderWrapper>
    </html>
  );
}
