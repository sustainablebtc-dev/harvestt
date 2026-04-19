"use client";

import { useState } from "react";
import Image from "next/image";

export default function Logo({
  width = 140,
  className = "",
  variant = "dark",
}: {
  width?: number;
  className?: string;
  variant?: "dark" | "light";
}) {
  const [useFallback, setUseFallback] = useState(false);

  const src =
    variant === "dark"
      ? "/images/harvestt-logo-black.png"
      : "/images/harvestt-logo-white.png";

  if (useFallback) {
    return (
      <span
        className={`font-serif font-normal tracking-[-0.01em] ${
          variant === "dark" ? "text-navy" : "text-white"
        } ${className}`}
        style={{ fontSize: width * 0.17 }}
      >
        Harvestt
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt="Harvestt"
      width={width}
      height={Math.round(width * 0.227)}
      className={`h-auto ${className}`}
      style={{ width }}
      onError={() => setUseFallback(true)}
      priority
    />
  );
}
