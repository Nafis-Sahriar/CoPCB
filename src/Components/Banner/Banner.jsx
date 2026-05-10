import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeBanner() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 1. TEXT SECTION (Shows on Left) */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-950/10 text-xs text-green-400">
            AI-POWERED PCB PLATFORM
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight italic">
            From Hand-Drawn Circuits to Real <span className="text-green-500">PCB Designs</span>
          </h1>

          <p className="text-gray-400 text-lg">
            AI-powered circuit recognition, project collaboration, and rapid PCB workflow automation.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="#demo" className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg">
              Try Demo
            </Link>
            <Link href="#workflow" className="px-8 py-3 border border-gray-700 rounded-lg">
              View Workflow
            </Link>
          </div>
        </div>

        {/* 2. IMAGE SECTION (Shows on Right) */}
        <div className="flex justify-center">
          {/* <div className="w-full aspect-square bg-gray-900 border-2 border-dashed border-gray-800 rounded-2xl flex items-center justify-center"> */}
           <Image src={'/chip.png'} alt="Chip Image" width={500} height={400} />
          {/* </div> */}
        </div>

      </div>
    </section>
  );
}