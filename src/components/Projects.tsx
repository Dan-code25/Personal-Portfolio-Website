import ScrollReveal from "./ScrollReveal.tsx";
import ProjectCard from "./ProjectCard.tsx";

import gdgwebsite1 from "../assets/projects/gdgweb1.png";
import gdgwebsite2 from "../assets/projects/gdgweb2.png";
import gdgwebsite3 from "../assets/projects/gdgweb3.png";
import gdgwebsite4 from "../assets/projects/gdgweb4.png";

import deptflow1 from "../assets/projects/deptflow/deptflow1.png";
import deptflow2 from "../assets/projects/deptflow/deptflow2.png";
import deptflow3 from "../assets/projects/deptflow/Screenshot (140).png";
import deptflow4 from "../assets/projects/deptflow/Screenshot (141).png";
import deptflow5 from "../assets/projects/deptflow/Screenshot (142).png";
import deptflow6 from "../assets/projects/deptflow/Screenshot (143).png";

import retrn1 from "../assets/projects/retrn/Screenshot 2026-06-02 163311.png";
import retrn2 from "../assets/projects/retrn/Screenshot 2026-06-02 163329.png";
import retrn3 from "../assets/projects/retrn/Screenshot 2026-06-02 163339.png";
import retrn4 from "../assets/projects/retrn/Screenshot 2026-06-02 163357.png";
import retrn5 from "../assets/projects/retrn/Screenshot 2026-06-02 163412.png";
import retrn6 from "../assets/projects/retrn/Screenshot 2026-06-02 163440.png";
import retrn7 from "../assets/projects/retrn/Screenshot 2026-06-02 163457.png";
import retrn8 from "../assets/projects/retrn/Screenshot 2026-06-02 163509.png";
import retrn9 from "../assets/projects/retrn/Screenshot 2026-06-02 163522.png";

import compass1 from "../assets/projects/compass/compass1.png";
import compass2 from "../assets/projects/compass/compass2.png";
import compass3 from "../assets/projects/compass/compass3.png";
import compass4 from "../assets/projects/compass/compass4.png";
import compass5 from "../assets/projects/compass/compass5.png";
import compass6 from "../assets/projects/compass/compass6.png";
import compass7 from "../assets/projects/compass/compass7.png";

import yogamatch from "../assets/projects/yogamatch.png";

import matooto1 from "../assets/projects/matooto/Screenshot (144).png";
import matooto2 from "../assets/projects/matooto/Screenshot (145).png";
import matooto3 from "../assets/projects/matooto/Screenshot (146).png";
import matooto4 from "../assets/projects/matooto/Screenshot (147).png";
import matooto5 from "../assets/projects/matooto/Screenshot (148).png";
import matooto6 from "../assets/projects/matooto/Screenshot (149).png";
import matooto7 from "../assets/projects/matooto/Screenshot (150).png";
import matooto8 from "../assets/projects/matooto/Screenshot (151).png";

const sampleProjects = [
  {
    title: "GDGoC TUP Manila Official Website",
    description:
      "The official digital hub for the Google Developer Groups on Campus at TUP – Manila, designed for centralized organization resources, showcase organization projects, and facilitate community engagement for student members",
    images: [gdgwebsite1, gdgwebsite2, gdgwebsite3, gdgwebsite4],
    techStack: [
      "React JS",
      "TypeScript",
      "Javascript",
      "CSS",
      "Vite",
      "Gemini API",
    ],
    githubUrl: "https://github.com/Dan-code25/GDGoC-Website-Project",
    websiteUrl: "https://www.gdgoctupm.com/",
  },
  {
    title: "DeptFlow",
    description:
      "A web-based faculty management system with AI assisted scheduling. It streamlines administrative tasks, optimizes scheduling, and enhances communication for computer studies department at TUP Manila.",
    images: [deptflow1, deptflow2, deptflow3, deptflow4, deptflow5, deptflow6],
    techStack: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Gemini API",
    ],
    githubUrl: "https://github.com/Dan-code25/Depflow-Frontend",
    websiteUrl: "https://depflow.vercel.app/",
  },
  {
    title: "Retrn - Lost and Found System",
    description:
      "A web-based faculty management system with AI assisted scheduling. It streamlines administrative tasks, optimizes scheduling, and enhances communication for computer studies department at TUP Manila.",
    images: [
      retrn1,
      retrn2,
      retrn3,
      retrn4,
      retrn5,
      retrn6,
      retrn7,
      retrn8,
      retrn9,
    ],
    techStack: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
    ],
    githubUrl: "https://github.com/Dan-code25/Lost-and-Found-System-RETRN-",
    websiteUrl: "https://retrn-tupm.vercel.app/",
  },
  {
    title: "Compass Votify",
    description:
      "A centralized web-based online voting system for the student organization COMPASS at TUP Manila, aimed to replace use of Google Forms and manual voting.",
    images: [
      compass1,
      compass2,
      compass3,
      compass4,
      compass5,
      compass6,
      compass7,
    ],
    techStack: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
    ],
    githubUrl: "https://github.com/Dan-code25/tupm-compass-voting-system",
    websiteUrl:
      "https://tupm-compass-votify-bgzunar7k-dan-code25s-projects.vercel.app/",
  },
  {
    title: "YogaMatch",
    description:
      " A desktop application with computer vision that provide real-time yoga posture correction for 11 yoga poses, designed to assist users maintaining proper form and prevent injury during home workouts.",
    images: [yogamatch],
    techStack: ["Python", "Mediapipe", "PyQt6", "OpenCV"],
    githubUrl: "https://github.com/Dan-code25/YogaMatch-Yoga-Pose-Checker",
  },
  {
    title: "Matooto",
    description:
      "A mobile application MVP for the InnOlympics 2026 Hackathon, designed to bridge language barriers in education through mother tongue based learning while automating the teachers’ workload in reading assessments.",
    images: [
      matooto1,
      matooto2,
      matooto3,
      matooto4,
      matooto5,
      matooto6,
      matooto7,
      matooto8,
    ],
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "Gemini API",
      "Node.js",
      "Express",
    ],
    githubUrl: "https://github.com/NewRi20/Matooto-CtrlC-V",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#101010] via-[#0d0d0e] to-[#151515] flex flex-col items-center justify-center min-h-screen px-6 py-4 gap-10 md:gap-14 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="gradient-text font-black text-[32px] md:text-[40px] leading-tight text-center">
          Projects
        </h2>
      </ScrollReveal>

      <div className="w-full max-w-6xl">
        <ScrollReveal delayMs={100}>
          <div className="grid gap-6 lg:grid-cols-2">
            {sampleProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                images={project.images}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                websiteUrl={project.websiteUrl}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
