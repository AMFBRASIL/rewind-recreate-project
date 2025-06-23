
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
    <Sidebar className="bg-white/10 backdrop-blur-md border-white/20">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/80 font-semibold">
            Dashboard Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.url)}
                    isActive={activeSection === item.url}
                    className={`text-white/90 hover:bg-white/20 hover:text-white ${
                      activeSection === item.url
                        ? "bg-white/20 text-white font-semibold"
                        : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
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
