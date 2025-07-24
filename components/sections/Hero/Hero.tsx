'use client';

import { useTranslation } from 'react-i18next';
import { LinkBtn } from '@/components/ui/buttons/LinkBtn/LinkBtn';
import { Exchange } from '@/components/Exchange/Exchange';
import { PAGES } from '@/config/pages.config';
import {
  Exchange1Icon,
  Exchange2Icon,
  Exchange3Icon,
  Exchange4Icon,
  Exchange5Icon,
  Exchange6Icon,
} from '@/components/ui/icons';

import Style from './Hero.module.scss';

interface Props {}

export function Hero({}: Props) {
  const { t, i18n } = useTranslation();
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
          <h1 className='h1' lang={i18n.language}>
            {t('hero.title')} {''}
            <div className={Style.subtitle}>{t('hero.subtitle')}</div>
          </h1>

          <LinkBtn text={t('signUp')} path={PAGES.SIGN_UP} />
        </header>

        <footer className={Style.footer}>
          <div className={Style.exchangesTitle}>{t('hero.exchangesTitle')}</div>

          <div className={Style.exchanges}>
            {exchanges.map(({ Icon, path, soon }, index) => (
              <Exchange key={index} Icon={Icon} path={path} soon={soon} />
            ))}
          </div>
        </footer>
      </div>

      <div className={Style.bg} />
    </section>
  );
}
