"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectsLayout({ children }) {

  const pathname = usePathname();

  const tabs = [
    {
      name: "Overview",
      href: "/dashboard/projects",
    },
    {
      name: "Files",
      href: "/dashboard/projects/files",
    },
    {
      name: "Activity",
      href: "/dashboard/projects/activity",
    },
    {
      name: "Members",
      href: "/dashboard/projects/members",
    },
    {
      name: "Settings",
      href: "/dashboard/projects/settings",
    },
  ];

  return (
    <div className="p-6">

      {/* PROJECT HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Project Name 
        </h1>

        <p className="text-gray-500 mt-2">
          Date of Creation
        </p>

      </div>


      {/* TOP NAVIGATION */}
      <div className="flex flex-wrap gap-6 border-b pb-4 mb-8">

        {
          tabs.map((tab) => {

            let isActive = false;

            if (tab.href === "/dashboard/projects") {
              isActive = pathname === "/dashboard/projects";
            } else {
              isActive = pathname.startsWith(tab.href);
            }

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`
                  pb-2 transition-all

                  ${
                    isActive
                      ? "border-b-2 border-green-500 text-green-500 font-semibold"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })
        }

      </div>


      <div>
        {children}
      </div>

    </div>
  );
}