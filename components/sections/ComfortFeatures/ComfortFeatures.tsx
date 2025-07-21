'use client';

import Image from 'next/image';
import { useIsMobile } from '@/hooks/breakpoints/useIsMobile';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import cn from 'classnames';

import Style from './ComfortFeatures.module.scss';
import { CFSlider } from '@/components/sliders/CFSlider/CFSlider';

interface Props {}

export function ComfortFeatures({}: Props) {
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
            title='Everything for your comfortable work'
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
