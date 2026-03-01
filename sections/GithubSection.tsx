import {GitHubCalendar} from "react-github-calendar";

export default function GithubSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1200px] animate-fadeInUp">
      <style jsx global>{`
        /* Targets SVG text for months and legend to be solid black */
        .react-github-calendar__chart text {
          fill: #000000 !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 11px;
        }
      `}</style>
      
      <div className="flex flex-col items-start gap-4 w-full max-w-[640px] p-8 border border-dashed border-gray-200 border-t-0">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] leading-[1.6em] text-[#121212] uppercase">
            Github Contributions
          </h3>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex justify-center w-full overflow-x-auto py-4 no-scrollbar">
            <GitHubCalendar
              username="nitinn13"
              blockSize={12}
              blockMargin={3}
              fontSize={12}
              // textColor="#000000"
              // Colors extracted from your high-contrast reference
              theme={{
                light: ["#ebebeb", "#c2c2c2", "#949494", "#666666", "#3d3d3d"],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}