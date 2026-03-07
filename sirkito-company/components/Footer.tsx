import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Sirkito",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sirkitoebc",
    icon: <FaInstagram />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/sirkitoLogo.jpg"
                alt="Sirkito Electrical Builders"
                width={45}
                height={45}
                className="rounded-md"
              />
              <span className="text-white font-semibold text-sm leading-tight">
                Sirkito Electrical <br /> Builders Corp.
              </span>
            </div>

            <p className="text-sm text-slate-400">
              Delivering reliable electrical, mechanical, and infrastructure
              solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>📞 0917 186 1551</li>
              <li>✉️ sirkitocorp@gmail.com</li>
              <li>
                📍 1665 Interior 7, Zamora Street,<br/>
                Paco, Manila, Philippines 1007
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sirkito Electrical Builders Corporation. All rights reserved.
        </div>

      </div>
    </footer>
  );
}