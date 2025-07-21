"use client";

import { useTranslation } from "react-i18next";
import { LinkBtn } from "@/components/ui/buttons/linkBtn/LinkBtn";
import { PAGES } from "@/config/pages.config";
import {
  Exchange1Icon,
  Exchange2Icon,
  Exchange3Icon,
  Exchange4Icon,
  Exchange5Icon,
  Exchange6Icon,
} from '@/components/ui/icons';

import Style from './Hero.module.scss';
import Link from 'next/link';

interface Props {}

export function Hero({}: Props) {
  const { t } = useTranslation();
  const exchanges: { Icon: any; path: string; soon: boolean }[] = [
    { Icon: Exchange1Icon, path: PAGES.EXCHANGES[0], soon: false },
    { Icon: Exchange2Icon, path: PAGES.EXCHANGES[1], soon: false },
    { Icon: Exchange3Icon, path: PAGES.EXCHANGES[2], soon: false },
    { Icon: Exchange4Icon, path: PAGES.EXCHANGES[3], soon: false },
    { Icon: Exchange5Icon, path: PAGES.EXCHANGES[4], soon: false },
    { Icon: Exchange6Icon, path: PAGES.EXCHANGES[5], soon: true },
  ];

  return (
    <section className={Style.hero}>
      <div className={Style.content + ' container'}>
        <header className={Style.header}>
          <h1 className="h1">
            {t("heroTitle")} {""}
            <div className={Style.subtitle}>{t("heroSubTitle")}</div>
          </h1>

          <LinkBtn text={t("signUp")} path={PAGES.SIGN_UP} />
        </header>

        <footer className={Style.footer}>
          <div className={Style.exchangesTitle}>{t("exchangesTitle")}</div>

          <div className={Style.exchanges}>
            {exchanges.map(({ Icon, path, soon }, index) => (
              <Link
                href={path}
                key={index}
                className='exchange'
                target='_blank'
              >
                <Icon />

                {soon && <span className='soon'>Soon</span>}
              </Link>
            ))}
          </div>
        </footer>
      </div>

      <div className={Style.bg} />
    </section>
  );
}
