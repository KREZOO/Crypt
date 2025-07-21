import { useIsMobile } from '@/hooks/breakpoints';
import Image from 'next/image';

import Style from './Slide.module.scss';

interface Props {
  title: string;
  desc: string;
  imageSrc: string;
}

export function Slide({ title, desc, imageSrc }: Props) {
  const isMobile = useIsMobile();

  return (
    <div className={Style.slide}>
      <header className={Style.header}>
        <div className={Style.title}>{title}</div>

        <Image
          src={imageSrc}
          alt={title}
          width={isMobile ? 60 : 120}
          height={110}
        />
      </header>

      <div className={Style.desc}>{desc}</div>
    </div>
  );
}
