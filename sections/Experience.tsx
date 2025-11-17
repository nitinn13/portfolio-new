import ExperienceItem from "../components/ExperienceItem";

export default function ExperienceSection() {
  return (
  <section className="flex flex-col items-center gap-8 w-full max-w-[1200px] animate-fadeInUp" style={{ animationDelay: '200ms' }}>
    <div className="flex flex-col items-start gap-4 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
      <div className="flex flex-col items-start gap-2.5 w-full">
        <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
          Experience
        </h3>
      </div>
      <ExperienceItem
        logo="https://framerusercontent.com/images/P5Wb9H14FTDPgi0DmTbXG5QHI.webp?width=128&height=128"
        title="Fellow"
        company="Arcium"
        date="July 2025 - Sept 2025"
        description="Selected as an Arcium Fellow. Built a system leveraging Arcium's MPC (MXE) for confidential GitHub bounty computations. Designed encrypted evaluation metrics for PRs, implemented secure multi-party computation protocols, and integrated on-chain execution with Solana for verifiable, automated reward disbursement."
      />
    </div>
  </section>
)
}
