'use client';

import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../../SectionHeader/SectionHeader';
import { FeatureBlock } from '../../FeatureBlock/FeatureBlock';
import { useIsMobile } from '@/hooks/breakpoints';
import Image from 'next/image';
import Style from './Benefits.module.scss';

interface Props {}

export function Benefits({}: Props) {
  const { t, i18n } = useTranslation();
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
        <SectionHeader title={t('benefits.title')} desc={t('benefits.desc')} />

        <main className={Style.main}>
          <FeatureBlock
            imageSrc='/images/benefits/ib.png'
            title={t('benefits.features.block1.title')}
            subtitle={t('benefits.features.block1.subtitle')}
            desc={t('benefits.features.block1.desc')}
          />

          <FeatureBlock
            imageSrc='/images/benefits/multi-chart.png'
            title={t('benefits.features.block2.title')}
            subtitle={
              <>
                {t('benefits.features.block2.subtitlePt1')}{' '}
                <span className='subtext'>
                  {t('benefits.features.block2.subtitlePt2')}
                </span>
              </>
            }
            reverse
          />

          <FeatureBlock
            imageSrc='/images/benefits/portfolio.png'
            title={t('benefits.features.block3.title')}
            subtitle={t('benefits.features.block3.subtitle')}
            desc={
              <>
                {t('benefits.features.block3.descPt1')} <br />{' '}
                {t('benefits.features.block3.descPt2')}
              </>
            }
          />
        </main>
      </div>
    </section>
  );
}
