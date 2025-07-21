'use client';

import { useTranslation } from "react-i18next";
import { useIsMobile } from '@/hooks/breakpoints';
import { StaticCard } from "./StaticCard/StaticCard";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import Image from "next/image";
import Style from "./Numbers.module.scss";

interface Props {}

export function Numbers({}: Props) {
  const { t } = useTranslation();
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

      <div className={Style.content + " container"}>
        <SectionHeader title={t("nubers")} desc={t("managePos")} />

        <main className={Style.main}>
          <div className={Style.titleWrapper}>
            <div className={Style.title}>{t("tradingVolume")}</div>
            <div className={Style.subtitle}>{t("tradingVolumeDesc")}</div>
          </div>

          <div className={Style.stats}>
            <div className={Style.statsTitle + " desc"}>
              {t("actualStatistic")}
            </div>

            <div className={Style.statsCards}>
              <StaticCard
                data={t("staticCard1Number")}
                title={t("staticCard1Desc")}
                className={Style.solo}
              />
              <StaticCard
                data={t("staticCard2Number")}
                title={t("staticCard2Desc")}
              />
              <StaticCard
                data={t("staticCard3Number")}
                title={t("staticCard3Desc")}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
