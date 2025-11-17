export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
      <div className="flex flex-col items-center gap-6 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
        <div className="flex flex-row items-center justify-center gap-2.5">
          <div className="w-[70px] h-[70px] rounded-[10px] overflow-hidden">
            <img
              src="https://framerusercontent.com/images/5unPgKWtdscBGaxmLqBsg71bADA.jpg?width=400&height=400"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5 w-full">
          <h1 className="text-[28px] font-semibold tracking-[-0.05em] text-center text-[#121212]">
            Nitin Jha
          </h1>
          <h2 className="text-[20px] tracking-[-0.02em] text-center text-[#7e7e7e]">
            Fullstack Blockchain Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
