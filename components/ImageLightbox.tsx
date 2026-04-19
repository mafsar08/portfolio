"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ImageLightboxProps = {
  images: string[];
  alt: string;
};

export default function ImageLightbox({ images, alt }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <>
      {/* Thumbnail row */}
      <div className="flex gap-2 mt-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => {
              setActiveIndex(i);
              setOpen(true);
            }}
            className="relative w-24 h-16 rounded-md overflow-hidden border border-border hover:border-accent transition-colors duration-200"
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${alt} screenshot ${activeIndex + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
