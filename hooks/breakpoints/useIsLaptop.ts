'use client';

import { useEffect, useState } from 'react';

export function useIsLaptop(breakpoint = 1024) {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const check = () => setIsLaptop(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isLaptop;
}
