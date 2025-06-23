
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Users,
  FileText,
  DollarSign,
  Settings,
  Home,
} from "lucide-react";

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  {
    title: "Visão Geral",
    url: "overview",
    icon: Home,
  },
  {
    title: "Retrospectivas",
    url: "retrospectives",
    icon: FileText,
  },
  {
    title: "Usuários",
    url: "users",
    icon: Users,
  },
  {
    title: "Financeiro",
    url: "financial",
    icon: DollarSign,
  },
  {
    title: "Relatórios",
    url: "reports",
    icon: BarChart3,
  },
  {
    title: "Configurações",
    url: "settings",
    icon: Settings,
  },
];

export function DashboardSidebar({ activeSection, onSectionChange }: DashboardSidebarProps) {
  return (
    <Sidebar className="bg-slate-900/95 backdrop-blur-xl border-r border-white/10">
      <SidebarContent className="bg-slate-900/95">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-bold text-lg px-4 py-6">
            Dashboard Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.url)}
                    isActive={activeSection === item.url}
                    className={`w-full justify-start px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.url
                        ? "bg-white/20 text-white font-semibold shadow-lg"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="text-sm">{item.title}</span>
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
