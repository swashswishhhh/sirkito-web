import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Learn about our company, mission, vision, and experience.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-slate-50 py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            About Us
          </h1>
          <p className="mt-2 text-slate-600">
            Your trusted partner for electrical solutions.
          </p>
        </div>
      </section>

      {/* Company introduction */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Company Introduction
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
              Sirkito Electrical Builders Corp is an MEPF contractor providing mechanical, 
              electrical, plumbing, and fire protection services. We support construction 
              projects with reliable systems, proper coordination, and quality workmanship.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
              Our team focuses on doing the work right, meeting project requirements, 
              following safety standards, and delivering on schedule. 
              We value clear communication, accountability, and long-term partnerships with our clients.
              </p>
            </div>
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[450px]">
              <Image
              src="/images/homepage.jpg"
              alt="build Image"
              fill
              className="object-cover rounded-xl shadow-md"
              priority/>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To deliver exceptional electrical services with integrity,
                safety, and reliability. We aim to power homes and businesses
                with solutions that are efficient, compliant, and built to last.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To be the leading electrical services provider in our region,
                known for quality workmanship, customer focus, and innovation in
                sustainable and smart electrical systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Years of Experience
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
            With over two decades of experience in the industry, we have
            completed thousands of projects across residential, commercial, and
            industrial sectors. Our team stays current with the latest codes,
            technologies, and best practices to ensure your project is in expert
            hands.
          </p>
        </div>
      </section>
    </main>
  );
}
