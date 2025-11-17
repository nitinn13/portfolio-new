// Project Button Component
const ProjectButton = ({ title, onClick } : { title: string, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-row items-center justify-between w-full p-4 bg-[#fafafa] border border-[#e3e1e1] rounded-lg hover:border-[#121212] hover:bg-white transition-all group"
  >
    <span className="text-[16px] font-medium tracking-[-0.02em] leading-[1.4] text-[#121212]">
      {title}
    </span>
    <span className="text-[#7e7e7e] group-hover:text-[#121212] transition-colors">→</span>
  </button>
);

export default ProjectButton;