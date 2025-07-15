'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Style from './Header.module.scss';
import { SwitchLanguage } from '../../SwitchLanguage/SwitchLanguage';
import { SignInBtn } from '../../ui/buttons/SignInBtn/SignInBtn';
import { LogoIcon } from '../../ui/icons';
import React, { useEffect, useState } from 'react';

interface Props {}

export function Header({}: Props) {
  const { t } = useTranslation(); // ✅ подключаем перевод
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
    <div className={Style.header}>
      <Link href='#' className={Style.logo}>
        <LogoIcon />
      </Link>
      {/* Если не телефон — оставляем SwitchLanguage на месте */}
      {!isPhone && (
        <div className={Style.lang}>
          <SwitchLanguage />
        </div>
      )}
      <div className={`${Style.nav} ${isActive ? Style.active : ''}`}>
        <ul className={Style.menu}>
          <li>
            <Link href='#' className={Style.menuLink}>
              {t('prices')}
            </Link>
          </li>
          <li>
            <Link href='#' className={Style.menuLink}>
              {t('partners')}
            </Link>
          </li>
        </ul>
        {/* Если телефон — рендерим SwitchLanguage здесь */}
        {isPhone && (
          <div className={Style.lang}>
            <SwitchLanguage />
          </div>
        )}
        {/* Кнопка входа рендерится на хэдере, 
        если разрешение до мини-планештного или выше */}
        {isMiniTablet && (
          <div className={`${Style.signIn} ${isActive ? Style.active : ''}`}>
            <div className={Style.signIn}>
              <SignInBtn text={t('signIn')} />
            </div>
          </div>
        )}
      </div>
      {/* Кнопка входа рендерится в меню-бургере, 
      если разрешение мини-планшетное или ниже */}
      {!isMiniTablet && (
        <div className={`${Style.signIn} ${isActive ? Style.active : ''}`}>
          <div className={Style.signIn}>
            <SignInBtn text={t('signIn')} />
          </div>
        </div>
      )}
      <div
        className={`${Style.burger} ${isActive ? Style.active : ''}`}
        onClick={handleBurgerClick}
      >
        <span></span>
      </div>
    </div>
  );
}

export default Header;
