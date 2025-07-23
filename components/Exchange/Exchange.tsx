import { ComponentType } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Style from './Exchange.module.scss';

interface Props {
  Icon: ComponentType<any>;
  path: string;
  soon?: boolean;
}

export function Exchange({ Icon, path, soon }: Props) {
  const { t } = useTranslation();

  return (
    <Link href={path} className={Style.exchange} target='_blank'>
      <Icon />

      {soon && <span className={Style.soon}>{t('soon')}</span>}
    </Link>
  );
}
