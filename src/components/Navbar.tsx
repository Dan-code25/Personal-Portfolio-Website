import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = [
      "home",
      "aboutme",
      "tech",
      "projects",
      "certifications",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    // Keep a running record of how visible each section is
    const ratios: Record<string, number> = {
      home: 0,
      aboutme: 0,
      tech: 0,
      projects: 0,
      certifications: 0,
      contact: 0,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the specific sections that just changed
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });

        // Find which section is currently the most visible overall
        let activeId = "home";
        let highestRatio = 0;

        Object.entries(ratios).forEach(([id, ratio]) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            activeId = id;
          }
        });

        // Only update if at least one section is partially visible
        if (highestRatio > 0) {
          setActiveSection(activeId);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s!));

    return () => {
      observer.disconnect();
    };
  }, []);

  const isActive = (href: string) => {
    return activeSection === href.slice(1);
  };

  return (
    <nav className="sticky top-0 z-[999] backdrop-blur-lg">
      <div
        className="
        flex items-center justify-between px-6 py-5
        md:px-10 md:py-6
        lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-20 lg:py-7
      "
      >
        {/* Left — Logo */}
        <img src={logo} alt="Logo" className="h-5" />

        {/* Center — Nav links (desktop only) */}
        <div className="hidden lg:flex items-center justify-center gap-8 font-medium whitespace-nowrap">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className={`text-sm lg:text-lg transition-colors cursor-pointer ${
              isActive("#home") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("aboutme")}
            className={`text-sm lg:text-lg transition-colors cursor-pointer ${
              isActive("#aboutme") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            About Me
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("tech")}
            className={`text-sm lg:text-lg transition-colors cursor-pointer ${
              isActive("#tech") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Tech Stack
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className={`text-sm lg:text-lg transition-colors cursor-pointer ${
              isActive("#projects") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("certifications")}
            className={`text-sm lg:text-lg transition-colors cursor-pointer ${
              isActive("#certifications")
                ? "text-orange-500"
                : "hover:text-gray-300"
            }`}
          >
            Certifications
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={`text-sm lg:text-lg transition-colors cursor-pointer ${
              isActive("#contact") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Contact Me
          </button>
        </div>

        {/* Right — hamburger */}
        <div className="flex items-center justify-end gap-4">
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile/tablet dropdown */}
      {isOpen && (
        <div className="lg:hidden flex flex-col px-6 pb-4 border-y border-darker gap-1 animate-fadeIn">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className={`py-2 transition-colors cursor-pointer ${
              isActive("#home") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("aboutme")}
            className={`py-2 transition-colors cursor-pointer ${
              isActive("#aboutme") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            About Me
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("tech")}
            className={`py-2 transition-colors cursor-pointer ${
              isActive("#tech") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Tech Stack
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className={`py-2 transition-colors cursor-pointer ${
              isActive("#projects") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("certifications")}
            className={`py-2 transition-colors cursor-pointer ${
              isActive("#certifications")
                ? "text-orange-500"
                : "hover:text-gray-300"
            }`}
          >
            Certifications
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={`py-2 transition-colors cursor-pointer ${
              isActive("#contact") ? "text-orange-500" : "hover:text-gray-300"
            }`}
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
