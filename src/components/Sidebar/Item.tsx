"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

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

export default function Item({ item }: { item: SidebarItem }) {
  const { name, path, icon: Icon } = item;

  const pathname = usePathname();
  const isActive = useMemo(() => {
    return pathname === path;
  }, [path, pathname]);

  return (
    <div key={path} className="">
      <Link href={path}>
        <div
          className={`flex px-3 py-2 rounded-[10px] hover:bg-sky-200/50 ${
            isActive &&
            `bg-linear-to-r from-sky-500 to-sky-800 text-white hover:text-white`
          }`}
        >
          <div className="flex gap-2 item-center">
            <Icon /> <h1 className="font-semibold">{name}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
