import ExperienceItem from "../components/ExperienceItem";

export default function EducationSection() {
    return (
        <section className="flex flex-col items-center gap-8 w-full max-w-[1200px] animate-fadeInUp" style={{ animationDelay: '250ms' }}>
            <div className="flex flex-col items-start gap-4 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
                <div className="flex flex-col items-start gap-2.5 w-full">
                    <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
                        Education
                    </h3>
                </div>
                <ExperienceItem
                    logo="https://www.bennett.edu.in/wp-content/uploads/2025/01/NAAC-Logo-2025-webp-1.webp"
                    title="Bachelor's Degree in Technology"
                    company="Bennett University"
                    date="2023-2027"
                    description=''
                />
            </div>
        </section>
    );
}