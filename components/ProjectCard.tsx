// Project Card Component
const ProjectCard = ({ title, description } : { title: string, description: string }) => (
  <div className="flex flex-col gap-1.5 w-full p-4 bg-[#fafafa] border border-[#e3e1e1] rounded-lg hover:border-[#d0d0d0] transition-colors">
    <h4 className="text-[16px] font-medium tracking-[-0.02em] leading-[1.4] text-[#121212]">
      {title}
    </h4>
    <p className="text-[14px] tracking-[-0.01em] leading-[1.4] text-[#8f8f8f]">
      {description}
    </p>
  </div>
);

export default ProjectCard;