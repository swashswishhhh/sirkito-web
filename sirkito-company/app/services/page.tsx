import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services",
  description: "Electrical & ELV Systems, Mechanical & Ventilation Systems, Plumbing & Drainage Systems, and Fire Protection Systems.",
};

const services = [
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

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Comprehensive electrical, mechanical, plumbing, and fire protection
            systems engineered for safety, reliability, and efficient
            operations.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
