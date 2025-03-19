import { LucideIcon, LayoutDashboard, Layers, Weight } from "lucide-react";

export interface SidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  item?: SubItem[];
}

export interface SubItem {
  name: string;
  path: string;
}

export const items: SidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Generator Text",
    path: "/generator",
    icon: Layers,
  },
  {
    name: "Mass Converter",
    path: "/converter",
    icon: Weight,
  },
];
