import Terminal from "./Terminal";
import ScrollReveal from "./ScrollReveal.tsx";
import picture from "../assets/dan2.png";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="bg-gradient-to-b from-[#101010] via-[#0d0d0e] to-[#151515] flex flex-col items-center justify-center min-h-screen px-6 py-4 gap-10 md:gap-14 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="gradient-text font-black text-[32px] md:text-[40px] leading-tight">
          About Me
        </h2>
      </ScrollReveal>

      <div className="w-full">
        <ScrollReveal>
          <div className="flex flex-col justify-center items-center gap-10 md:gap-14 lg:flex-row lg:gap-16 w-full">
            {/* Picture */}
            <div
              className="relative flex-shrink-0 group
          w-[220px] h-[270px]
          md:w-[300px] md:h-[380px]
          lg:w-[360px] lg:h-[480px]
          transition-transform duration-500 hover:-translate-y-3
        "
            >
              {/* Glow — appears on hover */}
              <div
                className="
            absolute inset-0 -z-10 rounded-2xl
            opacity-0 blur-[80px] transition-opacity duration-500
            group-hover:opacity-[0.15]
            bg-red
          "
              />

              {/* Card */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src={picture}
                  alt="Dan Jheniel Bringas"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Terminal */}
            <div className="w-full lg:flex-1 lg:max-w-4xl">
              <Terminal />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
