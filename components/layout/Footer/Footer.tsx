'use client';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Style from './Footer.module.scss';
import {
  LogoIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  TelegramIcon,
} from '../../ui/icons';
import { PAGES } from '@/config/pages.config';

interface Props {}

export function Footer({}: Props) {
  const { t } = useTranslation();

  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        <div className={cn(Style.column, Style.columnLogo)}>
          <Link href={PAGES.HOME} className={Style.logo}>
            <LogoIcon />
          </Link>
          <span className={Style.copyright}>© 2022 Capico ltd.</span>
        </div>
        <div className={cn(Style.column, Style.columnSocials)}>
          <div className={Style.socialsWrap}>
            <span className={Style.socialsTitle}>
              {t('socialsTitle')}
              <br></br>
              {t('networks')}
            </span>
            <div className={Style.socials}>
              <Link href='#' className={Style.linkLogo}>
                <TwitterIcon />
              </Link>
              <Link href='#' className={Style.linkLogo}>
                <FacebookIcon />
              </Link>
              <Link href='#' className={Style.linkLogo}>
                <YoutubeIcon />
              </Link>
              <div className={Style.tgChat}>
                <Link href='#' className={Style.linkLogo}>
                  <TelegramIcon />
                </Link>
                <span className={Style.tgDesc1}>{t('tgDesc1')}</span>
              </div>
              <div className={Style.tgChannel}>
                <Link href='#' className={Style.tgChannel}>
                  <TelegramIcon />
                </Link>
                <span className={Style.tgDesc2}>{t('tgDesc2')}</span>
              </div>
            </div>
          </div>
          <span>
            <Link href='#' className={Style.info}>
              info@capico.app
            </Link>
          </span>
        </div>
        <div className={Style.column}>
          <span className={Style.listsTitle}>{t('documents')}</span>
          <ul>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('documentsLink1')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('documentsLink2')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('documentsLink3')}
              </Link>
            </li>
          </ul>
        </div>
        <div className={Style.column}>
          <span className={Style.listsTitle}>{t('platform')}</span>
          <ul>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink1')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink2')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink3')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink4')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink5')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink6')}
              </Link>
            </li>
            <li className={Style.linkCl}>
              <Link href='#' className={Style.linkClInner}>
                {t('platformLink7')}
              </Link>
            </li>
          </ul>
        </div>
        <div className={Style.column}>
          <Link href='/signup' className={Style.signInFooter}>
            {t('signIn')}
          </Link>
          <Link href='/signup' className={Style.signInFooter}>
            {t('createAccount')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
