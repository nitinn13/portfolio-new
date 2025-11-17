import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const ProjectsSection = () => {
  const fullStackProjects = [
    {
      title: "Draft Space",
      description: "A real-time collaborative whiteboard built with Next.js, Express, and WebSockets for fast, low-latency drawing and brainstorming.",
      link: "https://github.com/nitinn13/Excalidraw" 
    },
    {
      title: "Nadi Netra",
      description: "An AI-powered water-quality monitor using Earth Engine and HydroTransnet model to analyze and visualize real-time and historical lake data.",
      link: "https://nadinetra.nitinxdev.fun/"
    }
  ];

  const web3Projects = [
    {
      title: "EVM-Bridge",
      description: "Built a mini EVM bridge that lets tokens hop between chains with lock, mint, burn, and unlock flow, secure, simple, and extendable.",
      link: "https://github.com/nitinn13/EVM-bridge" 
    },
    {
      title: "Obscuron",
      description: "An MPC-powered GitHub bounty allocator that uses Arcium MXE and Solana to compute private rewards and settle them on-chain.",
      link: "https://obscuron-d8my.vercel.app/"
    },
    
  ];

  return (
    <section className="flex flex-col items-center gap-8 w-full max-w-[1200px]">
      <div className="flex flex-col items-start gap-5 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
            Projects
          </h3>
        </div>
        
        {/* Full Stack Projects */}
        <div className="flex flex-col gap-3 w-full">
          <h4 className="font-mono text-[12px] font-medium tracking-[-0.02em] leading-[1.4] text-[#7e7e7e] uppercase">
            Full Stack Projects
          </h4>
          <div className="flex flex-col gap-2.5 w-full">
            {fullStackProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* Web3 Projects */}
        <div className="flex flex-col gap-3 w-full">
          <h4 className="font-mono text-[12px] font-medium tracking-[-0.02em] leading-[1.4] text-[#7e7e7e] uppercase">
            Web3 Projects
          </h4>
          <div className="flex flex-col gap-2.5 w-full">
            {web3Projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* See All Projects Button */}
        <div className="flex justify-center w-full mt-4">
          <Link 
            href="/projects"
            className="font-mono text-[12px] font-medium tracking-[-0.02em] leading-[1.4] text-[#121212] uppercase border border-[#121212] px-4 py-2 hover:bg-[#121212] hover:text-white transition-colors duration-200"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;