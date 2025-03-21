// @/components/Dashboard/Header.tsx
"use client";

import { useState } from "react";
import { Bell, Menu, User, ChevronDown } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-4 shadow-sm">
      {/* Left: Mobile menu button */}
      <div className="flex items-center lg:hidden">
        <button
          className="rounded p-1 hover:bg-gray-100"
          onClick={toggleSidebar}
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop breadcrumb */}
      <div className="hidden lg:flex">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      {/* Right: User menu & notifications */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <div className="relative">
          <button
            className="relative rounded p-1 hover:bg-gray-100"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-4 py-2 border-b">
                <h3 className="text-sm font-medium">Notifications</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  <p className="text-sm font-medium">New proposal created</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  <p className="text-sm font-medium">Voting ends in 2 hours</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  <p className="text-sm font-medium">
                    Maintenance proposal approved
                  </p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </a>
              </div>
              <a
                href="#"
                className="block border-t px-4 py-2 text-center text-xs text-blue-600"
              >
                View all notifications
              </a>
            </div>
          )}
        </div>

        {/* User menu */}
        <div className="relative">
          <button
            className="flex items-center rounded-full text-sm focus:outline-none"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            aria-label="User menu"
          >
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="ml-2 hidden md:flex items-center">
              <span className="mr-1">John Doe</span>
              <ChevronDown size={16} />
            </span>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Wallet Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Help
              </a>
              <div className="border-t border-gray-100"></div>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
