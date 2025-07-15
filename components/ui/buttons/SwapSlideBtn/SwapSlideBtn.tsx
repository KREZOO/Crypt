'use client';

import { forwardRef } from 'react';
import cn from 'classnames';
import Style from './SwapSlideBtn.module.scss';
import { Arrow02Icon } from '../../icons';

interface Props {
  positioning?: 'vertical' | 'horizontal';
  direction?: 'prev' | 'next';
  onClick?: () => void;
}

export const SwapBtn = forwardRef<HTMLButtonElement, Props>(
  ({ positioning = 'horizontal', direction = 'prev', onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(Style.btn, Style[positioning], Style[direction])}
      >
        {direction === 'next' ? (
          <Arrow02Icon className={Style.icon} />
        ) : (
          <Arrow02Icon className={cn(Style.prev, Style.icon)} />
        )}
      </button>
    );
  }
);
