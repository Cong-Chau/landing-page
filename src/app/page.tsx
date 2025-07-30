"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  const sectionIds = ["hero", "feature", "about", "contact"];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (window.location.hash !== `#${id}`) {
            history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // 50% visible thì trigger
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
