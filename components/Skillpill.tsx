
// Skill Pill Component
const SkillPill = ({ skill } : { skill: string }) => (
  <div className="px-3 py-1.5 bg-[#fafafa] border border-[#e3e1e1] rounded-sm transition-all duration-300 hover:border-[#121212] hover:shadow-sm hover:scale-105">
    <p className="text-[16px] tracking-[-0.01em] leading-6 text-[#8f8f8f]">
      {skill}
    </p>
  </div>
);

export default SkillPill;