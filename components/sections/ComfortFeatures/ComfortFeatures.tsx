'use client';

import { useIsMobile } from '@/hooks/breakpoints';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import Style from './ComfortFeatures.module.scss';
import { CFSlider } from '@/components/sliders/CFSlider/CFSlider';

interface Props {}

export function ComfortFeatures({}: Props) {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section className={Style.comfortFeatures}>
      <Image
        src={isMobile ? '/images/border-top-mb.png' : '/images/border-top.png'}
        width={1550}
        height={50}
        alt='borderTop'
        className='borderTop'
      />

      <div className='container'>
        <div className={Style.wrapper}>
          <SectionHeader
            title={t('comfortFeatures.title')}
            titleGradient
            titleSize='md'
          />

          <main className={Style.main}>
            <CFSlider />
          </main>
        </div>
      </div>
    </section>
  );
}
