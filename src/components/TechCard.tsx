import type { ReactNode } from "react";

type TechCardProps = {
  label: string;
  icon: ReactNode;
  className?: string;
};

export default function TechCard({
  label,
  icon,
  className = "",
}: TechCardProps) {
  return (
    <button
      type="button"
      aria-label={`${label} technology card`}
      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-[1.35rem] border border-white-darker/40 bg-[linear-gradient(135deg,rgba(24,24,27,0.96),rgba(9,9,11,0.86))] px-4 py-4 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_14px_30px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.5deg] hover:border-orange-400/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white-darker/40 bg-black/40 text-white-dark-hover shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        {icon}
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col leading-tight">
        <span className="truncate text-sm font-semibold tracking-wide text-white-dark-hover transition-transform duration-300 group-hover:translate-x-0.5">
          {label}
        </span>
      </div>
    </button>
  );
}
