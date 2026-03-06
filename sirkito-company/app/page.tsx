import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const homeServices = [
  {
    title: "Electrical & ELV Systems",
    description:
      "Comprehensive solutions for Electrical and Extra-Low Voltage (ELV) systems, including design, supply, installation, testing, commissioning, and preventive maintenance. Services cover Generators, Transformers, Grounding, Lightning, Power & Lighting Systems, UPS, FDAS, PAS/BGM, MATV, CCTV, EMS, WLDS, and SCS for residential, commercial, institutional, and industrial buildings.",
  },
  {
    title: "Mechanical & Ventilation Systems",
    description:
      "Turnkey air conditioning and ventilation solutions with design, installation, testing, and maintenance. We handle Chillers, Packaged Central AC, Air Handling Units, Fan Coil Units, Precision AC, Ducted & Split AC systems, Chilled Water Pipelines & Pumps, and Decorative Ducting for all building types.",
  },
  {
    title: "Plumbing & Drainage Systems",
    description:
      "Full-service plumbing and drainage solutions, including design, installation, testing, commissioning, and preventive maintenance. We manage water supply networks, pumping systems, storm drainage, irrigation, underground sewage, and stormwater systems for residential, commercial, and industrial facilities.",
  },
  {
    title: "Fire Protection Systems",
    description:
      "Reliable fire safety solutions with full lifecycle support—design, supply, installation, testing, commissioning, and maintenance. Our expertise includes Wet/Dry Sprinkler Systems, Deluge Systems, Risers, Fire Hose Reels, Extinguishers, and FM-200 Suppression Systems, all compliant with BFP and NFPA regulations.",
  },
];

const featuredProjects = [
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
];

const trustedClients = [
  { name: "Nippon Telegraph and Telephone", logo: "/images/ntt.png" },
  { name: "Net Pacific", logo: "/images/netPacific.png" },
  { name: "Philippine Green Building Council", logo: "/images/pgbc.png" },
  { name: "DAIKAI ENGINEERING", logo: "/images/daikai.png" },
  { name: "GENESYS", logo: "/images/genesys.png" },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-y-0 right-[-10%] hidden w-1/2 bg-gradient-to-b from-blue-50/60 to-slate-50/0 lg:block" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Electrical • Mechanical • Fire
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[2.9rem]">
                Integrated Electrical and{" "}
                <span className="text-blue-700">Infrastructure Solutions</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Sirkito Electrical Builders Corporation delivers compliant,
                safety-focused engineering for residential, commercial, and
                industrial projects—from design and installation to testing and
                long-term maintenance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-blue-500 hover:text-blue-700"
                >
                  Request a Consultation
                </Link>
              </div>
              <dl className="mt-8 grid max-w-xl grid-cols-2 gap-6 text-xs text-slate-600 sm:text-sm">
                <div>
                  <dt className="font-medium text-slate-800">
                    Safety & Compliance
                  </dt>
                  <dd className="mt-1">
                    Licensed and certified to national and local standards.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-800">
                    End-to-End Delivery
                  </dt>
                  <dd className="mt-1">
                    From design and supply to testing and commissioning.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative h-[380px] w-full sm:h-[460px] lg:h-[520px]">
              <Image
                src="/images/build.jpg"
                alt="Engineers working on electrical infrastructure"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              What We Deliver
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Core Engineering Services
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Integrated electrical, mechanical, plumbing, and fire protection
              systems designed for reliability, safety, and long-term
              performance.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Track Record
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              A snapshot of projects across commercial, industrial, and
              residential developments.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Trusted Partners
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Clients Who Trust Sirkito
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {trustedClients.map((client) => (
              <div
                key={client.name}
                className="relative h-16 w-32 rounded-md bg-white/40 p-2 sm:h-20 sm:w-40 transform transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(37,99,235,0.18)]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to power your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100">
            Talk to our engineering team about timelines, compliance
            requirements, and complete system design for your facility.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm transition-colors duration-200 hover:bg-blue-50"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}