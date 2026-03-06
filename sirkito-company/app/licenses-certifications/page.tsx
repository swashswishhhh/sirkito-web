import Image from "next/image";

export const metadata = {
  title: "Licenses & Certifications",
  description:
    "Official licenses and certifications of Sirkito Electrical Builders Corporation, demonstrating compliance and industry standards.",
};

const documents = [
  {
    title: "Electrical Contracting License",
    description:
      "Official registration and authorization to perform electrical contracting works in compliance with national and local regulations.",
    image: "/images/license1.jpg",
    href: "/images/license1.jpg",
  },
  {
    title: "Safety & Compliance Certification",
    description:
      "Certification confirming adherence to safety, quality, and environmental standards for engineering and construction projects.",
    image: "/images/license2.jpg",
    href: "/images/license2.jpg",
  },
];

export default function LicensesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Compliance & Accreditation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Licenses & Certifications
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600">
            Sirkito Electrical Builders Corporation operates with full compliance
            to national and local regulations. Our licenses and certifications
            reflect our commitment to safety, quality, and professional
            standards in every project we deliver.
          </p>
        </div>
      </section>

      {/* Document grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {documents.map((doc) => (
              <article
                key={doc.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="relative h-56 w-full bg-slate-100">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {doc.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {doc.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
                    >
                      View Document
                    </a>
                    <a
                      href={doc.href}
                      download
                      className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-blue-500 hover:text-blue-700"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

