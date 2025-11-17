const ContactLink = ({ type, value, href } : { type: string, value: string, href: string }) => (
  <div className="flex flex-row items-center justify-between w-full transition-all duration-300 hover:translate-x-1">
    <div className="flex flex-row items-center justify-center gap-2.5">
      <p className="tracking-[-0.01em] leading-6 text-[#121212]">
        {type}
      </p>
    </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tracking-[-0.01em] leading-6 text-[#8f8f8f] hover:text-[#121212] transition-colors duration-300"
    >
      {value}
    </a>
  </div>
);
export default ContactLink;