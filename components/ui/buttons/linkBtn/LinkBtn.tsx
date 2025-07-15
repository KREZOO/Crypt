import Style from './LinkBtn.module.scss';

import Link from 'next/link';
import { Arrow02Icon, CircleIcon } from '@/components/ui/icons';

interface Props {
  text: string;
  path: string;
}

export function LinkBtn({ text, path }: Props) {
  return (
    <Link href={path} className={Style.btn}>
      {text}

      <div className={Style.iconsWrapper}>
        <div className={Style.arrowWrapper}>
          <Arrow02Icon className={Style.arrow} width={50} height={16} />
        </div>

        <div className={Style.circleWrapper}>
          <CircleIcon className={Style.circle} width={50} height={50} />
        </div>
      </div>
    </Link>
  );
}
