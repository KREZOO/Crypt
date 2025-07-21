'use client';

import { useIsMobile } from '@/hooks/breakpoints/useIsMobile';
import { StaticCard } from './StaticCard/StaticCard';
import { SectionHeader } from '../../SectionHeader/SectionHeader';
import Image from 'next/image';
import Style from './Numbers.module.scss';

interface Props {}

export function Numbers({}: Props) {
  const isMobile = useIsMobile();

  return (
    <section className={Style.numbers}>
      <Image
        src={isMobile ? '/images/border-top-mb.png' : '/images/border-top.png'}
        width={1550}
        height={50}
        alt='borderTop'
        className='borderTop'
      />

      <div className={Style.bg} />

      <div className={Style.content + ' container'}>
        <SectionHeader title='numbers' desc='Manage positions on' />

        <main className={Style.main}>
          <div className={Style.titleWrapper}>
            <div className={Style.title}>$18.5 B+</div>
            <div className={Style.subtitle}>Total trading volume</div>
          </div>

          <div className={Style.stats}>
            <div className={Style.statsTitle + ' desc'}>
              Actual statistic on 19.07.2022
            </div>

            <div className={Style.statsCards}>
              <StaticCard
                data='36М+'
                title='We are online'
                className={Style.solo}
              />
              <StaticCard data='21.5 K+' title='Traiders in platform' />
              <StaticCard data='325 M+' title='Total deals in platform' />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
