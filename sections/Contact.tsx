import ContactLink from "../components/ContactLink";

export default function ContactSection() {
  return (
  <section className="flex flex-col items-center gap-8 w-full max-w-[1200px] animate-fadeInUp" style={{ animationDelay: '400ms' }}>
    <div className="flex flex-col items-start gap-4 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
      <div className="flex flex-col items-start gap-2.5 w-full">
        <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
          Contact
        </h3>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <ContactLink
          type="Email"
          value="nitinjha080@gmail.com"
          href="mailto:nitinjha080@gmail.com"
        />
        <ContactLink
          type="LinkedIn"
          value="/in/nitin-kumar-jha"
          href="https://www.linkedin.com/in/nitin-kumar-jha/"
        />
        <ContactLink
          type="X/Twitter"
          value="@nitinxjha"
          href="https://x.com/nitinxjha"
        />
      </div>
    </div>
  </section>
);
}
