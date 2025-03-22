// app/components/sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  FileText,
  CheckSquare,
  ListOrdered,
  Settings,
  User,
} from "lucide-react";
import { useAccount } from "wagmi";
import WalletConnectButton from "./wallet-connect-button";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  propertyAddress?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ propertyAddress = "xxxx" }) => {
  const pathname = usePathname();
  const { isConnected } = useAccount();

  const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
    {
      label: "Proposals",
      href: "/proposals",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      label: "Voted",
      href: "/voted",
      icon: <CheckSquare className="h-5 w-5" />,
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: <ListOrdered className="h-5 w-5" />,
    },
    {
      label: "Manage",
      href: "/manage",
      icon: <Settings className="h-5 w-5" />,
    },
    { label: "Profile", href: "/profile", icon: <User className="h-5 w-5" /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 p-6 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="mb-8">
        <Link href="/">
          <div className="bg-black text-white h-16 flex items-center justify-center text-xl font-bold">
            CommonFloor
          </div>
        </Link>
      </div>

      {isConnected && (
        <>
          {/* Property Address */}
          <div className="mb-8 flex items-center justify-between">
            <span className="text-gray-700 font-medium">
              Address: {propertyAddress}
            </span>
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
                      pathname === item.href
                        ? "bg-gray-200 font-medium"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      {!isConnected && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-6 bg-gray-200 rounded-lg">
            <p className="text-gray-600 mb-4">
              Please connect your wallet to access the body corporate DAO
              features.
            </p>
            {/* Wallet Connect Section */}
            <div className="mb-8">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
