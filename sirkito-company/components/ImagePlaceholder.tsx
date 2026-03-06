import React from "react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "auto";
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  auto: "aspect-auto min-h-[120px]",
};

export default function ImagePlaceholder({
  label,
  className = "",
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-slate-200 text-slate-500 font-medium text-sm border border-slate-300 border-dashed rounded-lg transition-colors hover:bg-slate-300 hover:text-slate-600 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {label}
    </div>
  );
}
