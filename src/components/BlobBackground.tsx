import { useEffect, useRef } from "react";

const blobs = [
  {
    color: "#FA6E00",
    size: 550,
    initialX: 10,
    initialY: 20,
    speedX: 0.003,
    speedY: 0.0025,
    rangeX: 18,
    rangeY: 14,
  },
  {
    color: "#E60026",
    size: 480,
    initialX: 75,
    initialY: 65,
    speedX: 0.0022,
    speedY: 0.0018,
    rangeX: 14,
    rangeY: 16,
  },
  {
    color: "#FA6E00",
    size: 350,
    initialX: 50,
    initialY: 10,
    speedX: 0.0018,
    speedY: 0.0028,
    rangeX: 20,
    rangeY: 12,
  },
  {
    color: "#E60026",
    size: 300,
    initialX: 85,
    initialY: 15,
    speedX: 0.0026,
    speedY: 0.002,
    rangeX: 12,
    rangeY: 18,
  },
  {
    color: "#FA6E00",
    size: 260,
    initialX: 25,
    initialY: 75,
    speedX: 0.002,
    speedY: 0.0032,
    rangeX: 16,
    rangeY: 10,
  },
  {
    color: "#E60026",
    size: 200,
    initialX: 60,
    initialY: 40,
    speedX: 0.0034,
    speedY: 0.0024,
    rangeX: 10,
    rangeY: 14,
  },
];

export default function BlobBackground() {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animations: number[] = [];
    const offsets = blobs.map((_, i) => i * 1.3);

    blobs.forEach((blob, i) => {
      const el = blobRefs.current[i];
      if (!el) return;

      let t = offsets[i];

      const animate = () => {
        t += 0.004;

        const x =
          blob.initialX +
          Math.sin(t * blob.speedX * 100) * blob.rangeX +
          Math.cos(t * blob.speedX * 60) * (blob.rangeX * 0.4);

        const y =
          blob.initialY +
          Math.cos(t * blob.speedY * 100) * blob.rangeY +
          Math.sin(t * blob.speedY * 70) * (blob.rangeY * 0.4);

        el.style.left = `${x}%`;
        el.style.top = `${y}%`;

        animations[i] = requestAnimationFrame(animate);
      };

      animations[i] = requestAnimationFrame(animate);
    });

    return () => animations.forEach(cancelAnimationFrame);
  }, []);

  return (
    <>
      {blobs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => {
            blobRefs.current[i] = el;
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none -z-10"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle at 40% 40%, ${blob.color}, transparent 70%)`,
            opacity: 0.09,
            filter: "blur(60px)",
            left: `${blob.initialX}%`,
            top: `${blob.initialY}%`,
            transition: "opacity 0.3s ease",
          }}
        />
      ))}
    </>
  );
}
