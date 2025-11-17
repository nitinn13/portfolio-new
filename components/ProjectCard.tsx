// components/ProjectCard.tsx
import Link from "next/link";

const ProjectCard = ({ title, description, link }: { 
  title: string; 
  description: string;
  link?: string;
}) => {
  const cardContent = (
    <div className="flex flex-col gap-1.5 w-full p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
      <h4 className="text-[18px] font-medium tracking-[-0.02em] leading-[1.4] text-[#121212] group-hover:underline">
        {title}
      </h4>
      <p className="text-[14px] tracking-[-0.01em] leading-[1.4] text-[#8f8f8f]">
        {description}
      </p>
      {link && (
        <div className="flex items-center gap-1 mt-2">
          <span className="font-mono text-[12px] text-[#7e7e7e] group-hover:text-[#121212] transition-colors duration-200">
            View Project
          </span>
          <svg 
            className="w-3 h-3 text-[#7e7e7e] group-hover:text-[#121212] transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ProjectCard;