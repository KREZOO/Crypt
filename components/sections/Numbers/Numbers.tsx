"use client";

import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/breakpoints";
import { StaticCard } from "./StaticCard/StaticCard";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import Image from "next/image";
import Style from "./Numbers.module.scss";

interface Props {}

export function Numbers({}: Props) {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section className={Style.numbers}>
      <Image
        src={isMobile ? "/images/border-top-mb.png" : "/images/border-top.png"}
        width={1550}
        height={50}
        alt="borderTop"
        className="borderTop"
      />

      <div className={Style.bg} />

      <div className={Style.content + " container"}>
        <SectionHeader
          title={t("numbers.header.title")}
          desc={t("numbers.header.desc")}
        />

        <main className={Style.main}>
          <div className={Style.titleWrapper}>
            <div className={Style.title} lang={i18n.language}>
              {t("numbers.title")}
            </div>
            <div className={Style.subtitle} lang={i18n.language}>
              {t("numbers.subtitle")}
            </div>
          </div>

          <div className={Style.stats}>
            <div className={Style.statsTitle + " desc"} lang={i18n.language}>
              {t("numbers.statsTitle")}
            </div>

            <div className={Style.statsCards}>
              <StaticCard
                data={t("numbers.statsCards.card1.data")}
                title={t("numbers.statsCards.card1.title")}
                className={Style.solo}
                lang={i18n.language}
              />
              <StaticCard
                data={t("numbers.statsCards.card2.data")}
                title={t("numbers.statsCards.card2.title")}
                lang={i18n.language}
              />
              <StaticCard
                data={t("numbers.statsCards.card3.data")}
                title={t("numbers.statsCards.card3.title")}
                lang={i18n.language}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
