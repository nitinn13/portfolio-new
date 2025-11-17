import ProjectCard from "@/components/ProjectCard";

const ProjectModal = ({ isOpen, onClose, type } : { isOpen: boolean, onClose: () => void, type: string | null }) => {
  if (!isOpen) return null;

  const fullStackProjects = [
    {
      title: "Draft Space",
      description: "A collaborative whiteboard application built with Next.js, Express, and WebSockets, enabling real-time drawing and brainstorming. It features secure authentication, dynamic room creation, and low-latency synchronization across clients, making it a lightweight open-source alternative to Excalidraw."
    },
    {
      title: "NeonPay",
      description: "A full-stack digital wallet application built with React, Tailwind CSS, Node.js, Express, Prisma, and PostgreSQL, integrated with Razorpay for secure payments, enabling users to sign up, log in, view balance and profile details, send money to other users, and track all transactions with a smooth and reliable workflow."
    },
    {
      title: "Nadi Netra",
      description: "NadiNetra is an AI-driven water-body monitoring system that uses Google Earth Engine, geospatial analytics, and machine learning to deliver real-time and historical insights on Delhi's lakes and rivers, accurately estimating pH, turbidity, dissolved oxygen, TDS, TSS, and chlorophyll levels, all presented through an interactive dashboard with trend analysis and alerting features."
    }
  ];

  const web3Projects = [
    {
      title: "EVM-Bridge",
      description: "Built a mini EVM bridge that lets tokens hop between chains with lock, mint, burn, and unlock flow, secure, simple, and extendable."
    },
    {
      title: "SWap Sol",
      description: "A Solana swap dApp that lets you trade tokens effortlessly using Jupiter's aggregator."
    }
  ];

  const projects = type === 'fullstack' ? fullStackProjects : web3Projects;
  const title = type === 'fullstack' ? 'Full Stack Projects' : 'Web3 Projects';

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" 
      onClick={onClose}
      style={{ position: 'fixed' }}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white border-b border-gray-200 p-6 flex justify-between items-center shrink-0">
          <h3 className="font-mono text-[16px] font-medium tracking-[-0.02em] text-[#121212] uppercase">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-[#7e7e7e] hover:text-[#121212] text-3xl leading-none w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-6 flex flex-col gap-3 overflow-y-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;