import ScrollReveal from "./ScrollReveal.tsx";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiInstagramLine, RiMailLine } from "react-icons/ri";

const contactLinks = [
  {
    label: "Email",
    value: "danjhenielpbringas@gmail.com",
    href: "mailto:danjhenielpbringas@gmail.com",
    icon: <RiMailLine size={22} />,
  },
  {
    label: "GitHub",
    value: "github.com/Dan-code25",
    href: "https://github.com/Dan-code25",
    icon: <FiGithub size={22} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dan-jheniel-bringas-8a898035a",
    href: "https://www.linkedin.com/in/dan-jheniel-bringas-8a898035a",
    icon: <TbBrandLinkedin size={22} />,
  },
  {
    label: "Facebook",
    value: "facebook.com/dan.jheniel.bringas/",
    href: "https://www.facebook.com/dan.jheniel.bringas/",
    icon: <PiFacebookLogoBold size={22} />,
  },
  {
    label: "Instagram",
    value: "instagram.com/dan.mtzri",
    href: "https://www.instagram.com/dan.mtzri/?hl=en",
    icon: <RiInstagramLine size={22} />,
  },
];

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-4 py-12 sm:px-6 md:py-20 lg:px-16 bg-[linear-gradient(180deg,#040404_0%,#060606_35%,#080808_100%)] overflow-hidden"
    >
      <div className="w-full max-w-6xl rounded-[24px] md:rounded-[32px] border border-normal/20 bg-[radial-gradient(circle_at_top,rgba(253,111,0,0.16),transparent_42%),linear-gradient(135deg,#090909,#040404)] px-5 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.72)] sm:px-8 md:px-10 md:py-14 lg:px-14">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="mt-2 font-black text-[28px] sm:text-[32px] md:text-[42px] leading-tight text-normal">
              Contact Me
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-md leading-6 sm:leading-7 text-orange-100/70 md:text-base px-2">
              Let's work together and build something amazing!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={120}>
          {/* Changed from Grid to Flex Wrap for auto-centering orphans */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="
                  group flex items-center gap-3 sm:gap-4 rounded-2xl border border-normal/20 
                  bg-white/[0.03] px-4 py-4 sm:px-5 sm:py-5 transition duration-300 
                  hover:-translate-y-1 hover:border-normal/50 hover:bg-normal/10
                  w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]
                "
              >
                <div className="flex flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-normal/30 bg-black/55 text-normal transition group-hover:scale-105">
                  {contact.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {contact.label}
                  </p>
                  <p className="mt-0.5 sm:mt-1 truncate text-xs sm:text-sm text-orange-100/60">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
