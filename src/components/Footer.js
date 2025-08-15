import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const solutions = [
    "Property Management",
    "Communication",
    "Analytics & Reporting",
    "Automation Tools",
    "Services",
    "Marketing",
    "Channel Manager",
    "Operations",
  ];

  const resources = [
    "Blog",
    "Marketplace",
    "Case Studies",
    "Webinars",
    "Help Center",
    "Changelog",
    "Privacy Policy",
    "Terms and Services",
  ];

  const company = ["About", "Careers", "Press"];

  const getInTouch = [
    "Sales",
    "Support",
    "Become a Partner",
    "Referral Program",
    "Affiliate Program",
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-hostaway-dark-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <ul className="space-y-2">
              {getInTouch.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1">
              <p className="text-gray-300">Sales: +1-786-829-7337</p>
              <p className="text-gray-300">Support: +1-210-622-8536</p>
            </div>
          </div>

          {/* Language and Social */}
          <div>
            <div className="mb-6">
              <select className="bg-gray-700 text-white px-3 py-2 rounded border-none">
                <option>English</option>
                <option>Français</option>
                <option>Español</option>
                <option>Italiano</option>
              </select>
            </div>

            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© 2025 Hostaway</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
