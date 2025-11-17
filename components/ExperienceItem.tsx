const ExperienceItem = ({ logo, title, company, date, description } : { logo: string, title: string, company: string, date: string, description: string }) => (
  <div className="flex flex-row items-start gap-3 w-full">
    {logo && (
      <div className="flex flex-col items-start gap-2.5 w-8 h-8">
        <div className="w-7 h-7 overflow-hidden">
          <img src={logo} alt={company} className="w-full h-full object-cover" />
        </div>
      </div>
    )}
    <div className="flex-1 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1 w-full">
        <div className="flex flex-col items-start gap-0 w-full">
          <div className="flex flex-row items-center gap-0 w-full">
            <div className="flex-1 text-[16px] font-medium tracking-[-0.02em] leading-[1.4] text-black">
              {title}
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 w-full">
            <p className="font-mono text-[12px] tracking-[-0.02em] leading-[1.4] text-[#7e7e7e] uppercase">
              {company}
            </p>
            <p className="font-mono text-[12px] tracking-[-0.02em] leading-[1.4] text-[#7e7e7e]">
              ·
            </p>
            <p className="flex-1 font-mono text-[12px] tracking-[-0.02em] leading-[1.4] text-[#7e7e7e] uppercase text-left">
              {date}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full mt-1">
          <p className="w-full tracking-[-0.01em] leading-[1.4] text-[#8f8f8f]">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default ExperienceItem;