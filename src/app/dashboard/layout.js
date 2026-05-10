"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuFold4Line, RiRobot2Fill } from "react-icons/ri";
import { FaHome, FaUpload } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function DashboardLayout({ children }) {

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" , icon: <FaHome />},
    { name: "Projects", href: "/dashboard/projects" ,icon: <GoProjectSymlink />},
    { name: "Uploads", href: "/dashboard/uploads" , icon: <FaUpload />},
    { name: "Settings", href: "/dashboard/settings" , icon: <IoSettingsSharp />},
    { name: "AI Assistant", href: "/dashboard/ai-assistant" , icon: <RiRobot2Fill />},
  ];

  return (
    <div className="flex min-h-screen">

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-black text-white px-3 py-2 rounded"
      >
       <RiMenuFold4Line size={24} />
      </button>

      
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

  
      <aside
        className={`fixed top-0 left-0 z-50 md:z-0 h-screen w-64 md:static md:translate-x-0 bg-black text-white p-5 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-4 md:hidden text-xl hover:text-red-500 transition-colors"
        >
         <ImCross />
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-10">
          Dashboard
        </h1>

        {/* NAV LINKS */}
        <nav className="flex flex-col gap-3">

          {navLinks.map((link) => {

            let isActive = false;

            if (link.href === "/dashboard") {
              isActive = pathname === "/dashboard";
            } else {
              isActive = pathname.startsWith(link.href);
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-green-600 text-white font-semibold"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                <div className="flex items-center">
                     {link.icon}
                <span className="ml-3">{link.name}</span>
                </div>
               
              </Link>
            );
          })}

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-100 p-6 md:p-8">

        {/* MOBILE SPACING */}
        <div className="md:hidden h-12" />

        {children}

      </main>

    </div>
  );
}