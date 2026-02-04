'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronsUpDown, LogOut, Settings } from 'lucide-react';
import user from '@/database/user.json';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function UserDropdown() {
  const router = useRouter();

  async function handleLogout() {
    // Faz chamada para remover o cookie de autenticação
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/auth/login');
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex items-center space-x-3 px-3 py-3 rounded-xl transition-all h-12">
          <div className="text-right hidden sm:block leading-tight w-36 h-5">
            <p className="text-sm font-semibold tracking-wide hover:underline hover:underline-offset-4">
              Olá, {user.name}
            </p>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={'bottom'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal"></DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="#"
              className="flex items-center px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors border-b border-gray-50"
            >
              <Settings className="w-5 opacity-40 mr-2" />
              <span>Configurar Conta</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className="flex items-center px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors border-b border-gray-50"
          >
            <LogOut className="w-5 opacity-40 mr-2" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
