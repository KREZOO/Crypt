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

export const SwapSlideBtn = forwardRef<HTMLButtonElement, Props>(
  ({ positioning = 'vertical', direction = 'next', onClick }, ref) => {
    const positioningClass =
      positioning === 'horizontal' ? Style.horizontal : Style.vertical;

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(Style.btn, positioningClass, Style[direction])}
      >
        {direction === 'next' ? (
          <Arrow02Icon />
        ) : (
          <Arrow02Icon className={Style.prev} />
        )}
      </button>
    );
  }
);
