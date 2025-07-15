'use client';

import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { SwapBtn } from '@/components/ui/buttons/SwapSlideBtn/SwapSlideBtn';
import cn from 'classnames';

import Style from './ComfortFeatures.module.scss';

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

      <div className={cn(Style.content, 'container')}>
        <SectionHeader
          title='Everything for your comfortable work'
          titleGradient
          titleSize='md'
        />

        <main className={Style.main}>
          <div className='btnWrapper'>
            <SwapBtn />
          </div>
        </main>
      </div>
    </section>
  );
}
