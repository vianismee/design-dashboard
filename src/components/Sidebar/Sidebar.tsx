"use client";

import {
  LucideIcon,
  LayoutDashboard,
  Layers,
  Weight,
  PencilRuler,
} from "lucide-react";
import Image from "next/image";
import Item from "./Item";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface SidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  item?: SubItem[];
}

interface SubItem {
  name: string;
  path: string;
}

const items: SidebarItem[] = [
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
  {
    name: "Size Chart",
    path: "/sizechart",
    icon: PencilRuler,
  },
];

export default function Sidebar() {
  return (
    <div className="w-full flex flex-col gap-[5%] px-3 py-5 h-full">
      <header className="h-[10%] flex items-center justify-center">
        <div className="h-full">
          <Image
            src={"/kitoshindologo.svg"}
            alt="kitoshindo logo"
            height={100}
            width={150}
          />
        </div>
      </header>
      <main className="h-[70%] p-2 flex flex-col gap-2">
        {items.map((item) => (
          <Item item={item} key={item.path} />
        ))}
      </main>
      <footer className="h-[20%] flex flex-col justify-center px-3 items-center">
        <div className="font-medium flex items-center gap-3 justify-center">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/104370516?s=96&v=4" />
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
          <h1>Design Team</h1>
        </div>
      </footer>
    </div>
  );
}
