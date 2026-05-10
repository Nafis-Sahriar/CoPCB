"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa"; 
import {  FaHexagonNodes } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function AppNavbar() 
{
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Docs", href: "/doc" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black backdrop-blur-lg border-b border-green-700 p-2">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
         
          <div className="flex items-center gap-2 ml-5">
            <Link href="/" className="flex items-center gap-2 group">
              <FaHexagonNodes className="text-green-500 text-2xl transition-transform group-hover:rotate-12" />
              <span className="text-white font-bold text-xl tracking-tight">CoPCB</span>
            </Link>
          </div>

         
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-green-500 font-bold underline underline-offset-4"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

         
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-gray-300 hover:text-white text-sm font-medium">
               <Button className="bg-green-600 border border-green-500/30 text-white w-full rounded-2xl">
                Login
              </Button>
            </Link>

            <Link href="/signup" className="px-5 py-2 text-sm font-medium text-white border border-green-500/30 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-all">
                Get Started
            </Link>

          
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isOpen ? <FaTimesCircle size={24} /> : <MdMenuOpen size={24} className="text-white"/>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white py-3 text-base font-medium border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block text-gray-300 hover:text-white py-3 text-base font-medium"
            >
              <Button className="bg-green-500/10 border border-green-500/30 text-green-500 w-full">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}