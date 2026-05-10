import React from 'react';
import { IconHandheld, IconPcb, Icon3d } from "@gravity-ui/icons"; // Placeholder names - replace with actual Gravity Icons
import { TfiWrite } from 'react-icons/tfi';
import { FaMicrochip } from 'react-icons/fa';
import { SiOpen3D } from 'react-icons/si';

export default function StaticInfo() {
  const features = [
    {
      title: "Handwritten Recognition",
      description: "Upload your hand-drawn circuit and let AI convert it into a smart schematic.",
      icon: <TfiWrite width={24} height={24} />,
    },
    {
      title: "AI PCB Workflow",
      description: "From schematic to PCB in just a few clicks with AI optimization.",
      icon: <FaMicrochip width={24} height={24} />,
    },
    {
      title: "3D Visualization",
      description: "Visualize your PCB in 3D before manufacturing with real-time preview.",
      icon: <SiOpen3D width={24} height={24} />,
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-medium mb-16">
          Powerful, <span className="text-green-500">Intelligent,</span> Built for Engineers.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col items-start gap-4 hover:border-green-500/20 transition-colors group"
            >
              {/* Icon Container with Green Glow */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0D0D0D] border border-white/10 overflow-hidden">
                {/* The Radial Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="text-white relative z-10 group-hover:text-green-400 transition-colors">
                  {feature.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-white font-bold text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}