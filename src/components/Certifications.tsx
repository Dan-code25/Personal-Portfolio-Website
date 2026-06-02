import { useState } from "react";
import ScrollReveal from "./ScrollReveal.tsx";

import cert1 from "../assets/certificates/From Brain to Binary - Certificate (1).jpg";
import cert2 from "../assets/certificates/G-Tech Summit 2025 - Certificate (1).jpg";
import cert3 from "../assets/certificates/Google_Extended_Cloud_Manila_Build with AI - Certificate (1).jpg";
import cert4 from "../assets/certificates/Hawk-A-Thon - Certifcate (1).jpg";
import cert5 from "../assets/certificates/Intermediate SQL - Certificate (1).jpg";
import cert6 from "../assets/certificates/Intermediate SQL CPE Assessment - Certificate (1).jpg";
import cert7 from "../assets/certificates/Introduction to Python 101 - Certificate (1).jpg";
import cert8 from "../assets/certificates/Introduction to SQL - Certificate (1).jpg";
import cert9 from "../assets/certificates/Introduction to SQL CPE Assessment - Certificate (1).jpg";
import cert10 from "../assets/certificates/Ctrl C_V - Bringas, Dan Jheniel-1.png";
import badge1 from "../assets/badges/ciscobadge1.png";
import badge2 from "../assets/badges/ciscobadge2.png";
import badge3 from "../assets/badges/ciscobadge3.png";
import badge4 from "../assets/badges/ciscobadge4.png";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
};

type Badge = {
  title: string;
  issuedDate: string;
  image?: string;
  credentialUrl: string;
};

const certifications: Certification[] = [
  {
    title: "From Brain to Binary",
    issuer: "TUP-Manila Compass",
    date: "Mar 2024",
    image: cert1,
  },
  {
    title: "G-Tech Summit 2025",
    issuer: "Google Developer Groups on Campus",
    date: "2025",
    image: cert2,
  },
  {
    title: "Google Extended Cloud Manila: Build with AI",
    issuer: "Google Cloud Manila",
    date: "2025",
    image: cert3,
  },
  {
    title: "Hawk-A-Thon",
    issuer: "TUP-Manila Technological Organizations",
    date: "2025",
    image: cert4,
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    date: "2025",
    image: cert5,
  },
  {
    title: "Intermediate SQL CPE Assessment",
    issuer: "DataCamp",
    date: "2025",
    image: cert6,
  },
  {
    title: "Introduction to Python 101",
    issuer: "MSTConnect",
    date: "2023",
    image: cert7,
  },
  {
    title: "Introduction to SQL",
    issuer: "DataCamp",
    date: "2025",
    image: cert8,
  },
  {
    title: "Introduction to SQL CPE Assessment",
    issuer: "DataCamp",
    date: "2025",
    image: cert9,
  },
  {
    title: "InnOlympics 2026 Hackathon",
    issuer: "Google Developer Groups on Campus - PLM",
    date: "2026",
    image: cert10,
  },
];

const badges: Badge[] = [
  {
    title: "Introduction to Modern AI",
    issuedDate: "Issued 2026",
    image: badge1,
    credentialUrl:
      "https://www.credly.com/badges/ef4449cf-a58c-462c-90e7-d1818c5425d7/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    issuedDate: "Issued 2025",
    image: badge2,
    credentialUrl:
      "https://www.credly.com/badges/fe27c4c4-3d0e-48f4-964d-4f169b62279a/public_url",
  },
  {
    title: "Ethical Hacker",
    issuedDate: "Issued 2025",
    image: badge3,
    credentialUrl:
      "https://www.credly.com/badges/98fd121a-3cd6-4bb5-8d7a-d083e09ac574/public_url",
  },
  {
    title: "Cyberthreat Management",
    issuedDate: "Issued 2025",
    image: badge4,
    credentialUrl:
      "https://www.credly.com/badges/f1cf84fd-59b5-41c4-b991-a395dec202e2/public_url",
  },
];

export default function Certifications() {
  const [modalCert, setModalCert] = useState<Certification | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCert = certifications[activeIndex];

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1,
    );
  };

  const openView = (c: Certification) => {
    setModalCert(c);
  };

  const closeModal = () => setModalCert(null);

  return (
    <section
      id="certifications"
      className="bg-gradient-to-b from-[#101010] via-[#0d0d0e] to-[#151515] flex flex-col items-center justify-center px-6 py-12 gap-10 md:gap-14 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="gradient-text font-black text-[32px] md:text-[40px] leading-tight text-center">
          Certifications
        </h2>
      </ScrollReveal>

      <div className="w-full max-w-4xl">
        <ScrollReveal delayMs={100}>
          <div className="relative">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous certification"
              className="cursor-pointer absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-lg text-white transition hover:border-orange-300/40 hover:text-orange-300 md:-left-12"
            >
              &#8249;
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next certification"
              className="cursor-pointer absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-lg text-white transition hover:border-orange-300/40 hover:text-orange-300 md:-right-12"
            >
              &#8250;
            </button>

            <div
              className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(24,24,27,0.97),rgba(9,9,11,0.95))] p-5 shadow-[0_15px_50px_rgba(0,0,0,0.5)]"
              title={`${activeCert.title} — ${activeCert.issuer}`}
            >
              {activeCert.image ? (
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="h-56 w-full rounded-xl object-cover object-top md:h-72"
                  loading="lazy"
                />
              ) : (
                <div className="h-56 w-full rounded-xl bg-[linear-gradient(180deg,#0b0b0b,#141414)] md:h-72" />
              )}

              <div className="mt-4">
                <div className="text-base font-semibold leading-tight text-white md:text-lg">
                  {activeCert.title}
                </div>
                <div className="mt-1 text-xs text-white-dark md:text-sm">
                  {activeCert.issuer}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white-dark">
                  {activeCert.date}
                </span>
                <button
                  type="button"
                  onClick={() => openView(activeCert)}
                  className="cursor-pointer rounded-md border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-200 transition hover:bg-orange-400/20"
                >
                  View Certificate
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {certifications.map((cert, index) => (
                <button
                  key={cert.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${cert.title}`}
                  className={`cursor-pointer h-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "w-8 bg-orange-300"
                      : "w-2.5 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="w-full max-w-6xl">
        <ScrollReveal delayMs={150}>
          <div className="mb-6">
            <h3 className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-white-dark-hover md:text-xl">
              Badges
            </h3>
          </div>

          <div className="relative overflow-hidden">
            <div className="marquee will-change-transform">
              <div className="marquee-track flex items-center gap-5">
                {[...badges, ...badges].map((badge, index) => (
                  <a
                    key={`${badge.title}-${index}`}
                    href={badge.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer group marquee-item relative block h-44 w-80 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(24,24,27,0.96),rgba(9,9,11,0.92))] shadow-md transition-transform duration-300 hover:scale-105"
                    aria-label={`Open badge: ${badge.title}`}
                  >
                    {badge.image ? (
                      <img
                        src={badge.image}
                        alt={badge.title}
                        className="h-full w-full bg-[#0f0f10] p-2 object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,#151515,#0d0d0e)] text-xs text-orange-200">
                        Add badge image
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h4 className="text-sm font-semibold leading-snug text-white">
                        {badge.title}
                      </h4>
                      <p className="mt-1 text-xs text-white-dark">
                        {badge.issuedDate}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {modalCert && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-6"
          onClick={closeModal}
        >
          <div
            className="max-h-[90vh] max-w-[90vw] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {modalCert.image ? (
              <img
                src={modalCert.image}
                alt="Certificate"
                className="max-h-[90vh] w-auto object-contain"
              />
            ) : (
              <div className="rounded-xl bg-[linear-gradient(135deg,#0b0b0b,#141414)] p-8 text-center text-white">
                <h3 className="text-xl font-semibold">{modalCert.title}</h3>
                <p className="mt-2 text-sm text-white-dark">
                  {modalCert.issuer}
                </p>
                <p className="mt-1 text-sm text-white-dark">{modalCert.date}</p>
                <p className="mt-4 text-sm text-white-dark">
                  No image available
                </p>
              </div>
            )}
          </div>
          <button
            className="cursor-pointer absolute top-6 right-6 rounded-full bg-black/60 p-2 text-white"
            onClick={closeModal}
            aria-label="Close certificate"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
