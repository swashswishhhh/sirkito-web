import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 p-3">
        <ImagePlaceholder
          label="Service Icon"
          className="h-10 w-10 rounded-md"
          aspectRatio="square"
        />
      </div>
      <h3 className="mb-2 text-base font-semibold text-slate-800 transition-colors group-hover:text-blue-700">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
