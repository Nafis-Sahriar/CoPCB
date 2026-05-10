import { ArrowUpFromSquare } from '@gravity-ui/icons';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';
import { PiDetectiveFill } from 'react-icons/pi';
import { RiAiGenerate2 } from 'react-icons/ri';
// Replace these with your Gravity Icons


export default function Workflow() {
  const steps = [
    { id: "1", title: "Upload", desc: "Upload your circuit or schematic", icon: <ArrowUpFromSquare size={24} />  },
    { id: "2", title: "Detect", desc: "AI detects components and connections", icon:<PiDetectiveFill size={24}/> },
    { id: "3", title: "Generate", desc: "AI generates optimized PCB layout", icon: <RiAiGenerate2 size={24} />},
    { id: "4", title: "Review", desc: "Review and make modifications", icon:  <MdRateReview size={24} />},
    { id: "5", title: "Export", desc: "Export files for manufacturing", icon: <FaDownload size={24} />},
  ];

  return (
    <section className="bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-20">Our Workflow</h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px border-t border-dashed border-green-500/30 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center justify-center ">
              
              {/* Step Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-black mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-transform group-hover:scale-110">
                <div className="text-2xl">
                    {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-white font-bold text-lg">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-45 mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}