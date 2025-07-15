'use client';

import { SectionHeader } from '../../SectionHeader/SectionHeader';
import { FeatureBlock } from '../../FeatureBlock/FeatureBlock';
import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import Style from './Benefits.module.scss';

interface Props {}

export function Benefits({}: Props) {
  const isMobile = useIsMobile();

  return (
    <section className={Style.benefits}>
      <Image
        src={isMobile ? '/images/border-top-mb.png' : '/images/border-top.png'}
        width={1550}
        height={50}
        alt='borderTop'
        className='borderTop'
      />

      <div className={Style.content + ' container'}>
        <SectionHeader title='benefits' desc='Manage positions on' />

        <main className={Style.main}>
          <FeatureBlock
            imageSrc='/images/benefits/ib.png'
            title='Interface Builder'
            subtitle='Customize your look'
            desc='Remove the excess, add what you need. 
            Trade at your convenience.'
          />

          <FeatureBlock
            imageSrc='/images/benefits/multi-chart.png'
            title='MultiChart'
            subtitle={
              <>
                Add any trading pairs{' '}
                <span className='subtext'>
                  from different exchanges and analyzecryptocurrency assets on
                  one screen
                </span>
              </>
            }
            reverse
          />

          <FeatureBlock
            imageSrc='/images/benefits/portfolio.png'
            title='Portfolio & Statistics'
            subtitle='Your assets on all connected exchanges are collected in one place'
            desc={
              <>
                Visual statistics of trade. <br /> Uploading reports
              </>
            }
          />
        </main>
      </div>
    </section>
  );
}
