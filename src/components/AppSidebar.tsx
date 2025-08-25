import { useState } from 'react';
import { Home, Server, Users, Menu, Hash, Rss, Settings, Twitter, Mail } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', icon: Home, href: '/', active: true },
  { name: 'Servers', icon: Server, href: '/servers' },
  { name: 'Clients', icon: Users, href: '/clients' },
  { name: 'Categories', icon: Menu, href: '/categories' },
  { name: 'Tags', icon: Hash, href: '/tags' },
  { name: 'Feed', icon: Rss, href: '/feed' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/chatmcp' },
  { name: 'Email', icon: Mail, href: 'mailto:support@mcp.so' },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="border-r">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <a className="flex items-center gap-2" href="/">
              <img 
                alt="MCP.so" 
                width={28} 
                height={28}
                className="rounded-md w-8 h-8"
                src="https://mcp.so/_next/image?url=%2Flogo.png&w=64&q=75"
              />
              <span className="text-base font-semibold flex-1">MCP.so</span>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild
                    isActive={item.active}
                    className="w-full"
                  >
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex justify-center items-center h-full px-4 py-4">
          <Button className="w-full">Sign In</Button>
        </div>
        
        <div className="w-full flex items-center justify-center mx-auto gap-x-4 px-0 py-4 border-t">
          {socialLinks.map((link) => (
            <div key={link.name} className="cursor-pointer hover:text-primary">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <link.icon className="text-xl h-4 w-4" />
              </a>
            </div>
          ))}
          <SidebarSeparator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-x-2 px-2">
            <div className="w-4 h-4 bg-gray-400 rounded-sm" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}