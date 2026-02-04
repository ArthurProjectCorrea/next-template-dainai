'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroup,
} from '@/components/ui/sidebar';
import { getIcon } from '@/lib/icons';
import { useActiveRoute } from '@/hooks/use-active-route';
import sidebarData from '@/database/sidebar.json';

type SidebarSubItem = {
  title: string;
  url: string;
  icon: string;
};

type SidebarItem = {
  title: string;
  url: string;
  icon: string;
  action?: string;
  items?: SidebarSubItem[];
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isActive } = useActiveRoute();
  const [currentMenu, setCurrentMenu] = React.useState<'main' | 'admin'>(
    'main',
  );

  const data = sidebarData as unknown as {
    main: SidebarItem[];
    admin: SidebarItem[];
  };

  const menuItems = currentMenu === 'main' ? data.main : data.admin;

  const handleMenuAction = (action?: string) => {
    if (action === 'openAdmin') {
      setCurrentMenu('admin');
    } else if (action === 'goBack') {
      setCurrentMenu('main');
    }
  };

  return (
    <Sidebar
      className="top-20 h-[calc(100svh-20)]!"
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = getIcon(item.icon);
              const active = isActive(item.url);
              const isAction =
                item.action === 'openAdmin' || item.action === 'goBack';
              const hasSubItems = item.items && item.items.length > 0;

              if (isAction) {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={false}
                      onClick={() => handleMenuAction(item.action)}
                      className="cursor-pointer"
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }

              if (hasSubItems) {
                return (
                  <Collapsible
                    key={item.title}
                    defaultOpen={false}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <IconComponent className="h-5 w-5" />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => {
                            const SubIconComponent = getIcon(subItem.icon);
                            const subActive = isActive(subItem.url);

                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={subActive}
                                >
                                  <Link href={subItem.url}>
                                    <SubIconComponent className="h-4 w-4" />
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={active}>
                    <Link href={item.url}>
                      <IconComponent className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
