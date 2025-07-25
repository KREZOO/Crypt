'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { SwitchLanguage } from '../../SwitchLanguage/SwitchLanguage';
import { SignInBtn } from '../../ui/buttons/SignInBtn/SignInBtn';
import { LogoIcon } from '../../ui/icons';
import { PAGES } from '@/config/pages.config';

import Style from './Header.module.scss';

interface Props {}

export function Header({}: Props) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMiniTablet, setIsMiniTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const checkWidth = () => {
      setIsTablet(window.innerWidth <= 768);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const checkWidth = () => {
      setIsMiniTablet(window.innerWidth <= 570);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const checkWidth = () => {
      setIsPhone(window.innerWidth <= 425);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <header className={Style.header}>
      <Link href={PAGES.HOME} className={Style.logo}>
        <LogoIcon />
      </Link>
      {/* Если не телефон — оставляем SwitchLanguage на месте */}
      {!isPhone && (
        <div className={Style.lang}>
          <SwitchLanguage />
        </div>
      )}
      <div className={`${Style.nav} ${isActive ? Style.active : Style.hidden}`}>
        <ul className={Style.menu}>
          <li>
            <Link
              href='/prices'
              className={cn(Style.menuLink, { [Style.hidden]: !isActive })}
            >
              {t('prices')}
            </Link>
          </li>
          <li>
            <Link
              href='/partners'
              className={cn(Style.menuLink, { [Style.hidden]: !isActive })}
            >
              {t('partners')}
            </Link>
          </li>
        </ul>
        {/* Если телефон — рендерим SwitchLanguage здесь */}
        {isPhone && (
          <div className={cn(Style.lang, { [Style.hidden]: !isActive })}>
            <SwitchLanguage />
          </div>
        )}
        {/* Кнопка входа рендерится на хэдере, 
        если разрешение до мини-планештного или выше */}
        {isMiniTablet && (
          <div className={`${Style.signIn} ${isActive ? Style.active : ''}`}>
            <div className={cn(Style.signIn, { [Style.hidden]: !isActive })}>
              <SignInBtn text={t('signIn')} path={PAGES.SIGN_UP} />
            </div>
          </div>
        )}
      </div>
      {/* Кнопка входа рендерится в меню-бургере, 
      если разрешение мини-планшетное или ниже */}
      {!isMiniTablet && (
        <div className={`${Style.signIn} ${isActive ? Style.active : ''}`}>
          <div className={Style.signIn}>
            <SignInBtn text={t('signIn')} path={PAGES.SIGN_UP} />
          </div>
        </div>
      )}
      <div
        className={`${Style.burger} ${isActive ? Style.active : ''}`}
        onClick={handleBurgerClick}
      >
        <span></span>
      </div>
    </header>
  );
}

export default Header;
