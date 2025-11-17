import ProjectButton from "@/components/ProjectButton";

const ProjectsSection = ({ onOpenModal } : { onOpenModal: (type: string) => void }) => {
  return (
    <section className="flex flex-col items-center gap-8 w-full max-w-[1200px] animate-fadeInUp" style={{ animationDelay: '300ms' }}>
      <div className="flex flex-col items-start gap-4 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
            Projects
          </h3>
        </div>
        
        <div className="flex flex-col gap-3 w-full">
          <ProjectButton
            title="Full Stack Projects" 
            onClick={() => onOpenModal('fullstack')}
          />
          <ProjectButton 
            title="Web3 Projects" 
            onClick={() => onOpenModal('web3')}
          />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;