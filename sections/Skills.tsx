import SkillPill from "../components/Skillpill";

export default function SkillsSection() {
  const skills = [
    'Rust', 'Solidity', 'Anchor', 'Solana', 'Docker', 'React',
    'Typescript', 'Javascript', 'Tailwind CSS', 'Next.js', 'Node.js',
    'Express', 'Websockets', 'Mongo DB', 'PostgreSQL', 'Prisma', 'AWS'
  ];

  return (
    <section className="flex flex-col items-center gap-8 w-full max-w-[1200px] animate-fadeInUp" style={{ animationDelay: '350ms' }}>
      <div className="flex flex-col items-start gap-4 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
            Skills / Stack
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
          {skills.map((skill, index) => (
            <SkillPill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
