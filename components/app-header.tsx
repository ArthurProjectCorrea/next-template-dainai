'use client';

import { useState } from 'react';
import Link from 'next/link';

import { UserDropdown } from '@/components/user-dropdown';
import Image from 'next/image';

export function SiteHeader() {
  const [isJumping, setIsJumping] = useState(false);

  const handleLogoClick = () => {
    setIsJumping(false);
    setTimeout(() => setIsJumping(true), 0);
  };

  return (
    <header className="bg-gradient-to-r from-[#0e326d] via-[#164b9d] to-[#2b8bd4] text-white sticky top-0 z-50 flex w-full items-center">
      <div className="flex h-20 w-full items-center gap-2 px-5 py-2">
        <div className="flex items-center">
          <Link
            href="/private"
            className="flex items-center justify-center"
            title="Voltar para Início"
          >
            <Image
              id="dainaiLogo"
              src="/logo.svg"
              alt="Dainai"
              width={48}
              height={48}
              className="h-12 w-auto transition-transform hover:rotate-90"
              onClick={handleLogoClick}
            />
          </Link>
        </div>

        <div className="w-[32rem] h-12 flex items-center px-6"></div>

        <div className="relative ml-auto">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
