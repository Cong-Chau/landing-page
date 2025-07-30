"use client";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
function Footer() {
  const footerLinks = {
    Products: [
      "Server Solutions",
      "Semiconductors",
      "Performance Analytics",
      "Support",
    ],
    Industries: [
      "Data Centers",
      "Cloud Computing",
      "Edge Computing",
      "Enterprise",
    ],
    Company: ["About", "Technology", "Careers", "News"],
    Support: ["Documentation", "Technical Support", "Training", "Community"],
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ];

  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate");
          } else {
            target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.7,
      }
    );
    if (title1Ref.current) {
      observer.observe(title1Ref.current);
    }

    if (title2Ref.current) {
      observer.observe(title2Ref.current);
    }

    linksRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    contentsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="bg-[#0D1117] text-gray-300 px-8 py-12">
      {/* Top content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/*Logo and description */}
        <div className="md:col-span-1">
          <div ref={title1Ref} className="fade-in ">
            <h1 className="text-blue-500 font-semibold text-lg mb-4 ">
              Maxius
            </h1>
            <p className="text-sm leading-relaxed mb-4 ">
              The only self-developed semiconductor company focused on
              High-Performance Servers. Leading the global IT industry with
              innovative server technology solutions.
            </p>
          </div>
          <div className="flex space-x-2">
            {socialLinks.map((social, index) => (
              <a
                ref={(el) => {
                  if (el) linksRef.current[index] = el;
                }}
                key={index}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={social.label}
                className={`w-9 h-9 bg-zinc-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 fade-in stagger-${
                  1 + index
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer links */}
        {Object.entries(footerLinks).map(([category, links], index) => (
          <div
            ref={(el) => {
              if (el) contentsRef.current[index] = el;
            }}
            key={category}
            className={`fade-in stagger${index + 1}`}
          >
            <h3 className="text-white font-semibold mb-2">{category}</h3>
            <ul className="space-y-1 text-sm">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:underline text-gray-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-sm flex flex-col md:flex-row justify-between max-w-7xl mx-auto text-gray-500">
        <p>© 2025 Maxius. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:underline"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
