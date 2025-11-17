// app/projects/page.tsx
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
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
    },
    {
      title: "NeonPay",
      description: "A full-stack digital wallet with Razorpay integration for seamless user auth, balance tracking, and secure peer-to-peer payments.",
      link: "https://neonpay.nitinxdev.fun/"
    },
    {
      title: "IncuMeta",
      description: "A platform for incubators and startups featuring onboarding, performance tracking, meetings, automation, and integrated video calls.",
      link: "https://github.com/nitinn13/incu-meta-nitin"
    }
  ];

  const web3Projects = [
  {
    title: "EVM-Bridge",
    description: "Built a mini EVM bridge that lets tokens hop between chains with lock, mint, burn, and unlock flow — secure, simple, and extendable.",
    link: "https://github.com/nitinn13/EVM-bridge"
  },
  {
    title: "Obscuron",
    description: "An MPC-powered GitHub bounty allocator that uses Arcium MXE and Solana to compute private rewards and settle them on-chain.",
    link: "https://obscuron-d8my.vercel.app/"
  },
  {
    title: "SwapSol",
    description: "A Solana swap dApp that lets users trade tokens instantly using Jupiter's liquidity aggregator.",
    link: "https://github.com/yourusername/swapsol"
  },
  {
    title: "Encrypted Mines",
    description: "A privacy-preserving Mines game built using Arcium MXE, where all game logic and bomb checks run inside secure MPC for verifiable fairness.",
    link: "https://github.com/nitinn13/mines"  
  }
];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center font-mono text-[12px] text-[#7e7e7e] hover:text-[#121212] mb-8 transition-colors duration-200"
          >
            ← Back to home
          </Link>
          <h1 className="font-mono text-[32px] font-medium tracking-[-0.02em] leading-[1.2] text-[#121212] mb-4">
            Projects
          </h1>
          <p className="font-mono text-[14px] tracking-[-0.01em] leading-[1.4] text-[#8f8f8f] max-w-2xl mx-auto">
            A collection of my work spanning full-stack web development and Web3 technologies. 
            Each project represents unique challenges and learning experiences.
          </p>
        </div>

        

        {/* Web3 Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-mono text-[18px] font-medium tracking-[-0.02em] leading-[1.4] text-[#121212]">
              Web3 Projects
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="font-mono text-[12px] text-[#7e7e7e]">
              {web3Projects.length} projects
            </span>
          </div>
          
          <div className="grid gap-6">
            {web3Projects.map((project, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg hover:border-gray-400 transition-colors duration-200"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </section>
        {/* Full Stack Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-mono text-[18px] font-medium tracking-[-0.02em] leading-[1.4] text-[#121212]">
              Full Stack Projects
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="font-mono text-[12px] text-[#7e7e7e]">
              {fullStackProjects.length} projects
            </span>
          </div>
          
          <div className="grid gap-6">
            {fullStackProjects.map((project, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg hover:border-gray-400 transition-colors duration-200"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;