"use client";

import { useState, useEffect, useRef } from "react";
function Header() {
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Feature", id: "feature" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      requestAnimationFrame(() => {
        header.classList.add("animate");
      });
    }
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav
      ref={headerRef}
      className={
        "z-50 fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md shadow-lg text-white p-2 md:p-3 flex items-center justify-between min-h-16 slide-down fade-in"
      }
    >
      {/* Logo */}
      <div className="pl-8">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          MAXIUS
        </span>
      </div>
      {/* Nav item */}
      <div className="hidden sm:flex flex-row justify-between gap-12 pr-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              const target = document.getElementById(item.id);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `#${item.id}`);
              }
            }}
            className="font-bold btn-item-hover p-1 pl-2 pr-2"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Header;
