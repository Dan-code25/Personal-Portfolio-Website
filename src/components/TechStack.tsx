import type { ReactNode } from "react";
import TechCard from "./TechCard";
import ScrollReveal from "./ScrollReveal.tsx";
import {
  SiBootstrap,
  SiCss,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export default function TechStack() {
  const languageTechnologies = [
    { label: "JavaScript", icon: <SiJavascript size={22} /> },
    { label: "TypeScript", icon: <SiTypescript size={22} /> },
    { label: "Python", icon: <SiPython size={22} /> },
    { label: "Java", icon: <FaJava size={22} /> },
    { label: "HTML5", icon: <SiHtml5 size={22} /> },
    { label: "CSS3", icon: <SiCss size={22} /> },
    { label: "C/C++", icon: <SiCplusplus size={22} /> },
  ];

  const frameworkTechnologies: Array<{ label: string; icon: ReactNode }> = [
    { label: "React JS", icon: <SiReact size={22} /> },
    { label: "React Native", icon: <TbBrandReactNative size={22} /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
    { label: "Bootstrap", icon: <SiBootstrap size={22} /> },
  ];

  const backendTechnologies: Array<{ label: string; icon: ReactNode }> = [
    { label: "Node.js", icon: <SiNodedotjs size={22} /> },
    { label: "Express", icon: <SiExpress size={22} /> },
    { label: "FastAPI", icon: <SiFastapi size={22} /> },
    { label: "PostgreSQL", icon: <SiPostgresql size={22} /> },
    { label: "MySQL", icon: <SiMysql size={22} /> },
    { label: "Supabase", icon: <SiSupabase size={22} /> },
    { label: "Firebase", icon: <SiFirebase size={22} /> },
  ];

  return (
    <section
      id="tech"
      className="flex flex-col items-center justify-start px-6 mt-6 pt-8 pb-16 md:mt-8 md:pt-10 md:pb-20 lg:px-16"
    >
      <div className="w-full max-w-6xl">
        <ScrollReveal>
          <h2 className="gradient-text font-black text-[32px] md:text-[40px] leading-tight text-center">
            Tech Stack
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-10">
          <ScrollReveal delayMs={75}>
            <section className="space-y-4">
              <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-white-dark-hover md:text-xl">
                Languages
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {languageTechnologies.map((tech) => (
                  <TechCard
                    key={tech.label}
                    label={tech.label}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <section className="space-y-4">
              <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-white-dark-hover md:text-xl">
                Frameworks &amp; Libraries
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {frameworkTechnologies.map((tech) => (
                  <TechCard
                    key={tech.label}
                    label={tech.label}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delayMs={225}>
            <section className="space-y-4">
              <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-white-dark-hover md:text-xl">
                Backend &amp; Databases
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {backendTechnologies.map((tech) => (
                  <TechCard
                    key={tech.label}
                    label={tech.label}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
