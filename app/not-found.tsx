'use client';

import { useTranslation } from 'react-i18next';
import { useIsTablet } from '@/hooks/breakpoints';
import cn from 'classnames';

import { LinkBtn } from '@/components/ui/buttons/LinkBtn/LinkBtn';
import { PAGES } from '@/config/pages.config';

import Style from './not-found.module.scss';

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const isTablet = useIsTablet();

  return (
    <main className={Style.page}>
      <div className={Style.bg} lang={lang} />

      <div className='container'>
        {isTablet && (
          <h2 className={Style.title} lang={lang}>
            {t('notFound.title')}
          </h2>
        )}

        <div className={Style.content} lang={lang}>
          <h2
            className={cn(Style.title, { [Style.hide]: isTablet })}
            lang={lang}
          >
            {t('notFound.title')}
          </h2>

          <div className={Style.desc} lang={lang}>
            {t('notFound.desc')}
          </div>

          <LinkBtn text={t('mainPage')} path={PAGES.HOME} />
        </div>
      </div>
    </main>
  );
}
