
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FileText, Users, DollarSign, Settings } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    title: "Retrospectivas",
    icon: FileText,
    id: "retrospectives"
  },
  {
    title: "Usuários",
    icon: Users,
    id: "users"
  },
  {
    title: "Financeiro",
    icon: DollarSign,
    id: "financial"
  },
  {
    title: "Configurações",
    icon: Settings,
    id: "settings"
  }
];

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardSidebar({ activeSection, onSectionChange }: DashboardSidebarProps) {
  return (
    <Sidebar className="bg-gradient-to-b from-purple-900 to-blue-900 border-r border-white/10">
      <SidebarHeader className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-white font-semibold">Rewind Admin</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-200 px-4 py-2">Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeSection === item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`text-white hover:bg-white/10 transition-colors w-full justify-start ${
                      activeSection === item.id 
                        ? 'bg-white/20 text-white' 
                        : 'text-purple-100'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
