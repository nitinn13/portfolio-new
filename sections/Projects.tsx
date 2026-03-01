import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const ProjectsSection = () => {
  // Track which section is open; default to none (null)
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const categories = [
    {
      id: "fullstack",
      label: "Full Stack Projects",
      items: [
        { title: "Draft Space", description: "A real-time collaborative whiteboard built with Next.js, Express, and WebSockets.", link: "https://github.com/nitinn13/Excalidraw" },
        { title: "Nadi Netra", description: "AI-powered water-quality monitor using Earth Engine and HydroTransnet.", link: "https://nadinetra.nitinxdev.fun/" }
      ]
    },
    {
      id: "web3",
      label: "Web3 Projects",
      items: [
        { title: "EVM-Bridge", description: "Mini EVM bridge for token hops with lock, mint, burn, and unlock flow.", link: "https://github.com/nitinn13/EVM-bridge" },
        { title: "Obscuron", description: "MPC-powered GitHub bounty allocator using Arcium MXE and Solana.", link: "https://obscuron-d8my.vercel.app/" }
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1200px]">
      <div className="flex flex-col items-start gap-2 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
        <h3 className="font-mono text-[14px] font-medium text-[#121212] uppercase mb-5">
          Projects
        </h3>
        
        {categories.map((cat) => (
          <div key={cat.id} className="w-full border-b border-gray-100 last:border-none">
            {/* Clickable Header */}
            <button 
              onClick={() => toggleSection(cat.id)}
              className="flex justify-between items-center w-full py-4 group hover:bg-gray-50/50 px-2 -mx-2 rounded-lg transition-colors"
              aria-expanded={openSection === cat.id}
            >
              <h4 className="font-mono text-[11px] text-[#7e7e7e] group-hover:text-[#121212] uppercase tracking-wider transition-colors">
                {cat.label}
              </h4>
              
              {/* Rotating Arrow Icon */}
              <div 
                className={`flex items-center justify-center transition-transform duration-300 ${openSection === cat.id ? 'rotate-180' : ''}`}
              >
                <svg 
                  className="w-3.5 h-3.5 text-[#a1a1a1] group-hover:text-[#121212]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </div>
            </button>

            {/* Collapsible Content */}
            {openSection === cat.id && (
              <div className="flex flex-col gap-3 pb-5 pt-1 animate-fadeInUp">
                {cat.items.map((p, index) => (
                  <ProjectCard key={index} title={p.title} description={p.description} link={p.link} />
                ))}
              </div>
            )}
          </div>
        ))}

        <Link 
          href="/projects" 
          className="self-center mt-6 font-mono text-[11px] text-[#121212] uppercase border border-[#121212] px-3 py-1.5 hover:bg-[#121212] hover:text-white transition-all"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;