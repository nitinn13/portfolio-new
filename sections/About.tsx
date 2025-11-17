export default function AboutSection() {
  return (
  <section className="flex flex-col items-center gap-8 w-full max-w-[1200px] animate-fadeInUp" style={{ animationDelay: '150ms' }}>
    <div className="flex flex-col items-start gap-3 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
      <div className="flex flex-col items-start gap-2.5 w-full">
        <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
          About
        </h3>
      </div>
      <p className="tracking-[-0.01em] leading-[1.4] text-[#8f8f8f]">
        Full-stack and Web3 developer building scalable web applications and decentralized solutions.
      </p>
    </div>
  </section>
  );
}