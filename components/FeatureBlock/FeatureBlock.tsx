'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Style from './FeatureBlock.module.scss';
import cn from 'classnames';
import { useIsMobile } from '@/hooks/breakpoints/useIsMobile';

interface Props {
  title: string;
  subtitle: React.ReactNode;
  desc?: React.ReactNode;
  imageSrc: string;
  reverse?: boolean;
}

export function FeatureBlock({
  title,
  subtitle,
  desc,
  imageSrc,
  reverse = false,
}: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const isMobile = useIsMobile();

  const titleRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && imageWrapperRef.current) {
      const titleHeight = titleRef.current.offsetHeight;
      imageWrapperRef.current.style.height = `${titleHeight}px`;
    }
  }, [title, subtitle, desc, isMobile]);

  return (
    <div className={cn(Style.featureBlock, { [Style.reverse]: reverse })}>
      <div className={Style.imageWrapper} ref={imageWrapperRef}>
        <Image
          src={imageSrc}
          alt={title}
          width={1080}
          height={610}
          className={Style.image}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={Style.titleWrapper} ref={titleRef}>
        {!isMobile && (
          <Image
            src={
              isMobile ? '/images/border-top-mb.png' : '/images/border-top.png'
            }
            width={780}
            height={50}
            alt='borderTop'
            className={cn('borderTop', Style.borderTop)}
          />
        )}

        <h4 className={Style.title} lang={lang}>
          {title}
        </h4>

        <div className={cn(Style.descWrapper, { [Style.onlySubtitle]: !desc })}>
          <div className={Style.subtitle} lang={lang}>
            {subtitle}
          </div>
          {desc && (
            <div className={Style.desc} lang={lang}>
              {desc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
