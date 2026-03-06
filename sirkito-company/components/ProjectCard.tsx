import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
      <ImagePlaceholder
        label="Project Image"
        aspectRatio="video"
        className="w-full transition-opacity group-hover:opacity-95"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-base font-semibold text-slate-800 transition-colors group-hover:text-blue-700">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}
