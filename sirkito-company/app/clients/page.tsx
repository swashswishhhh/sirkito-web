import Image from "next/image";

export const metadata = {
  title: "Clients",
  description: "Companies and organizations that trust us.",
};

const clients = [
  { name: "Nippon Telegraph and Telephone Corporation", logo: "/images/ntt.png" },
  { name: "Net Pacific", logo: "/images/netPacific.png" },
  { name: "Philippine Green Building Council", logo: "/images/pgbc.png" },
  { name: "GENESYS", logo: "/images/genesys.png" },
  { name: "DAIKAI ENGINEERING", logo: "/images/daikai.png" },
  { name: "AboitizPower", logo: "/images/aboitiz.png" },
  { name: "Torre Lorrenzo", logo: "/images/torre.png" },
  { name: "HOEGH FLEET SERVICES PHILS,. INC.", logo: "/images/hfsph.png" },
];

export default function ClientsPage() {
  return (
    <main>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Client Portfolio
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Clients
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            We are proud to partner with leading businesses and institutions
            across telecommunications, real estate, manufacturing, and other
            key industries.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="relative mb-4 h-20 w-40 rounded-md bg-white/40 transform transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-slate-800">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}