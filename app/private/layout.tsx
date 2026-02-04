import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/app-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:3.5rem]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col p-6 md:p-10 overflow-auto">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
