import ScrollReveal from "./ScrollReveal.tsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#040404_0%,#050505_100%)] px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white-dark-hover">
                Portfolio
              </p>
              <h2 className="mt-3 gradient-text font-black text-[28px] leading-tight md:text-[34px]">
                Dan Jheniel Bringas
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white-dark md:text-base">
                Aspiring full-stack developer and software engineer focused on building clean, modern,
                and responsive web experiences.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white-dark md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dan Jheniel Bringas. All rights reserved.</p>
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
