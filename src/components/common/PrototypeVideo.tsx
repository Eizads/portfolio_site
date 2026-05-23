"use client";

import Image from "next/image";
import { useState } from "react";

export default function PrototypeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <video
        className="w-full rounded-2xl bg-black"
        controls
        autoPlay
        muted
        playsInline
      >
        <source
          src="/stocks-dashboard-ux/stocks-dashboard-prototype.mp4"
          type="video/mp4"
        />
        Your browser does not support the prototype video.
      </video>
    );
  }

  return (
    <button
      type="button"
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-dark-button text-left"
      onClick={() => setIsPlaying(true)}
      aria-label="Play stocks dashboard prototype video"
    >
      <Image
        src="/stocks-dashboard-ux/mid-fidelity-wireframes.png"
        alt="Stocks dashboard prototype preview"
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover object-top opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-dark-primary/30" />
      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-dark-primary transition-colors group-hover:bg-white">
        <span className="text-lg">▶</span>
        Play prototype
      </span>
    </button>
  );
}
