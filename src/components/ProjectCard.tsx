import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  githubUrl: string;
  websiteUrl?: string;
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  images,
  techStack,
  githubUrl,
  websiteUrl,
  className = "",
}: ProjectCardProps) {
  const safeImages = useMemo(
    () => (images.length > 0 ? images : [""]),
    [images],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultipleImages = safeImages.length > 1;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === safeImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white-darker/40 bg-[linear-gradient(135deg,rgba(24,24,27,0.96),rgba(9,9,11,0.88))] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_40px_rgba(0,0,0,0.4)] transition duration-300 ease-out hover:-translate-y-1 hover:border-orange-400/55 hover:shadow-[0_22px_50px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-4 md:p-5">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-white-darker/40 bg-black/40">
          <div className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
            <div
              className="flex h-full w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {safeImages.map((image, index) => (
                <div
                  key={`${title}-${index}`}
                  className="h-full w-full flex-shrink-0"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`${title} preview ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(15,15,15,0.92),rgba(35,35,35,0.88))] text-sm text-white-dark">
                      Project preview
                    </div>
                  )}
                </div>
              ))}
            </div>

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  aria-label="Previous project image"
                  onClick={goToPrevious}
                  className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/55 p-2 text-white-dark transition hover:border-orange-400/50 hover:text-white"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  aria-label="Next project image"
                  onClick={goToNext}
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/55 p-2 text-white-dark transition hover:border-orange-400/50 hover:text-white"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-md">
              {safeImages.map((_, index) => (
                <button
                  key={`${title}-dot-${index}`}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-6 bg-normal"
                      : "w-2.5 bg-white/35"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-white-dark-hover md:text-2xl">
              {title}
            </h3>
          </div>

          <p className="text-sm leading-7 text-white-dark md:text-[15px]">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white-dark"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white-darker/40 bg-black/30 px-4 py-2 text-sm font-medium text-white-dark transition hover:border-white-dark-hover hover:text-white"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-orange-400/40 bg-[rgba(253,111,0,0.14)] px-4 py-2 text-sm font-medium text-white transition hover:border-orange-400/70 hover:bg-[rgba(253,111,0,0.2)]"
              >
                <ExternalLink size={16} />
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
