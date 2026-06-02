import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiInstagramLine } from "react-icons/ri";
import { Download } from "lucide-react";

import resume from "../assets/Bringas, Dan Jheniel P_Curriculum_Vitae.pdf";

import heroPic from "../assets/Dan_Pic.svg";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const words = ["Full-Stack Developer", "Software Engineer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100;
    const delay =
      currentText === words[currentWordIndex] && !isDeleting ? 2000 : typeSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText !== words[currentWordIndex]) {
        setCurrentText(
          words[currentWordIndex].slice(0, currentText.length + 1),
        );
      } else if (isDeleting && currentText !== "") {
        setCurrentText(currentText.slice(0, -1));
      } else if (currentText === words[currentWordIndex]) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Dan_Jheniel_Bringas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socials = [
    {
      id: 1,
      icon: <FiGithub size={21} />,
      url: "https://github.com/Dan-code25",
    },
    {
      id: 2,
      icon: <TbBrandLinkedin size={21} />,
      url: "https://www.linkedin.com/in/dan-jheniel-bringas-8a898035a",
    },
    {
      id: 3,
      icon: <PiFacebookLogoBold size={21} />,
      url: "https://www.facebook.com/dan.jheniel.bringas/",
    },
    {
      id: 4,
      icon: <RiInstagramLine size={21} />,
      url: "https://www.instagram.com/dan.mtzri/?hl=en",
    },
  ];

  return (
    <div
      id="home"
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-80px)] mt-5 px-6 gap-10 md:gap-14 lg:flex-row lg:gap-[300px] lg:px-16 transition-all duration-1000 ease-out motion-reduce:transition-none ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative flex flex-col items-center text-center gap-5 w-full flex-shrink-0 lg:w-[500px] xl:w-[650px] lg:items-start lg:text-left lg:gap-7">
        <div className="absolute w-[350px] h-[300px] bg-[var(--grad-2)] opacity-10 blur-3xl rounded-[40%_60%_60%_40%/60%_40%_60%_40%] -z-10" />

        <div className="flex flex-col gap-2">
          <p className="text-white-dark-active font-semibold text-lg lg:text-xl">
            Hi I am
          </p>

          <p className="text-white-dark-hover text-2xl font-bold lg:text-3xl">
            Dan Jheniel Bringas
          </p>
        </div>

        <h1 className="gradient-text font-black text-[20px] sm:text-[28px] md:text-4xl lg:text-5xl leading-tight whitespace-nowrap w-full flex items-center justify-center lg:justify-start">
          Aspiring {currentText}
          <span className="inline-block w-[3px] h-[0.9em] bg-white-dark-hover ml-2 animate-pulse align-middle -mt-[2px]" />
        </h1>

        <div className="flex items-center justify-center gap-5 lg:justify-start lg:mt-3">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-white-darker text-white-dark cursor-pointer hover:border-white-dark-hover hover:text-white-dark-hover transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          <button
            type="button"
            onClick={scrollToContact}
            className="relative flex items-center justify-center px-6 py-3 font-medium rounded-xl bg-normal cursor-pointer overflow-hidden group transition-all duration-300 active:scale-95 border border-transparent hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white/10 rounded-full group-hover:w-56 group-hover:h-56" />
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
              Contact Me
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="relative flex items-center gap-2 px-6 py-3 font-medium rounded-xl border-2 border-white-dark-hover text-white-dark-hover cursor-pointer overflow-hidden group transition-all duration-300 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-white-dark-hover origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Download CV
            </span>

            <Download
              size={18}
              className="relative z-10 group-hover:text-black transition-all duration-300 group-hover:translate-y-[3px]"
            />
          </button>
        </div>
      </div>

      <div
        className="
        relative flex-shrink-0 rounded-full bg-zinc-900
        flex items-end justify-center
        shadow-[0_0_20px_rgba(0,0,0,0.3)] mt-30
        w-[300px] h-[300px]
        md:w-[300px] md:h-[300px]
        lg:scale-[1.7]
      "
      >
        <div className="absolute inset-0 rounded-full overflow-hidden z-0">
          <img
            src={heroPic}
            alt="Dan Jheniel Bringas"
            className="absolute bottom-0 left-0 w-full h-auto origin-bottom scale-[1.3]"
          />
        </div>

        <img
          src={heroPic}
          alt=""
          aria-hidden="true"
          className="absolute z-10 bottom-0 left-0 w-full h-auto origin-bottom scale-[1.3]
            [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)]"
        />
      </div>
    </div>
  );
}
