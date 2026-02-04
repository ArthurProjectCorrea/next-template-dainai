'use client';

import { usePathname } from 'next/navigation';

export function useActiveRoute() {
  const pathname = usePathname();

  const isActive = (url: string): boolean => {
    if (url === '#') return false;
    return pathname === url || pathname.startsWith(url + '/');
  };

  return { isActive };
}
