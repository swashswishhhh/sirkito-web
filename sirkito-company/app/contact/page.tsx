export const metadata = {
  title: "Contact",
  description: "Get in touch for quotes and electrical services.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Get in Touch
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Reach out for a free quote, technical consultation, or to discuss
            the electrical and infrastructure requirements of your next project.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact form */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-slate-900">
                Send a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info & map */}
            <div className="space-y-8">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Contact Information
                </h2>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <span className="font-medium text-slate-700">Phone:</span>{" "}
                    0917 186 1551
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">Email:</span>{" "}
                    sirkitocorp@gmail.com
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">Address:</span>{" "}
                    1665 Interior 7, Zamora Street, Paco, Manila, Philippines,
                    1007
                  </li>
                </ul>
              </div>

              {/* Styled map card */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-[200px] items-center justify-center bg-slate-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-slate-800">
                    Sirkito Electrical Builders Corporation
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    1665 Interior 7, Zamora Street, Paco, Manila, Philippines
                    1007
                  </p>
                  <a
                    href="https://maps.app.goo.gl/FAFVWiYrS5mEYK6F6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}