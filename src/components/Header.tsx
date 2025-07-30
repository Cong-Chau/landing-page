"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Feature", id: "feature" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const [activeId, setActiveId] = useState<string>("");
  const [isClickScrolling, setIsClickScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isClickScrolling) {
            const id = entry.target.id;
            setActiveId(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isClickScrolling]);

  // Scroll to section
  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      setIsClickScrolling(true);
      target.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);
      setTimeout(() => setIsClickScrolling(false), 1000);
    }
  };

  return (
    <nav
      ref={headerRef}
      className="z-50 fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md shadow-lg text-white p-2 md:p-3 flex items-center justify-between min-h-16 slide-down fade-in-top"
    >
      {/* Logo */}
      <div className="pl-8">
        <span
          onClick={() => handleNavClick("hero")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:cursor-pointer"
        >
          MAXIUS
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex flex-row justify-between gap-12 pr-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`font-bold btn-item-hover p-1 pl-2 pr-2 ${
              activeId === item.id ? "btn-item-focus" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-blue-600 p-2 transition-colors duration-200"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-black/40 backdrop-blur-md shadow-lg flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 py-4 gap-4"
            : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              handleNavClick(item.id);
              setIsMobileMenuOpen(false);
            }}
            className={`text-white font-bold btn-item-hover px-4 py-2 ${
              activeId === item.id ? "btn-item-focus" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Header;
