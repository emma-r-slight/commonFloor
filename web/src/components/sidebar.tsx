// app/components/sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  FileText,
  Building,
  DollarSign,
  Settings,
  User,
} from "lucide-react";

import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  propertyAddress?: string;
};

const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Dashboard", href: "/", icon: <LayoutGrid className="h-5 w-5" /> },
    {
      label: "Proposals",
      href: "/proposals",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      label: "Treasury",
      href: "/treasury",
      icon: <Building className="h-5 w-5" />,
    },
    {
      label: "Investment",
      href: "/investment",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: "Manage",
      href: "/manage",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="w-64 h-screen bg-white p-4 flex flex-col fixed left-0 top-0 border-r border-gray-200">
      {/* Logo */}
      <div className="mb-10 px-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/CommonFloor.svg"
            alt="CommonFloor"
            width={122}
            height={40}
          />
        </Link>
      </div>
      <>
        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-md transition-colors ${
                      isActive
                        ? "text-teal-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: `h-5 w-5 ${
                        isActive ? "text-teal-600" : "text-gray-500"
                      }`,
                    })}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile at Bottom */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <Link
            href="/profile"
            className={`flex items-center gap-3 py-2.5 px-3 rounded-md ${
              pathname === "/profile"
                ? "text-teal-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <User
                className={`h-5 w-5 ${
                  pathname === "/profile" ? "text-teal-600" : "text-gray-500"
                }`}
              />
            </div>
            <span>Jane Dow</span>
          </Link>
        </div>
      </>
      )
    </div>
  );
};

export default Sidebar;
