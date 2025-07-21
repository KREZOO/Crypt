'use client';

import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../../SectionHeader/SectionHeader';
import { FeatureBlock } from '../../FeatureBlock/FeatureBlock';
import { useIsMobile } from '@/hooks/breakpoints';
import Image from 'next/image';
import Style from './Benefits.module.scss';

interface Props {}

export function Benefits({}: Props) {
  const { t } = useTranslation();
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
        <SectionHeader title={t('benefits')} desc={t('managePos')} />

        <main className={Style.main}>
          <FeatureBlock
            imageSrc='/images/benefits/ib.png'
            title={t('featureBlock1Title')}
            subtitle={t('featureBlock1Subtitle')}
            desc={t('featureBlock1Desc')}
          />

          <FeatureBlock
            imageSrc='/images/benefits/multi-chart.png'
            title={t('featureBlock2Title')}
            subtitle={
              <>
                {t('featureBlock2SubtitlePt1')}{' '}
                <span className='subtext'>{t('featureBlock2SubtitlePt2')}</span>
              </>
            }
            reverse
          />

          <FeatureBlock
            imageSrc='/images/benefits/portfolio.png'
            title={t('featureBlock3Title')}
            subtitle={t('featureBlock3Subtitle')}
            desc={
              <>
                {t('featureBlock3DescPt1')} <br /> {t('featureBlock3DescPt2')}
              </>
            }
          />
        </main>
      </div>
    </section>
  );
}
