import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Our portfolio of electrical projects.",
};

const projects = [
  {
    title: "Commercial Complex Wiring",
    description:
      "Complete electrical design and installation for a 50,000 sq ft commercial building.",
  },
  {
    title: "Industrial Plant Upgrade",
    description:
      "Power distribution and automation upgrade for a manufacturing facility.",
  },
  {
    title: "Residential Solar Installation",
    description:
      "Turnkey solar solution for a 200-home residential development.",
  },
  {
    title: "Office Building Retrofit",
    description:
      "LED lighting and smart controls retrofit for a 10-story office tower.",
  },
  {
    title: "Hospital Backup Power",
    description:
      "Emergency generator and UPS installation for critical healthcare facilities.",
  },
  {
    title: "Warehouse Lighting",
    description:
      "High-bay LED lighting and motion sensors for a 100,000 sq ft warehouse.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Projects
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A selection of recent electrical projects we have completed.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
