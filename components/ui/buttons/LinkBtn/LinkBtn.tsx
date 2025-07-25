import Style from './LinkBtn.module.scss';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Arrow02Icon, CircleIcon } from '@/components/ui/icons';

interface Props {
  text: string;
  path: string;
}

export function LinkBtn({ text, path }: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Link href={path} className={Style.btn} lang={lang}>
      {text}

      <div className={Style.iconsWrapper}>
        <div className={Style.arrowWrapper} lang={lang}>
          <Arrow02Icon className={Style.arrow} width={50} height={16} />
        </div>

        <div className={Style.circleWrapper} lang={lang}>
          <CircleIcon className={Style.circle} width={50} height={50} />
        </div>
      </div>
    </Link>
  );
}
