'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Style from './FeatureBlock.module.scss';
import cn from 'classnames';
import { useIsMobile } from '@/hooks/useIsMobile';

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

        <h4 className={Style.title}>{title}</h4>

        <div className={cn(Style.descWrapper, { [Style.onlySubtitle]: !desc })}>
          <div className={Style.subtitle}>{subtitle}</div>
          {desc && <div className={Style.desc}>{desc}</div>}
        </div>
      </div>
    </div>
  );
}
